import styled from "styled-components";


export const SectionCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  h3 {
    width: 100%;
    color: var(--azul-escuro);
    margin-top: 0;
  }

`

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 42px;

  h2 {
    color: var(--azul-claro);
    font-weight: bold;
  }
`

export const DivButton = styled.div`
  width: 100%;

  button {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    background: var(--azul-escuro);
    padding: 1rem 2rem;

    border: none;
    border-radius: 6px;
  }
`