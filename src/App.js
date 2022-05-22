import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import SignIn from './Pages/Authentication/SignIn';
import SignUp from './Pages/Authentication/SignUp';
import Privite from './Pages/Private/Private'
import RequireAuth from './Components/RequireAuth';
import Manufacturer_Tool from './Pages/Home/Manufacturer_Tool';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={
          <Header>

          </Header>
        }>

          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }></Route>
          <Route path='/singleTool/:_id' element={
            <RequireAuth>
              <Manufacturer_Tool></Manufacturer_Tool>
            </RequireAuth>
          }></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/signIn' element={<SignIn></SignIn>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/private' element={<Privite></Privite>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
