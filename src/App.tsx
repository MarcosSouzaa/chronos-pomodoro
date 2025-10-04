import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './style/theme.css';
import './style/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
