import avaliacao from '../../assets/avaliacao.png'
import grafico from '../../assets/grafico.png'
import consulta from '../../assets/consulta.png'
import styled from 'styled-components'
import { ContainerEstilizado, TituloEstilizado } from './style'

interface Props {
  imagem?: string,
  children?: React.ReactNode
}

interface IImagens {
  avaliacao: string,
  grafico: string,
  consulta: string
}

const SpanEstilizado = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'}
`

export function Titulo({imagem, children}: Props) {
  const listaDeImanges: IImagens = {
    avaliacao: avaliacao,
    grafico: grafico,
    consulta: consulta
  }

  return (
    <ContainerEstilizado>
      {imagem && <SpanEstilizado imagem={listaDeImanges[imagem as keyof IImagens]} />}

      <TituloEstilizado>{children}</TituloEstilizado>
    </ContainerEstilizado>
  )

}

