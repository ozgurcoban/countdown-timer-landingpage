import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <StyledCountdownTimer>
      <div>
        <p>{timeLeft.days} Days</p>
        <p>{timeLeft.hours} Hours</p>
        <p>{timeLeft.minutes} Minutes</p>
        <p>{timeLeft.seconds} Seconds</p>
      </div>
    </StyledCountdownTimer>
  );
};

const StyledCountdownTimer = styled.div`
  display: grid;
  place-items: center;
  font-size: 2rem;
  gap: 1rem;
  height: 80vh;

  div {
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export default CountdownTimer;
