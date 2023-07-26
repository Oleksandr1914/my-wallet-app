import { Container, GlobalStyle } from './globalStyles';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ContextProvider from './hoc/ContextProvide';

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Background>
        <Container>
          <Header />
          <Form />
        </Container>
      </Background>
    </ContextProvider>
  );
}

export default App;
