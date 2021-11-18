import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ApolloClient, ApolloProvider, HttpLink } from "@apollo/client";
import { cache } from "../cache.js";
import Modal from "../components/Modal";

export const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: cache,
  link: new HttpLink({
    uri:
      process.env.REACT_APP_GRAPHQL_URL ||
      process.env.REACT_APP_LOCAL_GRAPHQL_URL,
    // Additional options
  }),
});

export const getStandAloneApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    cache: cache.restore({}),
    link: new HttpLink({
      uri:
        process.env.REACT_APP_GRAPHQL_URL ||
        process.env.REACT_APP_LOCAL_GRAPHQL_URL,
      // Additional options
    }),
  });
};

function MyApp({ Component, pageProps }) {
  const episodesRef = useRef();
  const charactersRef = useRef();
  const galleryRef = useRef();
  const router = useRouter();

  return (
    <ApolloProvider client={client}>
      <div className="flex text-white z-40 w-full bg-transparent backdrop-blur-sm backdrop-contrast-125 text-2xl p-2 fixed top-0">
        {router.pathname === "/" ? (
          <div className="flex">
            <p
              className="hover:text-red-700 cursor-pointer"
              onClick={() =>
                episodesRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Episodes
            </p>
            <p>&nbsp;{" | "}&nbsp;</p>
            <p
              className="hover:text-red-700 cursor-pointer"
              onClick={() =>
                charactersRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Characters
            </p>
            <p>&nbsp;{" | "}&nbsp;</p>
            <Link href="/gallery">
              <div className="hover:text-red-700 cursor-pointer">Gallery</div>
            </Link>
          </div>
        ) : (
          <Link href="/">
            <div className="hover:text-red-700 cursor-pointer">{"<"} Home</div>
          </Link>
        )}
      </div>
      <Modal />
      <Header />
      <Component
        {...pageProps}
        episodesRefProp={episodesRef}
        charactersRefProp={charactersRef}
      />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
