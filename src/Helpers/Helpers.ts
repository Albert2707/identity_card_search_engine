import { getDefaultState } from "react-query/types/core/mutation";

export const calculateAge = (userAge: string): number => {
  const age: Date = new Date(userAge);
  const currentDate: Date = new Date();
  let currentAge: number = currentDate.getFullYear() - age.getFullYear();

  if (
    age.getMonth() + 1 > currentDate.getMonth() + 1 ||
    age.getDate() > currentDate.getDate()
  )
    currentAge--;

  return currentAge;
};

export const deleteSymbols = (str: string): string => {
 return str.replace(/[-,?,_,¿,(,),&,<,>,$,@,!]/gi,"").trim()

};

export const civilState = (gender: string, state: string): string =>
  gender === "M"
    ? state === "C"
      ? "casado"
      : "Soltero"
    : state === "C"
    ? "Casada"
    : "Soltera";
