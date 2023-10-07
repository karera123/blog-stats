import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const Sidebar = () => {
  const params = useParams();
  const homeworkCount = useAppSelector(state => state.homework.homeworkSet.length);
  const homeworks = (new Array(homeworkCount)).fill(null);

  const isSelected = React.useCallback((hwIndex: number) => {
    return params.homework && Number(params.homework) === hwIndex;
  }, [params.homework]);

  return (
    <div style={{ marginTop: '68px' }} className='flex flex-col bg-gray-700 w-64 b-border-header fixed h-full'>
      {
        homeworks.map((_, index) => {
          const hwIndex = index + 1;
          return <Link key={'sidebar-hw-' + index} to={'/' + hwIndex}>
            <div className={'p-4 ' + (isSelected(hwIndex) ? 'bg-gray-600' : 'hover:bg-gray-600')}>
              <span className='text-white font-serif'>Homework {hwIndex}</span>
            </div>
          </Link>
        })
      }
    </div>
  )
}

export default Sidebar