import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import IConsulta from '../../types/IConsulta'
import { CellStyled, LineStyled } from './style'

export function TableComponent({
  consultas
}: {
  consultas: IConsulta[] | null
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <CellStyled>Data</CellStyled>
              <CellStyled>Horario</CellStyled>
              <CellStyled>Profissional</CellStyled>
              <CellStyled>Especialidade</CellStyled>
              <CellStyled>Paciente</CellStyled>
              <CellStyled>Modalidade</CellStyled>
            </TableRow>
          </TableHead>

          <TableBody>
            {consultas?.map((linha) => {
              return (
                <LineStyled key={linha.id}>
                  <CellStyled component="th" scope="row">
                    {new Date(linha.data).toLocaleDateString()}
                  </CellStyled>
                  <CellStyled>{linha.horario}</CellStyled>
                  <CellStyled>{linha.profissional[0].nome}</CellStyled>
                  <CellStyled>{linha.profissional[0].especialidade}</CellStyled>
                  <CellStyled>{linha.paciente}</CellStyled>
                  <CellStyled>{linha.modalidade}</CellStyled>
                </LineStyled>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
