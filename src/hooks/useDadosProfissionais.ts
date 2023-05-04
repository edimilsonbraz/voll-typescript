import IProfissional from "../types/IProfissional";
import useFetch from "../useFetch";


export function useDadosProfissionais() {
  return useFetch<IProfissional[]>({url : 'profissionais'})
}