import './style.css'

// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function About(){

    return(
        <>
            <main>
                <div><h1> Agenda Full Stack </h1>
                  <div>
                    <h2>Projeto Fullstack - Agenda Full Stack Api</h2>
                    <h3>Objetivo:</h3>
                    <ul>
                      <li>Criar uma aplicação CRUD para atendimentos de clientes</li>
                      <li>Cada cliente pode criar seu próprio login para criar seus atendimentos</li>
                      <li>Clientes só podem criar atendimentos se estiverem logados</li>
                      <li>Clientes só podem acessar,alterar ou deletar seus próprios atendimentos criados</li>
                    </ul>
                    <h3>Bibliotecas front-end:</h3>
                    <ul>
                      <li>Axios;</li>
                      <li>JWT Decode;</li>
                      <li>React, React router dom;</li>
                      <li>React toastify.</li>
                    </ul>
                    <h3>Bibliotecas back-end:</h3>
                    <ul>
                      <li>bcrypt</li>
                      <li>cors</li>
                      <li>cross-env</li>
                      <li>express</li>
                      <li>jest</li>
                      <li>jsonwebtoken</li>
                      <li>mysql2</li>
                      <li>sequelize</li>
                    </ul>
                  </div>
                </div>
            </main>
        </>
    )
}
export default About