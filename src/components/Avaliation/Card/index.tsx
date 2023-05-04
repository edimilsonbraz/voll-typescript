import { Rating } from '@mui/material'
import IProfissional from '../../../types/IProfissional'
import {
  ContainerCard,
  ImagemProf,
  ListInformations,
  ListItens,
  ListUl,
  ParagraphEspecialize,
  ParagraphName
} from './style'

export function Card({ profissional }: { profissional: IProfissional }) {
  return (
    <ContainerCard>
      <ListUl>
        <ListItens>
          <ImagemProf
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
        </ListItens>
        <ListInformations>
          <ParagraphName>{profissional.nome}</ParagraphName>
          <ParagraphEspecialize>
            {profissional.especialidade}
          </ParagraphEspecialize>
        </ListInformations>

        <ListItens>
          <Rating
            name="simple-controlled"
            value={profissional.nota}
            readOnly={true}
          />
        </ListItens>
      </ListUl>
    </ContainerCard>
  )
}
