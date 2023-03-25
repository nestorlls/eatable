import styled from '@emotion/styled';
import AuthenticateApp from './Authenticate/AuthenticateApp';
import UnAuthenticateApp from './Authenticate/UnAuthenticateApp';
import { useAuth } from './context/AuthContext';

const Section = styled.section`
  margin: 75px auto;
`;

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  position: relative;
`;

function App() {
  const { user } = useAuth();
  return (
    <Section>
      <Container>
        {user ? <AuthenticateApp /> : <UnAuthenticateApp />}
      </Container>
    </Section>
  );
}

export default App;
