import React, { useEffect } from "react";
import StarRatings from "react-star-ratings";
import { readState } from "../operations/query";
import { setState, addRating } from "../operations/mutation";
import { useQuery } from "@apollo/client";

export default function Episodes({ propRef, episodesProp }) {
  const {
    data: {
      readState: { episodes, fingerPrintID },
    },
  } = useQuery(readState("episodes, fingerPrintID"));

  useEffect(() => {
    if (episodesProp) {
      setState({ episodes: episodesProp });
    }
  }, []);

  function calculateAverage() {
    // Number(JSON.parse(episode.rating)[fingerPrintID]);
    return "average/5";
  }

  return (
    <div className="bg-gray-900 p-5 w-[90%] sm:w-[80%] mb-5">
      <div ref={propRef} className="grid grid-cols-1 divide-y-2 divide-red-700">
        <p className="text-3xl font-bold">Season 1: 10 Episodes</p>
        {episodes.map((episode) => {
          const averageRating =
            Object.keys(JSON.parse(episode.rating)).length > 0
              ? Object.values(JSON.parse(episode.rating)).reduce(
                  (a, b) => a + b,
                  0
                ) / Object.keys(JSON.parse(episode.rating)).length
              : 0;
          return (
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
                    await addRating(episode._id, {
                      [fingerPrintID]: newRating,
                    });
                  }}
                  numberOfStars={5}
                  name="rating"
                />
                <p className="inline-block ml-2">
                  {averageRating + ".0 "}
                  Overall Rating based on{" "}
                  {Object.keys(JSON.parse(episode.rating)).length} user reviews.
                </p>
              </div>
              <br />
              <p>
                <b>Episode Synopsis:</b>
              </p>
              <p>{episode.synopsis}</p>
            </div>
          );
        })}

        {/* <div className="mb-5">
          <p className="m-5 font-semibold text-2xl text-center ">
            Episode 2: Storm of fuck
          </p>
          <div className="sm:w-[60%] mx-auto">
            <div className="relative pt-[56.25%] overflow-hidden ">
              <iframe
                className="absolute w-full h-full top-0 left-0"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QdB-t0-H6n8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-center underline">Watch the trailer</p>
          <br />
          <p>
            <b>Directed by:</b> Marcos Siega
          </p>
          <p>
            <b>Written by:</b> Warren Hsu Leonard
          </p>
          <br />
          <p>
            <b>Episode Synopsis:</b>
          </p>
          <p>
            Ten years after leaving Miami, Dexter is living in upstate New York
            under the assumed name Jim Lindsay. He works at a local outdoor shop
            and is dating police chief Angela Bishop. Dexter obeys a rigorous
            daily routine to control his homicidal urges, while heeding advice
            from Debra, whom he still sees in his mind. However, Dexter's
            routine is upset when his son, Harrison, finds him, and a reckless
            local named Matt Caldwell pushes Dexter to sell him an automatic
            weapon. Dexter learns Caldwell once purposely ran his powerboat into
            another craft, killing five people. When Caldwell illegally shoots a
            white deer that Dexter frequently sees during his daily hikes,
            Dexter's "Dark Passenger" begins to resurface.
          </p>
        </div>

        <div className="mb-5">
          <p className="m-5 font-semibold text-2xl text-center">
            Episode 3: Smoke Signals
          </p>
          <div className="sm:w-[60%] mx-auto">
            <div className="relative pt-[56.25%] overflow-hidden ">
              <iframe
                className="absolute w-full h-full top-0 left-0"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/p-IpKRenVCE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-center underline">Watch the trailer</p>
          <br />
          <p>
            <b>Directed by:</b> Sanford Bookstaver
          </p>
          <p>
            <b>Written by:</b> David McMillan
          </p>
          <br />
          <p>
            <b>Episode Synopsis:</b>
          </p>
          <p>TBA</p>
        </div>
        <div className="mb-5">
          <p className="m-5 font-semibold text-2xl text-center">
            Episode 4: H is for Hero
          </p>
          {/* <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p> */}
        {/* <p>
          <b>Directed by:</b> Sanford Bookstaver
        </p>
        <p>
          <b>Written by:</b> Tony Saltzman
        </p>
        <br />
        <p>
          <b>Episode Synopsis:</b>
        </p>
        <p>TBA</p>
      </div>
      <div className="mb-5">
        <p className="m-5 font-semibold text-2xl text-center">
          Episode 5: Runaway
        </p> */}
        {/* <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p> */}
        {/* <p>
          <b>Directed by:</b> TBA
        </p>
        <p>
          <b>Written by:</b> Veronica West
        </p>
        <br />
        <p>
          <b>Episode Synopsis:</b>
        </p>
        <p>TBA</p>
      </div>
      <div className="mb-5">
        <p className="m-5 font-semibold text-2xl text-center">
          Episode 6: End of the Road
        </p> */}
        {/* <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p> */}
        {/* <p>
          <b>Directed by:</b> TBA
        </p>
        <p>
          <b>Written by:</b> Scott Reynolds & Warren Hsu Leonard{" "}
        </p>
        <br />
        <p>
          <b>Episode Synopsis:</b>
        </p>
        <p>TBA</p>
      </div>
      <div className="mb-5">
        <p className="m-5 font-semibold text-2xl text-center">
          Episode 7: Skin of Her Teeth
        </p> */}
        {/* <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p> */}
        {/* <p>
          <b>Directed by:</b> TBA
        </p>
        <p>
          <b>Teleplay by:</b> Veronica West & Kirsa Rein
        </p>
        <p>
          <b>Written by:</b> Veronica West & Kirsa Rein & Alexandra Salerno
        </p>
        <br />
        <p>
          <b>Episode Synopsis:</b>
        </p>
        <p>TBA</p>
      </div>
      <div className="mb-5">
        <p className="m-5 font-semibold text-2xl text-center">
          Episode 8: Big Game
        </p> */}
        {/* <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p> */}
        {/* <p>
          <b>Directed by:</b> TBA
        </p>
        <p>
          <b>Written by:</b> Tony Saltzman & David McMillan
        </p>
        <br />
        <p>
          <b>Episode Synopsis:</b>
        </p>
        <p>TBA</p>
      </div>
      <div className="mb-5">
        <p className="m-5 font-semibold text-2xl text-center">Episode 9: TBA</p> */}
        {/* <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p> */}
        {/* <p>
          <b>Directed by:</b> TBA
        </p>
        <p>
          <b>Written by:</b> Scott Reynolds
        </p>
        <br />
        <p>
          <b>Episode Synopsis:</b>
        </p>
        <p>TBA</p>
      </div>
      <div className="mb-5">
        <p className="m-5 font-semibold text-2xl text-center">
          Episode 10: Sins of the Father
        </p> */}
        {/* <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p> *
          <p>
            <b>Directed by:</b> TBA
          </p>
          <p>
            <b>Teleplay by:</b> Clyde Phillips
          </p>
          <p>
            <b>Written by:</b> Clyde Phillips & Alexandra Franklin & Marc
            Muszynski
          </p>
          <br />
          <p>
            <b>Episode Synopsis:</b>
          </p>
          <p>TBA</p>
        </div> */}
      </div>
    </div>
  );
}
