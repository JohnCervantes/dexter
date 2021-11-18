import React from "react";

import Head from "next/head";
import Episodes from "../components/Episodes";
import Characters from "../components/Characters";



export default function index({ charactersRefProp, episodesRefProp }) {
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
        <Episodes />
        <div className="h-[60px]" ref={charactersRefProp}></div>
        <Characters />
      </div>
    </div>
  );
}
