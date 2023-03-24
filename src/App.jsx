import styled from '@emotion/styled';
import AuthenticateApp from './Authenticate/AuthenticateApp';
import UnAuthenticateApp from './Authenticate/UnAuthenticateApp';;
import { useAuth } from './context/AuthContext';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

function App() {
  const { user } = useAuth();
  return (
    <section>
      <Container>
        {user ? <AuthenticateApp /> : <UnAuthenticateApp />}
      </Container>
    </section>
  );
}

export default App;
