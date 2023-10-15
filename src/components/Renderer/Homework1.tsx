import React from 'react'
import { HomeworkModel } from '../../models/homework';

interface Homework1Props {
  parseString: (text: string) => string | JSX.Element | JSX.Element[],
  loader: JSX.Element
  homework?: HomeworkModel
}

const Homework1 = (props: Homework1Props) => {
  const { parseString, loader, homework } = props;

  const theoryLength = React.useMemo(() => {
    return homework?.theories.length ?? 0;
  }, [homework?.theories.length]);

  const appsLength = React.useMemo(() => {
    return homework?.applications.length ?? 0;
  }, [homework?.applications.length]);

  const renderAnswer = React.useCallback((answer?: string | JSX.Element) => {
    return answer
      ? <span className={'font-serif'}>
        {
          typeof answer === 'string'
            ? parseString(answer)
            : answer
        }
      </span>
      : loader
  }, [loader, parseString]);

  return (<>
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
              {renderAnswer(elem.answer)}
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
              {renderAnswer(elem.answer)}
            </div>
          </div>
        </div>
      })
    }
  </>
  )
}

export default Homework1