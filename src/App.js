import fotoPerfil from './foto4x4.PNG'
import './App.css'

function App() {
  return (
   <div>
    <header>
     <h1>Olá, seja bem-vindo ao meu Currilo Virtual!!!</h1>
     <img src={fotoPerfil}></img>
     <h2>Gabriel Santos</h2>
    </header>

    <main>
      <section>
        <h1>Dados para contato</h1>
        <h2>Gabriel Santos</h2>
        <p>44 98459-1886</p>
        <p>E-mail: correia.santos.gabriel@escola.pr.gov.br</p>
        <p>Linkdin: xxxxxxx</p>
        <p>GitHub: xxxx</p>
      </section>
    

    <section>
      <h1>Formação</h1>
      <div>
        <article>
          <h2>Ensino médio Profionalizante em Desenvolvimento de Sistema</h2>
          <p>Instituição: Colégifoto4x4o Santa Maria Goretti </p>
          <p>Ano de conclusão: 2027</p>
        </article>

        <article>
          <h2> Pré Aprendiz</h2>
          <p>Instituição: Lar Escola da Criança </p>
          <p>Ano de conclusão: 2027</p>
        </article>

        <article>
          <h2> Curso de Informática Basica</h2>
          <p>Instituição: Lar Escola sa Criança - Senai (parceria) </p>
          <p>Cocluido - Carga Horária 40h</p>
        </article>
      <div>
    </section>

    <section>
      <h1>Experiencia Profissional</h1>
      <div>
    <section>
      <h2>Empresa: Loja da Casa Acabamentos</h2>
      <p>Função/Cargo: Auxiliar Administrativo</p>
      <p>Priodo:Desde 09/09/2025 </p>
    </section>

    <section>
      <h2>Trabalho Voluntario</h2>
      Local: Igreja Santa Rita de Cássia
      Atividades:Ajudar na organização de cadeiras, limpeza do local e distribuição de alimentos.
    </section>

</main>
    <footer>
      <div>Desenvolvido por Gabriel Santos</div>
    </footer>
   </div>
  );
}

export default App;
