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
import { useState } from 'react';

/* REFATORANDO
 -------------------------------------------------  
 Eu quero que todos os componentes que usam 'numero'
 saibam das mudanças em seu valor.
 Posso usar um Hook chamado useState que é uma função
 importado do React.
 Sempre que eu usar useState, não vou usar atribuição (=) 
 diretamente. Eu preciso usar a função do segundo array
 do índice 1 no caso, para setar o valor passado.
 ex: primeiro passo o número e depois configuro com a 
 função do state()
 const [numero, setNumero]
 Agora, toda vez que eu mudar o valor de número, o React
 renderizará todos campos que usarem a variável número
 o nome disso é programação reativa. */

/*Se eu for utililizar uma Reinicialização pesada: 
 --------------------------------------------------
export function App() {
  const [numero, setNumero] = useState(() => {
    console.log('Lazy initialization');
    return 0;
  });
*/

/* Se eu não for usar o valor anterior:
const [numero, setNumero] = useState(0);
*/

export function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    /*setNumero(numero + 1); Essa não é a forma correta de eu usar essa
    função toda vez que eu dependo de um valor anterior para mudar o estado
    vou usar uma prevState (arrow function) que vai guardar o valor anterior*/
    setNumero(prevState => prevState + 1);
  }
  return (
    <>
      <Heading>Número: {numero}</Heading>

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
