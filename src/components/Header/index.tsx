import logo from '../../assets/logo.png'
import perfil from '../../assets/perfil.png'

import {Container, HeaderLayout, LinkEstilizado} from './style'

export function Header() {
  return (
    <HeaderLayout>
      <img src={logo} alt="logo da empresa voll" />
      <Container>
        <img src={perfil} alt="imagem do perfil do usuário" />
        <LinkEstilizado href="?#">Sair</LinkEstilizado>
      </Container>
    </HeaderLayout>
  )
}


 
