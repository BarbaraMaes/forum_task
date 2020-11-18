import './App.css';
import {Container} from './styles/Container';
import Navbar from './components/Navbar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'; 
import UserProvider from './context/UserContext';
import DataProvider from './context/DataContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; 
import PostCreatePage from './pages/PostCreatePage'; 
import PostDetailPage from './pages/PostDetailPage'; 
import PostListPage from './pages/PostListPage'; 
import RegisterPage from './pages/RegisterPage'; 

function App() {
  return (
    <Router>
      <UserProvider>
        <DataProvider>
          <Container>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/register" component={RegisterPage}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/forum" component={PostListPage}/>
              <Route exact path="/new_post" component={PostCreatePage}/>
              <Route exact path="/forum/:id" component={PostCreatePage}/>
            </Switch>
            <Navbar />
          </Container>
        </DataProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
