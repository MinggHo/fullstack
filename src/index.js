import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);
const Content = ({ parts }) => {
  return parts.map(({ name, exercises }, i) => (
    <Part name={name} exercises={exercises} key={i}></Part>
  ));
};

const Total = ({ total }) => {
  let totalNumber = total
    .map(({ exercises }) => exercises)
    .reduce((i, j) => i + j);
  return <p>Number of exercise {totalNumber}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
