import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import google from '../../assets/google.png'

import {FooterStyle, ListStyle, SocialList} from './style'

export function Footer() {

  return (
    <FooterStyle>
      <ListStyle>
        <SocialList>
          <a href="?#">
            <img src={facebook} alt="icone do facebook" />
          </a>
        </SocialList>
        <SocialList>
          <a href="?#">
            <img src={instagram} alt="icone do facebook" />
          </a>
        </SocialList>
        <SocialList>
          <a href="?#">
            <img src={whatsapp} alt="icone do facebook" />
          </a>
        </SocialList>
        <SocialList>
          <a href="?#">
            <img src={google} alt="icone do facebook" />
          </a>
        </SocialList>
      </ListStyle>
      <p>2023 © Desenvolvido por Edimilson | Projeto fictício sem fins comerciais.</p>
    </FooterStyle>
  )
}