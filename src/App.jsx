import styled from '@emotion/styled';
import { BrowserRouter } from 'react-router-dom';
import UnAuthenticateApp from './Authenticate/UnAuthenticateApp';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

function App() {
  return (
    <section>
      <Container>
        <BrowserRouter>
          <UnAuthenticateApp />
        </BrowserRouter>
      </Container>
    </section>
  );
}

export default App;
