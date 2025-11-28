import './style.css'

// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Home(){

    return(
        <>
            <main>

                  <div>
                    <h2> Sistema de agendamento para clientes </h2>
                    <h3>Objetivo:</h3>
                    <ul>
                      <li>Aplicação web para atendimentos de clientes</li>
                      <li>Cada cliente pode criar seu próprio login para criar seus atendimentos</li>
                      <li>Clientes só podem criar atendimentos se estiverem logados</li>
                      <li>Clientes só podem acessar,alterar ou deletar seus próprios atendimentos criados</li>
                    </ul>
                    </div>
            </main>
        </>
    )
}
export default Home