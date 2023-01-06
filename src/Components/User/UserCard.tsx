import { calculateAge, civilState } from "../../Helpers/Helpers";
import { User } from "../../Model/Model";

interface Prop {
  user: User;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserCard: React.FC<Prop> = ({ user, setShow }) => {
  return (
    <>
      {user.ok === false ? (
        <div className="relative top-36  sm:top-20 bg-white shadow-md border-[1px] border-gray-200 rounded-lg lg:w-[25%] md:w-[30%] w-[80%] py-10">
          <button
            className="absolute right-3 top-3"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {user && (
            <div className="flex  items-center justify-center gap-10 ">
              <h1 className="  text-xs break-all  sm:text-base  lg:text-xl font-semibold">
                Cedula no encontrada
              </h1>
            </div>
          )}
        </div>
      ) : (
        <div className="relative mb-10 top-36  sm:top-20 bg-white shadow-md border-[1px] border-gray-200 rounded-lg lg:w-[30%] xl:w-[25%]  md:w-[50%] w-[70%] py-10">
          <button
            className="absolute right-3 top-3"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {user && (
            <div className="flex flex-col sm:flex-row  items-center justify-center gap-5  sm:gap-10 ">
              <img
                src={user.foto}
                className="object-cover outline outline-offset-2 outline-2 outline-indigo-500 w-20 sm:w-28  h-20 sm:h-28 rounded-full"
                alt=""
              />
              <div className="flex flex-col gap-1 items-center">
                <div className="flex gap-1">
                  <strong className="text-sm sm:text-base">
                    {user.Nombres}
                  </strong>
                  <strong className="text-sm sm:text-base">
                    {user.Apellido1}
                  </strong>
                </div>
                <span className="text-sm sm:text-base">
                  {user.IdSexo === "F" ? "Femenina" : "Masculino"}
                </span>
                <span className="text-sm sm:text-base">
                  {civilState(user.IdSexo, user.IdEstadoCivil)}
                </span>

                <span className="text-sm sm:text-base">
                  Edad: {calculateAge(user.FechaNacimiento)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserCard;
