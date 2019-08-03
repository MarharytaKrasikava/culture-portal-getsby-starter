import React from 'react';
import './listOfWorks.css';

export default function ListOfWorks(param) {
  return (
    <table className="list_of_works_section" align="center">
      <caption>Фильмография</caption>
      <tbody>
        {param.listOfWorks.map(element => (
          <tr className="film_row" key={element.id}>
            <td className="date">{element.date}</td>
            <td className="film">{element.film}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
