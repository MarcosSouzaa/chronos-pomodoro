import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDow } from './components/CountDown';
import { DefaltInput } from './components/DefaltInput';
import { Cycles } from './components/Cycles';
import { DefaltButton } from './components/DefaltButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';

import './style/theme.css';
import './style/global.css';

export function App() {
  let numero = 0;
  /*Função lidar com o click*/
  function handleClick() {
    const span = document.getElementById('numero');
    /*se não existir span retorna e não faz nada */
    if (!span) return;

    /* se existir, soma um número e coloco o texto de dentro do span 
'span.innerText' igual ao meu número */
    numero += 1;
    span.innerText = numero.toString();
    console.log(numero, Date.now());
    /* Dessa forma eu sincronizei o meu número do botão com o console
    mas ele não sincroniza o label. Esse problema é chamado de efeito colateral
    o React não está monitorando.
     */
  }

  return (
    <>
      <Heading>
        Número: <span id='numero'>{numero}</span>
      </Heading>
      {/* No clique do botão a função anônima mostra o número no console (f12)
      depois vou tirar daqui e criar uma função handleClick lá em cima.*/}
      <button onClick={handleClick}>Aumenta</button>

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
            <DefaltInput
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Nesse ciclo descanse por 5 min.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaltButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
