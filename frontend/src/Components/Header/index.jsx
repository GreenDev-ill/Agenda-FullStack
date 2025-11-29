import { Link } from 'react-router-dom'
import './style.css'
import { AuthContext } from '../../auth/context'
import { useContext } from 'react'
import { LoginClienteNome } from '../../pages/Login'

export default function Header() {
    //pegar o token
    const { token } = useContext(AuthContext)
    return (
        <header>
            <h1>Agenda Full Stack Api</h1>
            {!token ? null : <p>Bem vindo, {LoginClienteNome}!</p>}
            <nav>
                <Link to='/'>
                    <button>
                        Início
                    </button>
                </Link>
                <Link to='/about'>
                    <button>
                        Sobre o Projeto
                    </button>
                </Link>
                {/* {
                    !token
                        ? null
                        : <Link to='/clientes'>
                            <button>
                                Clientes
                            </button>
                        </Link>
                } */}
                {
                    !token
                        ? null
                        : <Link to='/atendimentos'>
                            <button>
                                Atendimentos
                            </button>
                        </Link>
                }
                {
                    !token
                        ? null
                        : <Link to='/atendimentos/todos'>
                            <button>
                                Lista de Todos Atendimentos
                            </button>
                        </Link>
                }
                <Link to='/login'>
                    <button>
                        Login
                    </button>
                </Link>
            </nav>
        </header>
    )
}