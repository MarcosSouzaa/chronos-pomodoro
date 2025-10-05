import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDow } from './components/CountDown';
import { DefaltInput } from './components/DefaltInput';

import './style/theme.css';
import './style/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDow />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            {/*No input geralmente vamos configurar coisas como type etc. Vou fazer isso no Componente
  DefaltInput/index.tsx*/}
            <DefaltInput labelText='Task' id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0 </p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
