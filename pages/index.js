import React, { useEffect } from "react";
import Head from "next/head";
import Episodes from "../components/Episodes";
import Characters from "../components/Characters";
import { setState } from "../operations/mutation";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import connectMongo from "../dbConfig/mongoose";
import { getStandAloneApolloClient } from "./_app";
import { ALL_EPISODES } from "../operations/query";

export default function index({
  charactersRefProp,
  episodesRefProp,
  episodes,
}) {
  useEffect(async () => {
    FingerprintJS.load()
      .then((fp) => fp.get())
      .then((result) => {
        setState({ fingerPrintID: result.visitorId });
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Dexter: New Blood - Home page</title>
        <meta
          name="description"
          content="The unofficial website of the popular TV series Dexter by Showtime. Checkout the episodes, character bios, images, and more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black w-full flex flex-col items-center align-middle pt-5 text-white">
        <div className="h-[60px]" ref={episodesRefProp}></div>

        <div className="bg-gray-900 p-5 w-[90%] sm:w-[80%] mb-5">
          <div className="grid grid-cols-1 divide-y-2 divide-red-700">
            <p className="text-3xl font-bold">Season 1: 10 Episodes</p>
            {episodes.map((episode) => {
              return <Episodes key={episode._id} episodeProp={episode} />;
            })}
          </div>
        </div>

        <div className="h-[60px]" ref={charactersRefProp}></div>
        <Characters />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    await connectMongo();
    const client = getStandAloneApolloClient();
    const { data, error } = await client.query(
      { query: ALL_EPISODES },
      {
        fetchPolicy: "no-cache",
      }
    );

    if (!data) {
      return { props: { episodes: [], error } };
    }

    return {
      props: {
        episodes: data.episodes,
      },
    };
  } catch (error) {
    return { props: { episodes: [], error: error.message } };
  }
}
