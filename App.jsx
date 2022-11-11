import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './Data';

const App = () => {
  return (
    <div>
      <h1>Questions and Answers</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;