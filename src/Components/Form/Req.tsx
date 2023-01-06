import React, { useState } from "react";
import axios from "axios";
import { User, ERROR } from "../../Model/Model";
import { useQuery } from "react-query";
import UserCard from "../User/UserCard";
import { calculateAge, deleteSymbols } from "../../Helpers/Helpers";
import Error from "../Error/Error";

const Req = () => {
  const [cedula, setCedula] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [itError, setItError] = useState<ERROR>({
    error: "",
    thereIsError: false,
  });
  const { isLoading, data, error, refetch, isFetching } = useQuery(
    "userData",
    async () => {
      return axios
        .get(`https://api.adamix.net/apec/cedula/${cedula}`)
        .then((result): User => {
          return result.data;
        });
    },
    { enabled: false, refetchOnWindowFocus: false }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cedula !== "") {
      refetch();
      setShow(true);
      setCedula("");
      setItError({ error: "", thereIsError: false });
    } else {
      setItError({ error: "Por favor ingrese una cedula", thereIsError: true });
    }
  };
  return (
    <div className="flex flex-col items-center gap-2  relative bottom-0">
      { itError.thereIsError && (
        <Error error={itError.error} setItError={setItError} />
      )}
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center  sm:flex-row border-[1px] border-indigo-400 px-5 sm:justify-between py-5  sm:py-2 gap-2 rounded-lg absolute top-2 bg-white lg:w-[30%] w-[70%] md:w-[50%]"
      >
        <input
          type="text"
          id="text"
          value={cedula}
          className="outline-none placeholder-slate-500 text-black caret-pink-400 w-[70%] border-[1px] border-slate-300 sm:border-none  py-1 px-2 rounded-lg sm:w-full text-sm sm:text-base  md:text-xl"
          placeholder="Digite su cedula"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCedula(deleteSymbols(e.target.value));
          }}
        />
        <button className="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 hidden sm:block  group-focus:text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button className="block sm:hidden bg-indigo-400 text-white font-semibold  px-3 py-2 text-sm rounded-lg ">
          Buscar
        </button>
      </form>
      {isLoading ? (
        <span className="relative top-36 sm:top-20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </span>
      ) : (
        show && data && <UserCard user={data} setShow={setShow} />
      )}
    </div>
  );
};

export default Req;
