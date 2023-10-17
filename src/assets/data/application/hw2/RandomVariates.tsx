import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { createLink } from '../../../../utils/functions';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const RandomVariates = () => {
  const [randomVariateCount, setRandomVariateCount] = React.useState<number>(0);
  const [classIntervalCount, setClassIntervalCount] = React.useState<number>(0);
  const [coord, setCoord] = React.useState<{ x: number[], y: number[] }>({ x: [], y: [] });

  const enterRandomVariate = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRandomVariateCount(Number(e.target.value));
  }, []);

  const enterClassInterval = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setClassIntervalCount(Number(e.target.value));
  }, []);

  const hasData = React.useMemo(() => randomVariateCount > 0 && classIntervalCount > 0, [classIntervalCount, randomVariateCount]);

  React.useEffect(() => {
    if (hasData) {
      const counts = new Array(classIntervalCount).fill(0);

      for (let i = 0; i < randomVariateCount; i++) {
        const rv = Math.random();
        const ci = Math.floor(rv * classIntervalCount);
        counts[ci]++;
      }

      setCoord({
        x: Array.from(counts.keys()),
        y: counts
      });
    }
  }, [classIntervalCount, hasData, randomVariateCount]);

  return (
    <div className='w-full'>
      <span>The code is available {createLink('here', 'https://gitlab.com/homeworks2282541/homework-2/random-variates-class-interval/js/-/tree/main')}.</span>
      <br />
      <div className='mb-4'>
        <code>Random Variate Count </code>
        <input className='border' type='number' onChange={enterRandomVariate} /><br />
        <code>Class Interval Count </code>
        <input className='border' type='number' onChange={enterClassInterval} /><br />
      </div>
      {
        hasData &&
        <div>
          <Bar
            width={700}
            data={{
              labels: coord.x,
              datasets: [
                {
                  data: coord.y,
                  backgroundColor: '#8e8e8e'
                }
              ],
            }}
          />
        </div>
      }
    </div>
  )
}

export default RandomVariates