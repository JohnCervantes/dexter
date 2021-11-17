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
      <div className="flex text-white z-40 w-full bg-transparent backdrop-blur-sm backdrop-contrast-125 text-2xl p-5 fixed top-0">
        {router.pathname === "/" ? (
          <div className="flex">
            <p
              className="text-gray-200 hover:text-white cursor-pointer"
              onClick={() =>
                episodesRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Episodes{" | "}
            </p>
            <p
              className="text-gray-200 hover:text-white cursor-pointer"
              onClick={() =>
                charactersRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              &nbsp;Characters {" | "}
            </p>
            <Link href="/gallery">
              <div className="text-gray-200 hover:text-white cursor-pointer">
                &nbsp;Gallery{" "}
              </div>
            </Link>
          </div>
        ) : (
          <Link href="/">
            <div className="text-gray-200 hover:text-white cursor-pointer">
              &nbsp;{"<"} Go back
            </div>
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
