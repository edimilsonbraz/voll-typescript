import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TableComponent } from './components/TableComponent';
import { Titulo } from './components/Titulo';
import { useDadosConsulta } from './useDadosConsulta';

function App() {
  const {dados} = useDadosConsulta()
  return (
    <>
      <Header />

      <Container>
        <Titulo>Área Administrativa</Titulo>
        <TableComponent consultas={dados}/>
      </Container>

      <Footer />
    </>
  )
}

export default App;
