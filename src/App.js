import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['Библиотека', 'Фреймворк', 'Приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['Приложение', 'Часть приложения или страницы', 'То, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Для чего в основном используются методы жизненного цикла?',
    variants: [
      'Для отслеживания истории событий',
      'Для освобождения ресурсов',
      'Никакой из вышеперечисленных',
    ],
    correct: 1,
  },
  {
    title: '… может быть выполнено, когда необходимо возвратить несколько элементов из компонента.',
    variants: [
      'Абстракция',
      'Упаковка',
      'Обертывание',
    ],
    correct: 2,
  },
  {
    title: 'Выберите правильный синтаксит функции fetch() в JSX?',
    variants: [
      '<h1>{fetch()}</h1>',
      '<h1>{fetch}</h1>',
      '<h1>${fetch}</h1>',
    ],
    correct: 0,
  },
  {
    title: 'Какой метод необходимо переопределить в React Component, чтобы компонент не обновлялся?',
    variants: [
      'willComponentUpdate',
      'shouldComponentUpdate',
      'componentDidMount',
    ],
    correct: 1,
  },
  {
    title: 'Что используется для передачи данных к компоненту извне?',
    variants: [
      'PropTypes',
      'prop',
      'setState',
    ],
    correct: 1,
  },
  {
    title: 'Какой метод вызывается в React Component после того, как компонент отображается в первый раз?',
    variants: [
      'componentMounted',
      'componentDidUpdate',
      'componentDidMount',
    ],
    correct: 2,
  },
  {
    title: 'Выберите правильный синтаксис для onClick.',
    variants: [
      '<button onClick={this.foo}>',
      '<button onClick={this.foo()}>',
      '<button onclick={this.foo}>',
    ],
    correct: 0,
  },
  {
    title: 'Что происходит при вызове setState() в методе render()?',
    variants: [
      'На экране появляется повторяющийся вывод',
      'Ошибка переполнения стека',
      'Ничего не происходит',
    ],
    correct: 1,
  },
  {
    title: 'Как создать встроенный стиль в JSX, указывая font-size:12px и color:red;',
    variants: [
      "style={{fontSize:'12px',color:'red'}}",
      "style={fontSize:'12px',color:'red'}",
      "style={{font-size:12,color:'red'}}",
    ],
    correct: 0,
  },
  {
    title: 'Как называется произвольный входной сигнал компонентов?',
    variants: [
      'Keys',
      'Props',
      'Ref',
    ],
    correct: 1,
  },
  {
    title: 'ref используется для ссылки на элемент/компонент, возвращаемый...',
    variants: [
      'refer()',
      'render()',
      'react()',
    ],
    correct: 1,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответов из {questions.length}</h2>
      <a href="/">
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)
 
    if (index == question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;
