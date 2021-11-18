// import { readState } from "../operations/query";
// import { useQuery } from "@apollo/client";

export default function Spinner() {
  // const {
  //   data: {
  //     readState: { showSpinner },
  //   },
  // } = useQuery(readState("showSpinner"));

  // if (!showSpinner) {
  //   return null;
  // }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="loader p-5 flex space-x-2">
        <div className="w-4 h-4 bg-transparent rounded-full border-red-700 border-2  animate-bounce"></div>
        <div className="w-4 h-4 bg-transparent rounded-full border-red-700 border-2 animate-bounce200"></div>
        <div className="w-4 h-4 bg-transparent rounded-full border-red-700 border-2 animate-bounce400"></div>
      </div>
    </div>
  );
}
