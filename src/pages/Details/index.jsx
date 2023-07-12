import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText';
export function Details(){
  return(
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title='Excluir Nota' />

          <h1>Título Exemplo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magnam rem vero voluptatum consectetur aliquid facere accusantium iure corporis, a reiciendis eius laboriosam quaerat est ut expedita voluptatem non? Pariatur.</p>

          <Section title='Links úteis'>
            <Links>
              <li>
                <a href="#">https://github.com/dionyalcantara</a>
              </li>
              <li>
                <a href="#">https://github.com/dionyalcantara</a>
              </li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='React' />
            <Tag title='NodeJS' />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}