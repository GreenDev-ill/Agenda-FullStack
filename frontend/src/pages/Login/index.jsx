import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { loginCliente } from '../../api/clientes';
import { AuthContext } from '../../auth/context';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

export var LoginClienteID, LoginClienteNome;

export default function Login() {
  const { login } = useContext(AuthContext)
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleBackClick = () => {
    navigate('/');
  };

  const handleLoginClick = async (e) => {
    e.preventDefault()
    try {
      const response = await loginCliente(email,senha)
      login(response.data.token)
      LoginClienteID = response.data.idLogin;
      LoginClienteNome = response.data.nomeLogin;
      navigate('/')
      toast("Login do cliente " + response.data.nomeLogin + " realizado com sucesso.")
      console.log("Token: " + response.data.token)
    } catch (error) {
      toast("Erro no login: " + error)
    }

  }
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text"  id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <p>Não possui conta? <Link to='/create/cliente'>Cadastre-se</Link></p>
        <button className="button" type="submit" onClick={handleLoginClick}>Entrar</button>
        <button className="button back-button" onClick={handleBackClick}>
          Voltar
        </button>
      </form>
    </div>
  );
}