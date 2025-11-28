import "./App.css";
import Home from "./pages/Home/index.jsx"
import Header from "./Components/Header/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import Login from "./pages/Login/index.jsx"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from "./auth/Context.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import CreateCliente from "./pages/Clientes/create.jsx";
import Clientes from "./pages/Clientes/index.jsx";
import UpdateCliente from "./pages/Clientes/update.jsx";
import Atendimentos from "./pages/Atendimento/index.jsx";
import UpdateAtendimento from "./pages/Atendimento/update.jsx"; 
import CreateAtendimento from "./pages/atendimento/create.jsx";
import ListaAtendimentos from "./pages/Atendimento/allcontent.jsx";
import About from "./pages/About/index.jsx"

function App() {

  return (
    <AuthProvider>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/create/cliente' element={<CreateCliente/>}/>

           <Route element={<PrivateRoute />}>
           <Route path='/atendimentos/todos' element={<ListaAtendimentos />} />
            <Route path='/clientes' element={<Clientes/>}/>
            <Route path='/update/cliente' element={<UpdateCliente />} />
            <Route path='/create/atendimento' element={<CreateAtendimento />} />
            <Route path='/atendimentos' element={<Atendimentos />} />
            <Route path='/update/atendimento' element={<UpdateAtendimento />} />
          </Route>

        </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />

      <Footer />
    </AuthProvider>
  );
}

export default App;
