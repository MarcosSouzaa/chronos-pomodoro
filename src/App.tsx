import { Heading } from './components/Heading';
import { Container } from './components/Container';

import './style/theme.css';
import './style/global.css';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
