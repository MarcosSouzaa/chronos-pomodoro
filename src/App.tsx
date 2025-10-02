import { Heading } from './components/Heading';

import './style/theme.css';
import './style/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        accusantium, laboriosam esse quo eveniet quasi praesentium ipsum sunt
        minus possimus sit totam tempora dicta exercitationem blanditiis
        adipisci omnis mollitia. Consectetur.
      </p>
    </>
  );
}
