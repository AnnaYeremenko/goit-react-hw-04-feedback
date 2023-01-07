import React, {useState} from 'react';
import {Feedback} from './Feedback/Feedback';
import {Notification} from './Notification/Notification';
import {Section} from './Section/Section';
import {Statistics} from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(prevGood => prevGood + 1);
    }

    if (option === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }

    if (option === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
    style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
              flexDirection: 'column'}}>
  
           <Section title="Please leave feedback">
             <Feedback
            options={[ 'good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
            />
          </Section>
          <Section title="Statistcs">
            {good > 0 ||
            neutral > 0 ||
            bad > 0 ? (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}/>
            ) : (
              <Notification message="There is no feedback"/>
            )}
          </Section>

      </div>
    );
};