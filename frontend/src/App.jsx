import './assets/css/style.css';
import Header from './componets/Header';
import { Main } from './componets/Main';
import Footer from './componets/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './componets/Register';
import Login from './componets/Login';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App
