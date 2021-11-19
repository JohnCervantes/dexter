import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ALL_METADATA } from "../operations/query";
import { setState } from "../operations/mutation";
import { useLazyQuery } from "@apollo/client";

export default function ImageContainer({
  metadata: { _id, URL, blurDataURL },
  idx,
}) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const [metadataQuery, { called, loading, data, error }] = useLazyQuery(
    ALL_METADATA,
    {
      fetchPolicy: "network-only",
      variables: { _id },
    }
  );

  useEffect(() => {
    if (data) {
      setState({
        showModal: { show: true, type: "default" },
        selectedImage: { ...data.image, _id, URL, blurDataURL, idx },
      });
    }
  }, [data]);

  return (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        metadataQuery();
      }}
      className="flex-col w-full sm:w-[300px] mb-5 sm:mb-0 hover:cursor-pointer z-20 "
    >
      {/* <p
        className={
          "pb-1  font-Rajdhani text-lg " +
          (inView ? " delay-300 animate-fade-in-right-to-left" : " invisible")
        }
      >
        <span className="  font-MerriweatherSans text-xl">{title}</span> ~{" "} 
        {new Date(Number(date)).toString().substring(0, 15)}
      </p> */}
      {/* <div
        className={
          " h-[400px] w-[300px]" +
          (showModal.show ? " fixed animate-img-fade-in" : "")
        } 
      >*/}
      <div
        className={
          "flex w-full h-[300px] relative shadow-xl " +
          (inView ? " animate-fade-in-up" : "")
        }
      >
        <Image
          className="hover:animate-img-grow"
          src={Object.values(JSON.parse(URL))[0]}
          layout="fill"
          objectFit="contain"
          placeholder={blurDataURL !== undefined ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          quality="100"
        />
      </div>
    </div>
  );
}
