import IConsulta from "./types/IConsulta";
import useFetch from "./useFetch";

export function useDadosConsulta () {
  return useFetch<IConsulta[]>({url: 'consultas'})
}