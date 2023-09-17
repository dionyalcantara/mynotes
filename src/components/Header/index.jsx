import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'

export function Header() {
  return(
    <Container>
      <Profile to='/profile'>
        <img
          src='https://github.com/dionyalcantara.png'
          alt='Foto do Usuário'
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Diony Alcantara</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}