import React from 'react';

const Grid = ({ config, data }) => (
   <table>
    <thead>
      <tr>
        {config.map(data => {
          return <th>{data.title}</th>
        })}
      </tr>
    </thead>
    <tbody>
      <tr>
        {config.map(data => {
          return (
            <td>{data.field.map(field => {
              return <tr>{field}</tr>
            })}</td>
          )
        })}
      </tr>
    </tbody>
  </table>
);

export default Grid;