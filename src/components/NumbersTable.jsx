import React from "react";

function NumbersTable({ limit }) {
    function generateNumbers(limit) {
        const numbers = [];
        for (let i = 1; i <= limit; i++) {
          numbers.push(i);
        }
        return numbers;
      }

  const numbersList = generateNumbers(limit);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {numbersList.map((number) => (
            <tr key={number}>
              <td style={{ color: number % 2 === 0 ? "red" : "black" }}>
                {number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NumbersTable;