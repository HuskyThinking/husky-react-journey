import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useTime } from './useTime';

function App() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const adviceURL = 'https://api.adviceslip.com/advice';
  const {
    data,
    error,
    isLoading,
    mutate: getAdvice,
  } = useSWR(adviceURL, fetcher);
  const currentTime = useTime();

  return (
    <main>
      <h1>Advice App</h1>
      <span>{currentTime}</span>
      <p>{isLoading ? 'isLoading...' : data.slip?.advice}</p>
      <button disabled={isLoading} onClick={getAdvice}>
        Get Advice
      </button>
    </main>
  );
}

export default App;
