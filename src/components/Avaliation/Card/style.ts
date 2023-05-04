import styled from 'styled-components'

export const ContainerCard = styled.div`
  flex: 40%;
  max-width: 100%;
  height: 90px;
  background-color: #fff;
  padding: 0em 1em 1em;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: var(--cinza);
  margin: 1em 2em 1em 0;
`

export const ListUl = styled.ul`
  list-style: none;
  padding: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const ListItens = styled.li`
  list-style: none;
`

export const ImagemProf = styled.img`
  width: 64px;
  height: 64px;
  border: 2px solid var(--azul-claro);
  border-radius: 50%;
  object-fit: cover;

  margin-right: 1rem;
`

export const ListInformations = styled.li`
  flex-grow: 1;
`

export const ParagraphName = styled.p`
  font-weight: 700;
`
export const ParagraphEspecialize = styled.p`
  font-size: 14px;
  margin: 0.5em 0;
`
