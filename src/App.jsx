import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticateApp from './Authenticate/AuthenticateApp';
import UnAuthenticateApp from './Authenticate/UnAuthenticateApp';
import Login from './components/Login/Login';
import SingUp from './components/Singup/SingUp';
import { useAuth } from './context/AuthContext';
import SearchPage from './Pages/SearchPage';

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
