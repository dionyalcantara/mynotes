import { Container, Profile } from './style'

export function Header() {
  return(
    <Container>
      <Profile>
        <img
          src='https://github.com/dionyalcantara.png'
          alt='Foto do Usuário'
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Diony Alcantara</strong>
        </div>
      </Profile>
    </Container>
  )
}