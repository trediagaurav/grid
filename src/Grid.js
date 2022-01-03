import React from 'react';

const Grid = ({ config, data }) => (
   <table>
    <thead>
      <tr>
        {config.map((data, i) => {
          return <th key={i}>{data.title}</th>
        })}
      </tr>
    </thead>
    <tbody>
      <tr>
        {config.map((data, i) => {
          return (
            <td key={i}>{data.field.map((field, i) => {
              return <tr key={i}>{field}</tr>
            })}</td>
          )
        })}
      </tr>
    </tbody>
  </table>
);

export default Grid;