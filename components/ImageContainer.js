import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { setState } from "../operations/mutation";

export default function ImageContainer({
  metadata: { URL, date, blurDataURL },
  idx,
}) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      onClick={() => {
        setState({
          showModal: { show: true, type: "default" },
          selectedImage: idx,
        });
      }}
      className="flex-col w-full sm:w-[300px] hover:cursor-pointer z-20 "
    >
      {/* <p
        className={
          "pb-1  font-Rajdhani text-lg " +
          (inView ? " delay-300 animate-fade-in-right-to-left" : " invisible")
        }
      >
        <span className="  font-MerriweatherSans text-xl">{title}</span> ~{" "} 
        {new Date(Number(date)).toString().substring(0, 15)}
      </p> */}
      {/* <div
        className={
          " h-[400px] w-[300px]" +
          (showModal.show ? " fixed animate-img-fade-in" : "")
        } 
      >*/}
      <div
        className={
          "flex w-full h-[300px] relative shadow-xl " +
          (inView ? " animate-fade-in-up" : "")
        }
      >
        <Image
          src={Object.values(JSON.parse(URL))[0]}
          layout="fill"
          objectFit="contain"
          placeholder={blurDataURL !== undefined ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          quality="100"
        />
      </div>
    </div>
  );
}
