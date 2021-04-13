import React, { useState } from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
// Toda vez que for trabalhar com HTML dentro do Javascrip precisa importar o "React"
// Componente -> É o Bloco isolodao de HTML, CSS e JS, o qual não interfere no restante da aplicação / O Compoente é uma função que retorna algo ex: 'Css'.
// Estado : Informações mantidas pelo componente (Lembrar: imutabilidade)
// Propriedade : Informações que um componente PAI passa para o componente FILHO,(PAI = "function App()", FILHO "os abaixo").
// Anotações: O react pede para ter um componente para cada arquivo.

// Assim estamos passando uma propriedade pro nosso componente.
// Isso precisa ser colocado em uma div, por ter que colocar um componente abaixo do outro e precisar de um container em volta deles.
// Como <div> iria quebrar minha estilização, podemos usar no React um fragment que é um tag sem fragmentação ex: <> </>.
// Toda funcção que é propria dele mesmo deve ser criada dentro dele, função dentro de outra ex abaixo, "function App()" e "function increment".
// Uso as chaves "{incrementCounter}" sendo esse a função, pois é uma função dentro do HTML precisa da chave.
// Importando o "{useState}" sendo ele uma função utiizada pelo react para criar um estado, o estado é uma informação mantida pelo componente, uma informação que vai ser lida e atualizada pelo proprio componente.
// useState(0) é o valor inicial, porém a função useState retorna um vetor com dois valores.
// Desestruturação é pegar um vetor e dividir ele em variáveis, como no ex: [counter, setcounter], que está desestruturando o que o useState os retorna, que é o proprio "counter" e uma função "setCounter", para atualizar o valor de counter.
// Quando eu chamo na função o "setCounter" sempre ele vai criar um novo "counter".
// Estou setando o valor para variável "counter" como sendo "counter + 1".

/*function App() {
  const [counter, setCounter] = useState(0);

   function incrementCounter() {
    setCounter(counter + 1);

   }
  return (
    <>
    <h1>contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
   
    </>
  );
}*/
/*--------------------------------
htmlFor -> Porque "For" é uma palavra reservada do javascript
"input-group" -> É para agrupar o "latitude" e "longitude" na tela.
*/
function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block" /* Esse "Class" é para melhor identificação e estilização*/>
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
          <div class="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required/>
          </div>

          
          <div class="input-block">
          <label htmlFor="longitude">longitude</label>
          <input name="longitude" id="longitude" required/>
          </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
        </aside>

        <main>
          <ul>
            <li ClassName="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/55417758?s=400&v=4" alt="Willan Nilsson"/>
                <div ClassName="user-info">
                  <strong>Willan Gois</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              </header>
              <p>Apaixonado por Tecnologia.</p>
              <a href="https://github.com/Willansonigo">Acessar perfil no Github</a>

            </li>
            <li ClassName="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/55417758?s=400&v=4" alt="Willan Nilsson"/>
                <div ClassName="user-info">
                  <strong>Willan Gois</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              </header>
              <p>Apaixonado por Tecnologia.</p>
              <a href="https://github.com/Willansonigo">Acessar perfil no Github</a>

            </li>
            <li ClassName="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/55417758?s=400&v=4" alt="Willan Nilsson"/>
                <div ClassName="user-info">
                  <strong>Willan Gois</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              </header>
              <p>Apaixonado por Tecnologia.</p>
              <a href="https://github.com/Willansonigo">Acessar perfil no Github</a>

            </li>
            <li ClassName="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/55417758?s=400&v=4" alt="Willan Nilsson"/>
                <div ClassName="user-info">
                  <strong>Willan Gois</strong>
                  <span>ReactJS, React Native, Node.js</span>

                </div>
              </header>
              <p>Apaixonado por Tecnologia.</p>
              <a href="https://github.com/Willansonigo">Acessar perfil no Github</a>

            </li>
            
          </ul>

        </main>

    </div>
  )
}
export default App;
