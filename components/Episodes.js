import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { readState, EPISODE_RATING } from "../operations/query";
import { setState, addRating } from "../operations/mutation";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";

export default function Episodes({ propRef, episodeProp }) {
  const [episode, setEpisode] = useState(undefined);
  const [isEpisodeSet, setIsEpisodeSet] = useState(false);
  const { loading, error, data } = useQuery(EPISODE_RATING, {
    fetchPolicy: "network-only",
    variables: { _id: episodeProp._id },
  });

  const {
    data: {
      readState: { fingerPrintID },
    },
  } = useQuery(readState("fingerPrintID"));

  useEffect(() => {
    if (data && !isEpisodeSet) {
      setEpisode({ ...episodeProp, rating: data.rating });
      setIsEpisodeSet(true);
    }
  }, [data]);

  if (!episode) return <Spinner />;

  const averageRating =
    episode.rating.rating &&
    Object.keys(JSON.parse(episode.rating.rating)).length > 0
      ? Object.values(JSON.parse(episode.rating.rating)).reduce(
          (a, b) => a + b,
          0
        ) / Object.keys(JSON.parse(episode.rating.rating)).length
      : 0;

  return (
    <div className="bg-gray-900 p-5 w-[90%] sm:w-[80%] mb-5">
      <div ref={propRef} className="grid grid-cols-1 divide-y-2 divide-red-700">
        <p className="text-3xl font-bold">Season 1: 10 Episodes</p>
        <div key={episode._id} className="mb-5">
          <p className="m-5 text-2xl text-center font-semibold">
            {episode.title}
          </p>
          <div className="sm:w-[60%] mx-auto">
            <div className="relative pt-[56.25%] overflow-hidden ">
              <iframe
                className="absolute w-full h-full top-0 left-0"
                src={`https://www.youtube-nocookie.com/embed/${episode.src}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="text-center underline">Watch the trailer</p>
          <br />
          <p>
            <b>Directed by:</b> {episode.director}
          </p>
          {episode.teleplay && (
            <p>
              <b>Teleplay by:</b> {episode.teleplay}
            </p>
          )}
          <p>
            <b>Written by:</b> {episode.writter}
          </p>
          {episode.rating && (
            <div>
              <p className="inline-block">
                <b>Episode Rating: &nbsp;</b>
              </p>

              <StarRatings
                starDimension="20px"
                rating={averageRating}
                starRatedColor="red"
                starSpacing="2px"
                changeRating={async (newRating) => {
                  const updatedRating = JSON.parse(episode.rating.rating);
                  updatedRating[fingerPrintID] = newRating;
                  const result = await addRating(episode._id, updatedRating);
                  setEpisode({ ...episode, rating: { rating: result } });
                }}
                numberOfStars={5}
                name="rating"
              />
              <p className="inline-block ml-2">
                {averageRating.toFixed(1)} Overall Rating based on{" "}
                {Object.keys(JSON.parse(episode.rating.rating)).length} user
                reviews.
              </p>
            </div>
          )}

          <br />
          <p>
            <b>Episode Synopsis:</b>
          </p>
          <p>{episode.synopsis}</p>
        </div>
      </div>
    </div>
  );
}
