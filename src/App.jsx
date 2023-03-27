import { useEffect, useState } from 'react';
import { Bg, Circle, Container, Loading, LoadingContainer, Section } from './AppUi';
import AuthenticateApp from './Authenticate/AuthenticateApp';
import UnAuthenticateApp from './Authenticate/UnAuthenticateApp';
import { useAuth } from './context/AuthContext';
import eatable from './assets/icons/eatable.svg';
import bg from './assets/brooke-lark-HlNcigvUi4Q-unsplash.jpg';

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <Bg src={bg} alt='bg' />
      <Circle>
        <img src={eatable} alt='eatable' />
        <p>Food for Everyone</p>
        <Loading></Loading>
      </Circle>
    </LoadingContainer>
  );
};

function App() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Section>
      {loading && !user ? (
        <LoadingPage />
      ) : (
        <Container>
          {user ? <AuthenticateApp /> : <UnAuthenticateApp />}
        </Container>
      )}
    </Section>
  );
}

export default App;
