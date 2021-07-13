import './App.css';
import { Container } from 'react-boostrap'
import RegisterPage from './pages/RegisterPage';
import AuthProvider from './context/authContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ miniHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
          <AuthProvider>
            <Switch>
              <Route path="/" component={Products} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;
