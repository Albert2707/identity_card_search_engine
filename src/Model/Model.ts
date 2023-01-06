export interface User {
  Cedula: string;
  Nombres: string;
  Apellido1: string;
  Apellido2: string;
  FechaNacimiento: string;
  LugarNacimiento: string;
  IdSexo: string;
  IdEstadoCivil: string;
  IDEstatus: string;
  EstatusCedulaAzul: string;
  CedulaAnterior: string;
  ok: boolean;
  foto: string;
}

export interface ERROR{
  error: string;
  thereIsError: boolean;
}
