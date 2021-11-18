import React from "react";

export default function Episodes({ propRef }) {
  return (
    <div className="bg-gray-900 p-5 w-[90%] sm:w-[80%] mb-5">
      <div ref={propRef} className="grid grid-cols-1 divide-y-2 divide-red-700">
        <p className="text-3xl font-bold">Season 1: 10 Episodes</p>
        <div className="mb-5">
          <p className="m-5 text-2xl text-center font-semibold">
            Episode 1: Cold Snap
          </p>
          <div className="sm:w-[60%] mx-auto">
            <div className="relative pt-[56.25%] overflow-hidden ">
              <iframe
                className="absolute w-full h-full top-0 left-0"
                src="https://www.youtube-nocookie.com/embed/xvUJVFbpBjI"
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
            <b>Directed by:</b> Marcos Siega
          </p>
          <p>
            <b>Teleplay by:</b> Clyde Phillips
          </p>
          <p>
            <b>Written by:</b> Clyde Phillips and Adam Rapp
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
          <br/>
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
          <p>
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
          <p>
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
          <p>
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
          <p>
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
          <p>
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
          <p className="m-5 font-semibold text-2xl text-center">
            Episode 9: TBA
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
          <p>
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
        </div>
      </div>
    </div>
  );
}
