import { Link } from 'react-router-dom'
import './style.css'
import { AuthContext } from '../../auth/Context'
import { useContext } from 'react'

export default function Header() {
    //pegar o token
    const { token } = useContext(AuthContext)

    return (
        <header>
            <h1>Agenda Full Stack Api</h1>
            <nav>
                <Link to='/'>
                    <button>
                        Início
                    </button>
                </Link>
                {
                    !token
                        ? null
                        : <Link to='/clientes'>
                            <button>
                                Clientes
                            </button>
                        </Link>
                }
                {
                    !token
                        ? null
                        : <Link to='/atendimentos'>
                            <button>
                                Atendimentos
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