import { GlobalStyle } from './globalStyles';
import Background from './components/Background/Background';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Header />
        <p>children </p>
      </Background>
    </>
  );
}

export default App;
