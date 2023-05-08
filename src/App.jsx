import { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const targetDateString = new Date('2024-05-09T19:30:00').toLocaleString(
    'en-US',
    { timeZone: 'Europe/Stockholm' }
  );
  const targetDate = new Date(targetDateString);

  return (
    <>
      <div>
        <h1
          style={{ textAlign: 'center', marginTop: '8rem', fontSize: '4rem' }}
        >
          Countdown Timer
        </h1>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </>
  );
}

export default App;
