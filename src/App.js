import React from 'react';
import { useState } from 'react';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const App = () => {
  const [index, setIndex] = useState(0);
  let reviews = data;

  const { name, title, img, review } = reviews[index];

  const checkNumber = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    } else if (num < 0) {
      return reviews.length - 1;
    } else {
      return num;
    }
  };

  return (
    <main>
      <div className="container">
        <picture>
          <FaQuoteRight className="quote" />
          <img src={img} alt={name} />
        </picture>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{review}</p>
        <div className="arrow-container">
          <AiOutlineLeft
            className="arrow"
            onClick={() => setIndex(checkNumber(index - 1))}
          />
          <AiOutlineRight
            className="arrow"
            onClick={() => setIndex(checkNumber(index + 1))}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
