import React, { useState, useEffect } from "react";
import { readState, ALL_METADATA } from "../operations/query";
import { setState } from "../operations/mutation";
import { useQuery, useLazyQuery } from "@apollo/client";
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
  const [selectImage, setSelectImage] = useState("/default.jpg");
  const [index, setIndex] = useState(null);
  const {
    data: {
      readState: { showModal, selectedImage, fingerPrintID, images },
    },
  } = useQuery(readState("showModal, selectedImage, fingerPrintID, images"));

  const [metadataQuery, { called, loading, data, error }] = useLazyQuery(
    ALL_METADATA,
    {
      fetchPolicy: "network-only",
    }
  );

  useEffect(() => {
    if (data) {
      setState({
        showModal: { show: true, type: "default" },
        selectedImage: {
          ...data.image,
          ...images[index],
          idx: index,
        },
      });
    }
  }, [data]);

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
            {new Date(Number(selectedImage.date)).toString().substring(0, 15)}
          </p>
          <div className="relative w-full h-[450px] group mt-10">
            <Image
              src={Object.values(JSON.parse(selectedImage.URL))[0]}
              objectFit="contain"
              layout="fill"
              alt="uploaded picture"
              placeholder="blur"
              blurDataURL={selectedImage.blurDataURL}
              quality="100"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                metadataQuery({
                  variables: {
                    _id: images[selectedImage.idx - 1]._id,
                  },
                });
                setIndex(selectedImage.idx - 1);
              }}
              disabled={selectedImage.idx <= 0}
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
                metadataQuery({
                  variables: {
                    _id: images[selectedImage.idx + 1]._id,
                  },
                });
                setIndex(selectedImage.idx + 1);
              }}
              disabled={selectedImage.idx >= images.length - 1}
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
                const obj = JSON.parse(selectedImage.likes);
                if (obj.includes(fingerPrintID)) {
                  obj.splice(obj.indexOf(fingerPrintID), 1);
                } else {
                  obj.push(fingerPrintID);
                }
                addLike(selectedImage._id, JSON.stringify(obj));
              }}
            >
              <FontAwesomeIcon
                className={
                  "w-[50px] h-[25px] hover:text-red-700 " +
                  (JSON.parse(selectedImage.likes).includes(fingerPrintID)
                    ? " text-red-700"
                    : "")
                }
                icon={faThumbsUp}
                size="lg"
              />
            </button>

            <p className="mr-2">{JSON.parse(selectedImage.likes).length}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                const obj = JSON.parse(selectedImage.dislikes);
                if (obj.includes(fingerPrintID)) {
                  obj.splice(obj.indexOf(fingerPrintID), 1);
                } else {
                  obj.push(fingerPrintID);
                }

                addDislike(selectedImage._id, JSON.stringify(obj));
              }}
            >
              <FontAwesomeIcon
                className={
                  "w-[50px] h-[25px] hover:text-red-700 " +
                  (JSON.parse(selectedImage.dislikes).includes(fingerPrintID)
                    ? " text-red-700"
                    : "")
                }
                icon={faThumbsDown}
                size="lg"
              />
            </button>
            <p className="mr-2">{JSON.parse(selectedImage.dislikes).length}</p>
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
