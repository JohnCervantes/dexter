import React, { useState } from "react";
import { readState } from "../operations/query";
import { setState } from "../operations/mutation";
import { useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faThumbsUp,
  faThumbsDown,
  faExclamationTriangle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { RESET_MODAL } from "../cache";
import Image from "next/image";
import { addLike, addDislike, addImage } from "../operations/mutation";
import { uploadPhoto } from "../helpers/aws";

export default function Modal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectImage, setSelectImage] = useState("/default.jpg");
  const {
    data: {
      readState: { showModal, images, selectedImage, ipAddress },
    },
  } = useQuery(readState("showModal, images, selectedImage, ipAddress"));

  if (!showModal.show) {
    return null;
  }
  if (showModal.type === "upload") {
    return (
      <ModalTemplate>
        <p className="form-header">Upload an image</p>
        <div className="border-2 border-red-700 w-[60%] mb-5" />

        <div className="flex w-[90%] ">
          <div className="flex flex-col w-full items-center justify-center mx-5">
            <Image
              src={
                selectImage !== "/default.jpg"
                  ? URL.createObjectURL(selectImage.target.files[0])
                  : selectImage
              }
              height="400px"
              width="400px"
              alt="uploaded picture"
            />
            <label className="mt-3 ">Select an image...</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setSelectImage(e);
              }}
            />
            <button
              className="button mt-3"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                const uploadedImageURL = await uploadPhoto(selectImage);
                addImage(uploadedImageURL);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </ModalTemplate>
    );
  } else {
    return (
      <ModalTemplate>
        <div className="flex flex-col w-full items-center justify-center mx-5">
          <p className="text-left w-full ml-5 mt-3">
            {new Date(Number(images[selectedImage].date))
              .toString()
              .substring(0, 15)}
          </p>
          <div className="relative w-full h-[450px] group mt-10">
            <Image
              src={Object.values(JSON.parse(images[selectedImage].URL))[0]}
              objectFit="contain"
              layout="fill"
              alt="uploaded picture"
              placeholder="blur"
              blurDataURL={images[selectedImage].blurDataURL}
              quality="100"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setState({ selectedImage: selectedImage - 1 });
              }}
              disabled={selectedImage <= 0}
            >
              {" "}
              <FontAwesomeIcon
                className={
                  "transform transition duration-500 ease-in opacity-0 group-hover:opacity-100 absolute top-[50%] w-[50px] h-[25px] hover:text-red-700 z-50"
                }
                icon={faChevronLeft}
                size="lg"
              />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setState({ selectedImage: selectedImage + 1 });
              }}
              disabled={selectedImage >= images.length - 1}
            >
              <FontAwesomeIcon
                className="transform transition duration-500 ease-in opacity-0 group-hover:opacity-100 absolute top-[50%] right-0 w-[50px] h-[25px] hover:text-red-700 z-50"
                icon={faChevronRight}
                size="lg"
              />
            </button>
          </div>

          <div className="flex mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                const obj = JSON.parse(images[selectedImage].likes);
                obj.push(ipAddress);
                addLike(images[selectedImage]._id, JSON.stringify(obj));
              }}
              disabled={JSON.parse(images[selectedImage].likes).includes(
                ipAddress
              )}
            >
              <FontAwesomeIcon
                className={
                  "w-[50px] h-[25px] hover:text-red-700 " +
                  (JSON.parse(images[selectedImage].likes).includes(ipAddress)
                    ? " text-red-700"
                    : "")
                }
                icon={faThumbsUp}
                size="lg"
              />
            </button>

            <p className="mr-2">
              {JSON.parse(images[selectedImage].likes).length}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                const obj = JSON.parse(images[selectedImage].dislikes);
                obj.push(ipAddress);
                addDislike(images[selectedImage]._id, JSON.stringify(obj));
              }}
              disabled={JSON.parse(images[selectedImage].dislikes).includes(
                ipAddress
              )}
            >
              <FontAwesomeIcon
                className={
                  "w-[50px] h-[25px] hover:text-red-700 " +
                  (JSON.parse(images[selectedImage].dislikes).includes(
                    ipAddress
                  )
                    ? " text-red-700"
                    : "")
                }
                icon={faThumbsDown}
                size="lg"
              />
            </button>
            <p className="mr-2">
              {JSON.parse(images[selectedImage].dislikes).length}
            </p>
          </div>
        </div>
      </ModalTemplate>
    );
  }
}

function ModalTemplate(props) {
  return (
    <div>
      <div
        className="modal-container "
        onClick={() => {
          setState({ showModal: RESET_MODAL });
        }}
      />
      <form className={"modal-form "}>
        <div className="top-3 right-0 absolute">
          <FontAwesomeIcon
            className="w-[50px] h-[25px] cursor-pointer hover:text-red-700"
            icon={faTimes}
            size="lg"
            onClick={() => {
              setState({ showModal: RESET_MODAL });
            }}
          />
        </div>
        {props.children}
      </form>
    </div>
  );
}

function LoginError(props) {
  return (
    <p>
      <FontAwesomeIcon
        className="error"
        icon={faExclamationTriangle}
        size="sm"
      />
      {props.children}
    </p>
  );
}
