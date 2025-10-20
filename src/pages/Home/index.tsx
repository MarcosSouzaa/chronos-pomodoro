import { Container } from '../../components/container';
import { CountDow } from '../../components/countDown';
import { MainForm } from '../../components/mainForm';
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
