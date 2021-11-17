import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageContainer from "../components/ImageContainer";
import { setState } from "../operations/mutation";
import { readState, ALL_IMAGES } from "../operations/query";
import { getSignedUrl } from "../helpers/aws";
import { UPDATE_IMAGE } from "../operations/mutation";
import { useQuery } from "@apollo/client";
import connectMongo from "../dbConfig/mongoose";
import { getStandAloneApolloClient } from "./_app";
import { getPlaiceholder } from "plaiceholder";

export default function gallery(props) {
  useEffect(async () => {
    const response = await fetch("https://geolocation-db.com/json/");
    const data = await response.json();
    setState({ ipAddress: data.IPv4 });
  }, []);

  const {
    data: {
      readState: { images, initialLoad, ipAddress },
    },
  } = useQuery(readState("images, initialLoad, ipAddress"));

  const [pagination, setPagination] = useState(2);

  useEffect(() => {
    console.log(props.images)
    if (!initialLoad) {
      console.log(props.images)
      setState({
        images: images.concat(props.images.slice(0, 8)),
        initialLoad: true,
      });
    }
  }, []);

  return (
    <div className="bg-black">
      <div className="flex justify-center">
        <p className="text-white text-center text-3xl font-bold p-3">Gallery</p>
        {ipAddress === process.env.ADMIN ? (
          <button
            className="text-white bg-gray-600 rounded p-2"
            onClick={(e) => {
              e.preventDefault();
              setState({ showModal: { show: true, type: "upload" } });
            }}
          >
            Upload an Image
          </button>
        ) : undefined}
      </div>

      <InfiniteScroll
        className="mx-auto items-center w-full flex flex-col p-5 sm:grid sm:grid-cols-4 sm:gap-3 justify-items-center overflow-hidden"
        dataLength={images.length}
        next={() => {
          setTimeout(() => {
            setState({
              images: images.concat(
                props.images.slice(images.length, 8 * pagination - 1)
              ),
            });
            setPagination(pagination + 1);
          }, 1500);
        }}
        hasMore={images.length < props.images.length}
        loader={
          <div className="fixed text-white bottom-10 text-2xl font-bold z-20">
            <div className="flex">
              <FontAwesomeIcon
                className="animate-spin h-[30px] w-[20px] mr-1"
                size="sm"
                icon={faSpinner}
              />
              <p>Loading more images...</p>
            </div>
          </div>
        }
      >
        {images.map((i, index) => (
          <ImageContainer key={i._id} metadata={i} idx={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    await connectMongo();
    const client = getStandAloneApolloClient();
    const { data, error } = await client.query(
      { query: ALL_IMAGES },
      {
        fetchPolicy: "no-cache",
      }
    );

    if (!data) {
      return { props: { images: [], error } };
    }
    let images = [...data.images];
    let i = 0;

    for (const image of images) {
      let imageKey = Object.keys(JSON.parse(image.URL))[0];
      const updatedPresignedURL = await getSignedUrl(imageKey);
      const { base64 } = await getPlaiceholder(updatedPresignedURL);
      images[i] = {
        ...image,
        URL: JSON.stringify({
          [imageKey]: updatedPresignedURL,
        }),
        blurDataURL: base64,
      };

      client.mutate({
        mutation: UPDATE_IMAGE,
        variables: {
          _id: images[i]._id,
          URL: images[i].URL,
        },
      });
      i++;
    }

    //shuffle images
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    return {
      props: {
        images,
        revalidate: 500000,
      },
    };
  } catch (error) {
    return { props: { images: [], error: error.message } };
  }
}
