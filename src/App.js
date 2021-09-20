import './App.css';
import { Switch, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Formcontainer from './components/Posts/FormContainer';
import PostContainer from "./components/Posts/PostContainer"
import UsersContainer from './components/Users/UserContainer';
import Postpage from './components/PostPage/PostPage';



function App() {
  return (
    <header>
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path="/">
       <Formcontainer/>
       <PostContainer />
       </Route>
      <Route exact path="/user">
      <UsersContainer/>
      </Route>
      <Route exact path="/posts/:id">
      <Postpage/>
          </Route>
      </Switch>
    </div>
    </header>
  );
}

export default App;
