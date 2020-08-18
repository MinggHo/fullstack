import React, { useState } from 'react';

const Statistics = ({ text, value, percentage }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value}
        {percentage && <span>%</span>}
      </td>
    </tr>
  );
};

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = good / total || 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      {total ? (
        <table>
          <tbody>
            <Statistics text="good" value={good} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="bad" value={bad} />
            <Statistics text="total" value={total} />
            <Statistics text="average" value={average} />
            <Statistics
              text="positive"
              value={positive * 100}
              percentage={true}
            />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
