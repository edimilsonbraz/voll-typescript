import IProfissional from '../../types/IProfissional'
import { Card } from './Card'
import { ContentTitle, DivButton, SectionCard, Title } from './style'

export function Avaliation({profissionais}: {profissionais: IProfissional[] | null}) {
  return (
    <SectionCard>
      <ContentTitle>
        <Title>
          <span>+</span>
          <h2>Avaliações de especialistas</h2>       
        </Title>
      
        <h3>Maio 2023</h3>
        
      </ContentTitle>


      {profissionais?.map((profissional) => {
        return <Card key={profissional.id} profissional={profissional} />
      })}

      <DivButton>
        <button>Ver mais</button>
      </DivButton>
    </SectionCard>
  )
}
