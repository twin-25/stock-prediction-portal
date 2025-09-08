import './assets/css/style.css';
import Header from './componets/Header';
import { Main } from './componets/Main';
import Footer from './componets/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './componets/Register';
import Login from './componets/Login';
import AuthProvider from './AuthProvider';

function App() {
  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </AuthProvider>
    
    </>
  )
}
export default App
