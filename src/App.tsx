import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Graphic } from './components/Graphic';
import { Header } from './components/Header';
import { TableComponent } from './components/TableComponent';
import { Titulo } from './components/Titulo';
import { useDadosConsulta } from './hooks/useDadosConsulta';
import { useDadosProfissionais } from './hooks/useDadosProfissionais';

function App() {
  const {dados: consultas, erro: consultasErro} = useDadosConsulta()
  const {dados: profissionais, erro: profissionaisErro} = useDadosProfissionais()

  if(consultasErro || profissionaisErro) {
    alert("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Header />

      <Container>
        <Titulo>Área Administrativa</Titulo>
        <TableComponent consultas={consultas}/>
        <Graphic consultas={consultas} profissionais={profissionais}/>
      </Container>

      <Footer />
    </>
  )
}

export default App;
