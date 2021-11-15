import React from "react";

export default function Episodes({ propRef }) {
  return (
    <div className="bg-gray-900 p-5 w-[80%] mb-5 font-OpenSans">
      <div ref={propRef} class="grid grid-cols-1 divide-y-2 divide-red-700">
        <p className="text-3xl font-bold">Season 1: 10 Episodes</p>
        <div className="mb-5">
          <p className="m-5 text-2xl text-center font-semibold">
            Episode 1: Cold Snap
          </p>
          <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xvUJVFbpBjI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p>
          <p>Directed by: Marcos Siega</p>
          <p>Written by: Clyde Phillips and Adam Rapp</p>
          <br />
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
            Episode 2: Storm of fuck
          </p>
          <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QdB-t0-H6n8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p>
          <p>Directed by: Marcos Siega</p>
          <p>Written by: Warren Hsu Leonard</p>
          <br />
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
          <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-IpKRenVCE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="text-center underline">Watch the trailer</p>
          <p>Directed by: Sanford Bookstaver</p>
          <p>Written by: David McMillan</p>
          <br />
     
        </div>
      </div>
    </div>
  );
}
