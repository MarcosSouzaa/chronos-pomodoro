import { Heading } from './components/Heading';

import './style/theme.css';
import './style/global.css';

export function App() {
  return (
    //aqui, estou paasando props para o componente Heading
    // o props é um objeto que guarda todas as propriedades que eu passo
    //para o componente Heading
    //o props.children guarda tudo que eu passo entre as tags do componente
    //nesse caso, o texto "Olá Mundo!"
    // posso também passar outras propriedades, como attr e attr2
    //essas propriedades podem ser de qualquer tipo: número, string, boolean, objeto, array, função...
    //dentro do componente Heading, eu posso acessar essas propriedades através do objeto props
    //por exemplo, props.attr vai me dar o valor 123 e props.attr2 vai me dar o valor 'StringQualquer'
    <>
      <Heading>Olá Mundo!</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        accusantium, laboriosam esse quo eveniet quasi praesentium ipsum sunt
        minus possimus sit totam tempora dicta exercitationem blanditiis
        adipisci omnis mollitia. Consectetur.
      </p>
    </>
  );
}
