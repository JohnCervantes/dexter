import React from "react";
import Image from "next/image";

export default function Characters({ propRef }) {
  return (
    <div ref={propRef} className="bg-gray-800 w-[80%] flex mb-5">
      <div class="grid grid-cols-1 divide-y-2 w-full divide-red-700">
        <div className="relative w-full h-[400px] p-3">
          <div className="flex flex-col absolute left-10 z-10 w-[80%]">
            <p className="text-4xl">Dexter morgan</p>
            <p className="text-lg">Played by Michael C. Hall</p>
          </div>

          <div className="flex text-center absolute bottom-10 z-10">
            <p>
              America’s favorite serial killer.  Dexter has relocated to the
              rural town of Iron Lake, NY, living under the alias of “Jim
              Lindsay.” He lives in a cabin in the woods and is a sales
              associate at the local store, Fred’s Fish and Game.  It’s been
              nearly a decade, but it’s only a matter of time before Dexter’s
              Dark Passenger inevitably beckons.
            </p>
          </div>
          <Image
            layout="fill"
            objectFit="cover"
            src="https://www.sho.com/site/image-bin/images/1034991_1_0/1034991_1_0_prm-dexter_1024x640.jpg"
          />
        </div>
      </div>
    </div>
  );
}
