import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = (props) => {
  const [answered, setAnswered] = useState(false);
  
  const handleSelectedAnswer = () => {
    console.log('selected answer');
    setAnswered(true);

  };

  return (
    <div className="question">
      <QuestionBody 
        iconType={answered ? 'symbolTick' : 'symbolQuestion'}
        text="Kdo jinému jámu kopá, sám do ní padá"
      />
      <div className="question__options">
        <Option onSelected={handleSelectedAnswer} onSelected={handleSelectedAnswer} type="smileyStrongYes" text="Souhlasím"/>
        <Option onSelected={handleSelectedAnswer} type="smileyYes" text="Spíše souhlasím"/>
        <Option onSelected={handleSelectedAnswer} type="smileyNeutral" text="Nevím"/>
        <Option onSelected={handleSelectedAnswer} type="smileyNo" text="Spíše nesouhlasím"/>
        <Option onSelected={handleSelectedAnswer} type="smileyStrongNo" text="Nesouhlasím"/>
      </div>
    </div>
  );
};

export default Question;