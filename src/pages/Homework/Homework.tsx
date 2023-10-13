import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HomeworkModel } from "../../models/homework";
import parse from 'html-react-parser';
import { useAppSelector } from '../../app/hooks';
import { BeatLoader } from 'react-spinners';

const Homework = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [homework, setHomework] = React.useState<HomeworkModel | null>(null);

  const loader = React.useMemo(() => {
    return <BeatLoader
      className='text-gray-700 mt-2'
      size={10}
      speedMultiplier={0.5}
    />
  }, []);

  const selectedHomework = React.useMemo(() => {
    return Number(params.homework) ?? 1;
  }, [params.homework]);

  const theoryLength = React.useMemo(() => {
    return homework?.theories.length ?? 0;
  }, [homework?.theories.length]);

  const appsLength = React.useMemo(() => {
    return homework?.applications.length ?? 0;
  }, [homework?.applications.length]);

  const homeworkSet = useAppSelector(state => state.homework.homeworkSet);

  React.useEffect(() => {
    if (selectedHomework > 0 && selectedHomework <= homeworkSet.length)
      setHomework(homeworkSet[selectedHomework - 1]);
    else
      navigate('/error');
  }, [homeworkSet, navigate, selectedHomework]);

  const parseString = React.useCallback((text: string) => {
    const reworkText = text.replace(/<kw>/g, "<span className='italic font-semibold'>").replace(/<\/kw>/g, '</span>')
    return parse(reworkText);
  }, []);

  return (
    <div>
      {/* Title */}
      <div className='mb-5'>
        <span className='text-3xl font-medium font-serif'>{homework?.title}</span>
      </div>

      <hr />

      {/* Theory */}
      <div className='font-serif font-semibold mt-10 text-xl'>
        Theory
      </div>
      {
        homework?.theories.map((elem, index) => {
          return <div
            key={'hw-content-theory-' + index}
            className={'p-4 ' + (index < theoryLength - 1 && 'border-b-2')}
          >
            <div id='question' className='mb-3'>
              <span className='font-bold font-serif text-lg mr-3'>Q:</span>
              <span className='font-semibold italic font-serif'>{elem.question}</span>
            </div>
            <div id='answer' className='text-justify flex flex-row'>
              <span className='font-bold font-serif text-lg mr-3'>A:</span>
              <div>
                {
                  elem.answer
                    ? <span className={'font-serif ' + (!elem.answer && 'italic')}>
                      {
                        elem.answer
                          ? typeof elem.answer === 'string'
                            ? parseString(elem.answer ? elem.answer : 'No answer yet')
                            : elem.answer
                          : loader
                      }
                    </span>
                    : loader
                }
              </div>
            </div>
            {
              elem.refs &&
              <div className='flex flex-col'>
                <span className='text-sm font-mono mt-6'>References:</span>
                <div className='pl-5'>
                  {
                    elem.refs.map((ref, index, array) => {
                      return (<span key={'ref-theory' + index}>
                        <a href={ref.href} rel="noreferrer" target='_blank' className='text-xs italic text-gray-400 font-mono'>
                          {ref.name}
                        </a>{index < array.length - 1 && ' | '}
                      </span>)
                    })
                  }
                </div>
              </div>
            }
          </div>
        })
      }

      <hr />

      {/* Application */}
      <div className='font-serif font-semibold mt-16 text-xl'>
        Application
      </div>
      {
        homework?.applications.map((elem, index) => {
          return <div
            key={'hw-content-app-' + index}
            className={'p-4 ' + (index < appsLength - 1 && 'border-b-2')}
          >
            <div id='question' className='mb-3'>
              <span className='font-bold font-serif text-lg mr-3'>Q:</span>
              <span className='font-semibold italic font-serif'>{elem.question}</span>
            </div>
            <div id={'answer-app-' + index} className='text-justify flex flex-row'>
              <span className='font-bold font-serif text-lg mr-3'>A:</span>
              <div>
                {
                  elem.answer
                    ? typeof elem.answer === 'string'
                      ? parseString(elem.answer ? elem.answer : 'No answer yet')
                      : elem.answer
                    : loader
                }
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Homework;