import React from 'react';

const Grid = ({ config, data }) => (
  // <table>
  //   <thead>
  //   <tr>
  //   {config.map(data =>{
  //       console.log(data)
  //     })}
  //     {config.map(data =>{
  //       return <th>{data.title}</th>
  //     })}
  //     {/* <th>Col 2</th> */}
  //   </tr>
  //   </thead>
  //   <tbody>
  //   <tr>
  //   {config.map(data =>{
  //     console.log(data.field)
  //       return (
  //       <td>{data.field}</td>
  //       // <td>{data.field.map(field => {
  //       //   console.log(field)
  //       //   return <tr>{field}</tr>
  //       // })}</td>
  //       )
  //     })}
  //     {/* {config.map(data =>{
  //       return <th>{data.field}</th>
  //     })} */}
  //     {config.map(data =>{
  //       console.log(data.component)
  //       return <td>{data.component}</td>
  //     })}

  //     {/* <td>Data 1</td>
  //     <td>Data 2</td> */}
  //   </tr>
  //   {/* <tr>
  //     <td>Data 1</td>
  //     <td>Data 2</td>
  //   </tr> */}
  //   </tbody>
  // </table>
  // 


  <table>
    <thead>
      <tr>
        {config.map(data => {
          return <th>{data.title}</th>
        })}
      </tr>
    </thead>
    {/* <tbody>
      <tr>
        {data.map((item) => {
            return (
              <tr>
                <td>{item.imdbID}</td>
                <td>{item.Title}</td>
                <td>{item.imdbRating}</td>
                <td>{item.Trailer.url}</td>
              </tr>
            );
          })}
      </tr>
    </tbody> */}
    <tbody>
      <tr>
        {config.map(data => {
          console.log(data.field.map(item => item))
          return (
            // <td>{data.field}</td>
            <td>{data.field.map(field => {
              console.log(field)
              return <tr>{field}</tr>
            })}</td>
          )
        })}
      </tr>
    </tbody>
  </table>
);

export default Grid;