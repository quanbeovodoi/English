import classNames from 'classnames/bind';
import styles from './Exams.module.scss';
import { useEffect, useState } from 'react';
import Question from './Questions';
import Button from '~/components/Button';
import Loader from '~/layouts/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Exams({ data }) {
  const [questions, setQuestions] = useState(data.question);
  const [answers, setAnswers] = useState({});
  const [newData, setNewData] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setNewData(
      data.question.map((item) => {
        return { id: item.id, correctAnswer: item.correctAnswer };
      }),
    );
  }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  // console.log(newData)
  const handleAnswers = (value) => {
    setAnswers({ ...answers, ...value });
  };
  const handleResult = () => {
    // setResult(Object.keys(answers).map((key,index) => {
    //   return { [key]: answers[key]===newData[index].correctAnswer };
    // }))
    setResult(
      newData.map((data, index) => {
        const result =
          !answers[data.id] && answers[data.id] !== 0
            ? 'unset'
            : answers[data.id] === newData[index].correctAnswer;
        return { [data.id]: result };
      }),
    );
  };
  // console.log(result)

  return (
    <div className={cx('wrapper')}>
      {loading && <Loader opacity />}
      <h1 className={cx('heading')}>Question and answer</h1>
      <div className={cx('area')}>
        {questions.map((ques, index) => {
          return (
            <Question
              key={index}
              ques={ques}
              onClick={handleAnswers}
              answers={answers[ques.id]}
              result={result[index]}
            />
          );
        })}
      </div>
      <div className={cx('eventHandle')}>
        <Button primary onClick={handleResult}>
          Checked
        </Button>
        <ul className={cx('next-prev')}>
          <li>
            <div className={cx('prev')}>
              <FontAwesomeIcon icon={faCircleChevronLeft} />
            </div>
          </li>
          <li>
            <div className={cx('next')}>
              <FontAwesomeIcon icon={faCircleChevronRight} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Exams;
