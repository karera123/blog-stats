import React from 'react'
import { createLink } from '../../../../utils/functions';
import Papa from 'papaparse';

interface TableData {
  title: string,
  data: (string | number | JSX.Element)[][]
}

const Table = () => {
  const [csv, setCsv] = React.useState<string[]>([]);
  const [tables, setTables] = React.useState<TableData[]>([]);

  const isCounted = React.useCallback((elem: string, ref: string) => elem === ref, []);

  const getPercentage = React.useCallback((ref: string, array: string[]) => {
    const totalData = array.length;
    const _ref = ref.toLowerCase();
    let count = 0;

    array.forEach(elem => isCounted(elem.toLowerCase(), _ref) && ++count);

    return count * 100 / totalData;
  }, [isCounted]);

  const getAbsoluteFrequency = React.useCallback((ref: string, array: string[]) => {
    const _ref = ref.toLowerCase();
    let count = 0;

    array.forEach(elem => isCounted(elem.toLowerCase(), _ref) && ++count);

    return count;
  }, [isCounted]);

  const getRelativeFrequency = React.useCallback((ref: string, array: string[]) => {
    const totalData = array.length;
    const _ref = ref.toLowerCase();
    let count = 0;

    array.forEach(elem => isCounted(elem.toLowerCase(), _ref) && ++count);

    return count / totalData;
  }, [isCounted]);

  // fetch data
  React.useEffect(() => {
    const filepath = process.env.PUBLIC_URL + '/assets/csv/professional-life.csv';
    Papa.parse(filepath, {
      download: true,
      complete: (result: unknown) => setCsv((result as { data: string[] }).data as string[])
    });
  }, []);

  // organize data
  React.useEffect(() => {
    /**
     * Columns selected
     *    Dream Works         [23]
     *    Ambitious (0-5)     [5]
     *    Age                 [14]
     */

    const header: string[] = [
      'Absolute Frequency',
      'Relative Frequency',
      'Percentage'
    ];

    const _csv = csv.slice(1);  // Remove the title row

    const columnIndex1 = 23;
    const columnIndex2 = 5;
    const columnIndex3 = 14;

    const titleTable1 = csv[0]?.[columnIndex1];
    const titleTable2 = csv[0]?.[columnIndex2];
    const titleTable3 = csv[0]?.[columnIndex3];

    const column1 = _csv.map(elem => elem[columnIndex1]);
    const column2 = _csv.map(elem => elem[columnIndex2]);
    const column3 = _csv.map(elem => elem[columnIndex3]);

    const set1: string[] = [];
    const set2: string[] = [];
    const set3: string[] = [];

    const table1: (string | number | JSX.Element)[][] = [[titleTable1, ...header]];
    const table2: (string | number | JSX.Element)[][] = [[titleTable2, ...header]];
    const table3: (string | number | JSX.Element)[][] = [[titleTable3, ...header]];

    const generateTableData = (elem: string, array: string[], set: string[], table: (string | number | JSX.Element)[][]) => {
      const modifiedElem = elem.toLowerCase().trim();
      if (!set.includes(modifiedElem)) {
        set.push(modifiedElem);
        table.push([
          elem || <i>n/a</i>,
          getAbsoluteFrequency(elem, array),
          getRelativeFrequency(elem, array).toFixed(2),
          getPercentage(elem, array).toFixed(2) + ' %'
        ]);
      }
    };

    column1.forEach((elem, _, array) => generateTableData(elem, array, set1, table1));
    column2.forEach((elem, _, array) => generateTableData(elem, array, set2, table2));
    column3.forEach((elem, _, array) => generateTableData(elem, array, set3, table3));

    setTables([
      {
        title: titleTable1,
        data: table1
      },
      {
        title: titleTable2,
        data: table2
      },
      {
        title: titleTable3,
        data: table3
      }
    ]);
  }, [csv, getAbsoluteFrequency, getPercentage, getRelativeFrequency]);

  return (
    <div>
      "Professional Life" survey will be used as a dataset for this homework. The file is available {createLink('here', 'https://gitlab.com/homeworks2282541/homework-2/random-variables')}.
      <br />
      {/**
       * 3 Variables (frequencies)
       */}
      <div className='mt-4'>
        <ul className='list-disc'>
          <li>
            <span className='font-semibold'>Frequencies</span>
          </li>
        </ul>
      </div>
      {
        tables.map((table, tableIndex) => {
          const tableKey = 'hw2-table' + table.title + tableIndex;

          const generateRow = (row: (string | number | JSX.Element)[]) => {
            return row.map((col, colIndex) => {
              const colKey = 'column-' + colIndex;
              return <td
                key={colKey}
                className={colIndex > 0 ? 'text-center' : ''}
              >
                {col}
              </td>
            });
          }

          return <div key={tableKey} className='py-1'>
            {/* <span>{table.title}</span> */}
            <br />
            <table className='table-fixed w-full'>
              {/* Header */}
              <thead className='border-b-2'>
                {
                  table.data[0].map((col, colIndex) => {
                    const rowKey = 'row-' + col + colIndex;
                    return <th key={rowKey} className={colIndex > 0 ? 'text-center' : ''}>
                      {col}
                    </th>
                  })
                }
              </thead>
              {/* Body */}
              <tbody>
                {
                  table.data.slice(1).map((row, rowIndex) => {
                    const rowKey = 'row-' + row[0] + rowIndex;
                    return <tr key={rowKey}>
                      {generateRow(row)}
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        })
      }
    </div>
  );
}

export default Table