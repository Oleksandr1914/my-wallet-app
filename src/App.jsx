import { Container, GlobalStyle } from './globalStyles';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Container>
          <Header />
          <Form />
        </Container>
      </Background>
    </>
  );
}

export default App;
