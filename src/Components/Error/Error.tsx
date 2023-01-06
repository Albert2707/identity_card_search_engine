import { FC } from "react";
import { ERROR } from "../../Model/Model";

interface Prop {
  error: string;
  setItError: React.Dispatch<React.SetStateAction<ERROR>>;
}

const Error: FC<Prop> = ({ error, setItError }) => {
  return (
    <div className="bg-red-100 flex justify-center items-center absolute gap-3 p-3  w-[80%] sm:w-auto  rounded-lg -top-12">
      <strong className="text-red-700 text-xs sm:text-base">{error}</strong>
      <button
        onClick={() => {
          setItError({ error: "", thereIsError: false });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5  sm:w-6 h-5 sm:h-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Error;
