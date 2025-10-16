import { Container } from '../../components/Container';
import { CountDow } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDow />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
