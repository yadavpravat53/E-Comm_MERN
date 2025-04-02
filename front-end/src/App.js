import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        {/* <h1>E-Dashboard</h1> */}
        <Routes>

          <Route element={<PrivateComponent/>}>

            <Route path='/' element={<h1>Product Listing Component</h1>}></Route>
            <Route path='/add' element={<h1>Add Product Component</h1>}></Route>
            <Route path='/update' element={<h1>Update Product Component</h1>}></Route>
            <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
            <Route path='/profile' element={<h1>Profile Component</h1>}></Route>

          </Route>

          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
