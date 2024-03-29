import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/about'
import Home from './components/home'
import Users from './components/users'

export default function App() {
  return (
   <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/about'>About</Link>
           </li>
           <li>
             <Link to='/users'>Users</Link>
           </li>
         </ul>
       </nav>
       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path='/about'>
            <AboutRoute />          
            </Route>

            <Route path='/users'>
            <UsersRoute />
            </Route>
            
            <Route path='/'>
            <HomeRoute />
            </Route>
        </Switch>
     </div>
   </Router>
  );
}

function HomeRoute(){
  return <Home />;
}

function AboutRoute(){
  return <About />;
}

function UsersRoute(){
  return <Users />;
}