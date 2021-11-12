import React from "react";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <p className="w-[50%]">
        This is only a fan-made website that is intented to promote the new
        season of dexter and the show in general.
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
      <div className="flex w-[50%] justify-end">
        <FontAwesomeIcon
          icon={faEnvelope}
          onClick={() =>
            window.open("mailto:JohnCervantes@protonmail.com", "_blank")
          }
          className="w-[50px] h-[40px] mr-2 cursor-pointer hover:text-white"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faGithubSquare}
          onClick={() =>
            window.open("https://github.com/JohnCervantes", "_blank")
          }
          className="w-[50px] h-[40px] mr-2 cursor-pointer hover:text-white"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          onClick={() =>
            window.open("https://www.linkedin.com/in/j-cervantes/", "_blank")
          }
          className="w-[50px] h-[40px]  mr-2 cursor-pointer hover:text-white"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faYoutubeSquare}
          onClick={() =>
            window.open(
              "https://www.youtube.com/user/vocalists5555/featured",
              "_blank"
            )
          }
          className="w-[50px] h-[40px]  mr-2 cursor-pointer hover:text-white"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faTwitterSquare}
          onClick={() => window.open("https://twitter.com/vocalistx", "_blank")}
          className="w-[50px] h-[40px] mr-2 cursor-pointer hover:text-white"
          size="2x"
        />
      </div>
    </div>
  );
}
