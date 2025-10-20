import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../cycles';
import { DefaltButton } from '../defaltButton';
import { DefaltInput } from '../defaltInput';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        {/*No input geralmente vamos configurar coisas como type etc.
             Vou fazer isso no Componente DefaltInput/index.tsx*/}
        <DefaltInput
          labelText='Task'
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
  );
}
