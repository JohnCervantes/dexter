import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { readState } from "../operations/query";
import { useQuery } from "@apollo/client";

export default function Footer() {
  const {
    data: {
      readState: { hasMore },
    },
  } = useQuery(readState("hasMore"));
  if (hasMore) return null;
  else {
    return (
      <div className="footer">
        <p className="w-[50%]">
          This is only a fan-made website that is intended to promote Dexter:
          New Blood and the original Dexter TV series.
        </p>
        {/* <div
          className="border-2 group p-2 hover:border-white mb-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="group-hover:text-white group-hover:cursor-pointer">
            <FontAwesomeIcon icon={faArrowUp} /> {"  "}
            To the top
          </span>
        </div> */}
        <div className="flex flex-col w-[50%] font">
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={faEnvelope}
              onClick={() =>
                window.open("mailto:JohnCervantes@protonmail.com", "_blank")
              }
              className="w-[50px] h-[40px] mr-2 cursor-pointer hover:text-red-300"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/j-cervantes/",
                  "_blank"
                )
              }
              className="w-[50px] h-[40px]  mr-2 cursor-pointer hover:text-red-300"
              size="2x"
            />
          </div>
          <div className="flex justify-end mr-3 mt-2 text-lg">
            <p>+1 773-918-9513</p>
          </div>
        </div>
      </div>
    );
  }
}
