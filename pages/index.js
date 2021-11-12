import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function index() {
  return (
    <div>
      <Head>
        <title>Dexter</title>
        <meta
          name="description"
          content="Fan-made website of a popular TV series called Dexter. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-hidden">
        <div className="w-screen h-screen relative">
          <Image
            src="https://www.sho.com/site/image-bin/images/1034991_1_0/1034991_1_0_prm-keyart_1700x1063.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 0"
          />
        </div>
        <div className="text-center w-full absolute top-0 text-white font-OpenSans p-5">
          <p className="text-xl ">
            DEXTER IS BACK! KILLER NEW EPISODES EVERY SUNDAY{" "}
          </p>
          <div className="mx-auto border-2 border-red-700 w-[15%] my-3" />
        </div>
        <div className=" absolute bottom-10 left-5 text-white font-OpenSans p-5">
          <p className="text-4xl">DEXTER: NEW BLOOD </p>
          <p>
            Set 10 years after Dexter went missing in the eye of Hurricane
            Laura, the series finds him living under an assumed name in the
            small town of Iron Lake, New York. Dexter may be embracing his new
            life, but in the wake of unexpected events in this close-knit
            community, his Dark Passenger beckons.
          </p>
          <button
            className="underline"
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=l9H1uSS_zkk",
                "_blank"
              );
            }}
          >
            WATCH THE TRAILER {">"}
          </button>
          <div className="flex align-middle justify-center mt-3">
            <button
              onClick={() => {
                window.open(
                  "https://www.sho.com/order?i_cid=int-default-8492",
                  "_blank"
                );
              }}
              className="trial-button"
            >
              START YOUR 30 DAY FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
