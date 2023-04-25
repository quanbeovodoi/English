import { useState } from 'react';
import ItemQuiz from '~/components/ItemQuiz';
import classNames from 'classnames/bind';
import styles from './Question.module.scss';
const cx = classNames.bind(styles);
function Question({ ques,onClick,answers,result }) {
  let textResult;
  if(result && result[ques.id]===true){
    textResult = <span className={cx('green')}>This Question is true </span>
  }else if(result && result[ques.id]===false){
    textResult =<span className={cx('alert')}>This Question is false *</span>
  }
  else if(result && result[ques.id] === 'unset'){
    textResult = <span className={cx('alert')}>This Question not answer *</span>;
  }else{
    textResult = ''
  }
  return (
    <>
      <div className={cx('wrapper')}>
        <h4>Question {`${ques.id}: ${ques.title}`}</h4>
        <ul className={cx('menu')}>
          {ques.answers.map((item, index) => {
            const checked = index === answers;
            return (
              <li key={index} className={cx('item')}>
                <ItemQuiz
                  data={item}
                  onClick={() => {
                    onClick({[ques.id]:index});
                  }}
                  checked={checked}
                />
              </li>
            );
          })}
        </ul>
        {textResult}
      </div>
    </>
  );
}

export default Question;
