import React, { useState } from 'react';
import './App.css';

function App() {

  // Prpiedades 

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "¿Qué es Ruby on Rails?",
      options: [
        { id: 0, text: "Un protocolo utilizado para crear paginas de internet sin necesidad de código", isCorrect: false },
        { id: 1, text: "Es un framework de desarrollo para aplicaciones web escrito en el lenguaje Ruby", isCorrect: true },
        { id: 2, text: "Una serie de 'best-practices' para desarrollar una aplicación web", isCorrect: false },
      ]
    },
    {
      text: "¿Cuál es la convención de nombramiento en Ruby on Rails?",
      options: [
        { id: 0, text: "Como se le haga más cómodo al programador", isCorrect: false },
        { id: 1, text: "Para los modelos se capitaliza la primera letra y se deja en singular, para los controladores es lo mismo pero en plural", isCorrect: true },
        { id: 2, text: "Todo con snake case ('este_es_un_ejemplo'", isCorrect: false },
      ]
    }, {
      text: "¿Explica el ORM en Ruby on Rails?",
      options: [
        { id: 0, text: "Orm es el rey de lo mares, hermano de Aquaman", isCorrect: false },
        { id: 1, text: "Object Relationship Model, se refiere a que las clases estan mapeadas a las filas de la tabla, lo que hace sencillo la recuperación de esa información a la hora de desplegarla", isCorrect: true },
        { id: 2, text: "Una serie de 'best-practices' para desarrollar una aplicación web", isCorrect: false },
      ]
    },
    {
      text: "¿Cuáles son las dos diferencias claves entre 'False' y ' Nil'?",
      options: [
        { id: 0, text: "False es en inglés y Nil en griego", isCorrect: false },
        { id: 1, text: "False se refiere a un booleano a que un valor es falso y Nil es la ausencia de valor", isCorrect: true },
        { id: 2, text: "Nil se refiere a que un valor es falso o verdadero y false se refiere a que no existe información", isCorrect: false },
      ]
    },
    {
      text: "¿Cuál es la diferencia entre un string y un simbol?",
      options: [
        { id: 0, text: "Un string se usa para hacer música", isCorrect: false },
        { id: 1, text: "Ambos representan texto; un string es mutable y un simbolo no se puede cambiar, asi mismo tienen diferentes señaladores de memoria", isCorrect: true },
        { id: 2, text: "Ninguna los dos son identicos", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es Active Record?",
      options: [
        { id: 0, text: "Es un framework que busca criminales", isCorrect: false },
        { id: 1, text: "Es un framework que maneja el mapeo de las bases de datos con las clases de Ruby", isCorrect: true },
        { id: 2, text: "Es una gema que manda mails desde tu aplicación de Ruby", isCorrect: false },
      ]
    },
    {
      text: "¿Qué son las migraciones en Ruby?",
      options: [
        { id: 0, text: "Es cuando tiene que mover todo el código de una aplicación de un lenguaje a otro", isCorrect: false },
        { id: 1, text: "Es una herramienta para alterar la información de la base de datos en lugar de escribir SQL", isCorrect: true },
        { id: 2, text: "Cuando el código tiene que viajar mucho", isCorrect: false },
      ]
    },
    {
      text: "¿Cómo se definen las variables de instancia, las variables globales y las variables de clase?",
      options: [
        { id: 0, text: "A ellas mismas", isCorrect: false },
        { id: 1, text: "Las variables de instancia: '@', las variables de clase: '@@' y las variables globales con: '$'", isCorrect: true },
        { id: 2, text: "Dependiendo de la aplicación que tengan en el programa pueden definirse como nodos, clientes y validadores, respectivamente", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es Scaffolding o Scaffold?",
      options: [
        { id: 0, text: "Scaffold es una gema que sirve para crear información falsa con la intención de probar el código", isCorrect: false },
        { id: 1, text: "Es una forma de generar una estructura basica para la aplicación inlcuido los files necesarios y código para realizar operaciones CRUD, una especie de blueprint", isCorrect: true },
        { id: 2, text: "Es un tipo de arquitectura de software que permite desarrollar aplicaciones escalables y rápidas", isCorrect: false },
      ]
    },
    {
      text: "¿Cuáles son los tres ambientes por default en Rails?",
      options: [
        { id: 0, text: "Modelos, Controladores, Vistas", isCorrect: false },
        { id: 1, text: "Desarrollo, Test, Producción", isCorrect: true },
        { id: 2, text: "MXN, USD, JPY", isCorrect: false },
      ]
    },
    {
      text: "¿Cuáles son los tres componentes principales en Ruby on Rails?",
      options: [
        { id: 0, text: "MXN, USD, JPY", isCorrect: false },
        { id: 1, text: "Modelos, Controladores, Vistas", isCorrect: true },
        { id: 2, text: "Create, Update, Destroy", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es el Gemfile en Ruby on Rails?",
      options: [
        { id: 0, text: "El Gemfile es un archivo donde van las claves privadas que solo son para ambiente de desarrollo", isCorrect: false },
        { id: 1, text: "Es un archivo donde se guardan las gemas que utilizaremos en nuestra aplicación", isCorrect: true },
        { id: 2, text: "Es un archivo que realmente no tiene funcionalidad, es recomendable borrarlo al principio de la producción", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es MVC y como funciona?",
      options: [
        { id: 0, text: "MVC es un superheroe de Marvel", isCorrect: false },
        { id: 1, text: "MVC se refiere a Model-View-Controller y es un patrón de diseño comunmente usados en desarrollo web", isCorrect: true },
        { id: 2, text: "Es una gema que ayuda a calcular intereses en préstamos", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es la 'Library Class' en Ruby?",
      options: [
        { id: 0, text: "Es una gema que ayuda a definir palabras y encontrar libros", isCorrect: false },
        { id: 1, text: "Consiste en una variedad de dominios, dando la habilidad de crear poderosos scripts", isCorrect: true },
        { id: 2, text: "Es un archivo donde hay muchos titulos de libros de programación para consultar", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es un código 'DRY?'",
      options: [
        { id: 0, text: "Es una forma de decir que este seco, que no le vayas a echar agua a la computadora", isCorrect: false },
        { id: 1, text: "DRY se refiere a Don't Repet Yourself, que no repitas código innecesariamente", isCorrect: true },
        { id: 2, text: "Es un archivo donde hay muchos titulos de libros de programación para consultar", isCorrect: false },
      ]
    },
    {
      text: "Danos algunos beneficios de Ruby on Rails",
      options: [
        { id: 0, text: "Rápido desarrollo, Productividad para desarrolladores", isCorrect: false },
        { id: 1, text: "Diseño modular, Comunidad Activa, medidas de seguridad", isCorrect: true },
        { id: 2, text: "Escalabilidad, Costo-beneficio", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es el 'Nested Layout' en Ruby on Rails?",
      options: [
        { id: 0, text: "Es una gema que importa fotos de nidos de pájaros", isCorrect: false },
        { id: 1, text: "Se usa para crear una jerarquía de layouts, donde uno encapsula al otro. Útil cuando existen elementos en común a través de varias páginas", isCorrect: true },
        { id: 2, text: "Es una gema de los productos Nestlé", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es Load() y Require()?",
      options: [
        { id: 0, text: "Son dos funciones ya prehechas para cargar y requerir cosas ", isCorrect: false },
        { id: 1, text: "Con load ejecutamos código; con require importamos librerias", isCorrect: true },
        { id: 2, text: "Son hechizos de Harry Potter", isCorrect: false },
      ]
    },
    {
      text: "¿Comó comentas en Ruby?",
      options: [
        { id: 0, text: "Con mucho cuidado", isCorrect: false },
        { id: 1, text: "Con el simbolo '#'", isCorrect: true },
        { id: 2, text: "Escribiendo primero comment()", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es Render y Redirect_to?",
      options: [
        { id: 0, text: "Render es lo que presentan los arquitectos antes de construir y redirect es una página para ver deportes", isCorrect: false },
        { id: 1, text: "Render es usado para importar un diseño prefabricado de algún otro archivo y redirect_to se usa para realizar una solicitud http a un URL diferente", isCorrect: true },
        { id: 2, text: "Render es reno en inglés y redirect es lo que dice el GPS cuando te pasas la calle", isCorrect: false },
      ]
    },
    {
      text: "¿A qué se refiere con asociación polimórfica?'",
      options: [
        { id: 0, text: "Es una banda de metal pesado de los 70s popular en Suecia", isCorrect: false },
        { id: 1, text: "Es un tipo de asociación deonde un modelo puedo pertenecer a otro o más modelos", isCorrect: true },
        { id: 2, text: "Es la relación que tiene Ruby con Rails", isCorrect: false },
      ]
    },
    {
      text: "¿Qué son los 'Accessor Methods'?",
      options: [
        { id: 0, text: "Es otro grupo de metal pesado de los 80s", isCorrect: false },
        { id: 1, text: "En Ruby se refiere a metodos que permiten leer y escribir variables de instancia en un objeto, es una forma de interactuar con el estado interno de un objeto. Estos son: attr_reader, attr_writer, attr_accessor ", isCorrect: true },
        { id: 2, text: "Son las personas que llegaron antes de nosotros", isCorrect: false },
      ]
    },
    {
      text: "¿Cuáles son los diferentes tipos de asociaciones que existen en Rails?",
      options: [
        { id: 0, text: "La asociación en favor de los pandas, la asociación internacional de superheroes.", isCorrect: false },
        { id: 1, text: "Existen varias asociaciones entre modelos: belongs_to, has_one, has_many, has_one :through, has_and_belongs_to_many", isCorrect: true },
        { id: 2, text: "La asociación de rotarios de León, la asociación a favor de los de la tercera edad", isCorrect: false },
      ]
    },
    {
      text: "¿Qué significa Concerns en Rails?",
      options: [
        { id: 0, text: "Es algo de lo que tenemos que preocuparnos, un bug básicamente", isCorrect: false },
        { id: 1, text: "Es una forma de compartir código a través de diferentes partes de tu aplicación en modúlos separados", isCorrect: true },
        { id: 2, text: "Son como strikes, al tercero Ruby cierra la aplicación y la banea de internet", isCorrect: false },
      ]
    },
    {
      text: "¿Ruby soporta 'Multiple Inheritance' and 'Single Inheritance'?",
      options: [
        { id: 0, text: "A veces, cuando se siente con ganas", isCorrect: false },
        { id: 1, text: "Ruby soporta single inheritance, donde una clase solo puede heredad de una superclase; no soporta multiple inheritance como C++ pero utiliza 'mixins' que permite a las clases heredar comportamientos de varias fuentes indirectamente", isCorrect: true },
        { id: 2, text: "No, ninguna de las dos. No sirve de mucho Ruby", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es un hash en Ruby?",
      options: [
        { id: 0, text: "Es un algoritmo que se usa en blockchain", isCorrect: false },
        { id: 1, text: "En Ruby un hash es un tipo de estructura de información que guarda key-values en pares", isCorrect: true },
        { id: 2, text: "Una gema que parte a la mitad todo el código para que sea menos pesado al subir a internet", isCorrect: false },
      ]
    },
    {
      text: "¿Cuál es la diferencia entre .map y .each?",
      options: [
        { id: 0, text: ".map es un mapa del mundo y .each es la abreviación de un planeta", isCorrect: false },
        { id: 1, text: ".map itera y luego crea un nuevo array pero puede que modifique el array original; .each solo itera sin alterar el array original", isCorrect: true },
        { id: 2, text: "Se escriben diferente", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es 'Yield' en Ruby on Rails?",
      options: [
        { id: 0, text: "Es el porcentaje de rendimiento que genera una acción", isCorrect: false },
        { id: 1, text: "Es una palabra especial que permite a metodos aceptar bloques de código como un argumento y luego ejecutar ese bloque", isCorrect: true },
        { id: 2, text: "Es el apellido de la persona que invento Ruby on Rails", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es 'Action Mailer' en Ruby on Rails?",
      options: [
        { id: 0, text: "Es un sistema videojuego de acción que fue creado con Ruby on Rails", isCorrect: false },
        { id: 1, text: "Es una gema que ayuda a administrar el procesamiento de correos electronicos desde la app de Ruby", isCorrect: true },
        { id: 2, text: "Es el apellido de la persona que invento Ruby on Rails", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es SOLID en la programación orientada a objetos",
      options: [
        { id: 0, text: "Es un framework de ciberseguirdad", isCorrect: false },
        { id: 1, text: "SOLID es un framwork que ayuda a construir aplicaciones con código modular, reutilizable y de fácil manetenimiento", isCorrect: true },
        { id: 2, text: "Es el apellido de la persona que invento Ruby on Rails", isCorrect: false },
      ]
    },
    {
      text: "¿De qué clase heredan todas las démas clases en Ruby?",
      options: [
        { id: 0, text: "Clase alta", isCorrect: false },
        { id: 1, text: "Al final todas las clases heredan de la clase Objeto", isCorrect: true },
        { id: 2, text: "Todas las clases heredan de todas las clases, son intercambiables", isCorrect: false },
      ]
    },
    {
      text: "¿Qué es el ataque CSRF y como Ruby previene estos ataques?",
      options: [
        { id: 0, text: "Es un ataque aéreo y Ruby tiene techos en sus oficinas", isCorrect: false },
        { id: 1, text: "Es un ataque donde una página maliciosa intentar acceder a otras páginas abiertas mandando solicitudes http detrás de bambalinas. Ruby protege contra esto con un par de acciones como tokens para cada solicitud http y solicitudes non-get", isCorrect: true },
        { id: 2, text: "Es todo un tema que no voy a contestar ahorita", isCorrect: false },
      ]
    },
  ]

  // Funciones

  const optionClicked = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }
  return (
    <div className="App">
      <h1>Ruby Quiz</h1>

      <h2>Puntaje actual: {score} </h2>

      {showFinalResults ? (

    <div className='final-results'>
        <h1>Resultados Finales</h1>
        <h3>Has obtenido: {score} de {questions.length}</h3>
        <h3>({(score/questions.length) * 100}%)</h3>
        <button onClick={() => restartGame()}>Reiniciar Examen</button>
      </div>
      ) : (
      <div className='question-card'>
        <h2>Pregunta {currentQuestion + 1 } de {questions.length}</h2>
        <h3 className='pregunta'>{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
          })}
        </ul>
      </div>
      )}
    </div>
  );
}

export default App;
