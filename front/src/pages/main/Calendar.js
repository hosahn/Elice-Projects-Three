import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  let calendar = [];
  const endWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const calendarArr = () => {
    for (let week = firstWeek; week <= endWeek; week++) {
      calendar.push(
        <Week key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');

              let isSelected =
                moment().format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'true'
                  : '';

              // 만약, 이번 달이 아닌 다른 달의 날짜라면 회색으로 표시
              let isGrayed =
                current.format('MM') !== today.format('MM') ? 'true' : '';

              return (
                <Day key={i} isSelected={isSelected} isGrayed={isGrayed}>
                  <span className="text">{current.format('D')}</span>
                  <div>input image</div>
                </Day>
              );
            })}
        </Week>
      );
    }
    return calendar;
  };

  return (
    <>
      <CalendarContainer>
        <ControlContainer>
          <button
            onClick={() => {
              setMoment(getMoment.clone().subtract(1, 'month'));
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="user" />
          </button>
          <span>{today.format('YYYY년 MM월')}</span>
          <button
            onClick={() => {
              setMoment(getMoment.clone().add(1, 'month'));
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="user" />
          </button>
        </ControlContainer>

        <CalendarHead>
          {['일', '월', '화', '수', '목', '금', '토'].map((el) => (
            <div key={el}>
              <span sunday={el === '일' ? true : false}>{el}</span>
            </div>
          ))}
        </CalendarHead>
        {calendarArr()}
      </CalendarContainer>
    </>
  );
};

const CalendarContainer = styled.div`
  width: 800px;
  max-width: 800px;

  display: flex;
  justify-content: center;
  padding: 30px;
  align-items: center;
  flex-direction: column;
`;

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 100px;
  gap: 20px;
  margin: 10px 0px;
`;

const Day = styled.div`
  color: ${(props) => (props.isGrayed === 'true' ? 'gray' : 'black')};
  background-color: ${(props) =>
    props.isSelected === 'true' ? 'pink' : '#EFF0F2'};
  padding: 15px;
  border-radius: 10px;
`;

const CalendarHead = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 80px;
  margin: 10px;
  font-family: 'EliceDigitalBaeum';
  font-size: 20px;
  div {
    padding: 3px 5px;
  }
  span {
    color: ${(props) => (props.sunday === true ? 'red' : 'black')};
  }
`;

const ControlContainer = styled.div`
  font-size: 32px;
  font-family: 'InfinitySans-RegularA1';
  margin-bottom: 15px;
  button {
    font-size: 30px;
    margin: 0px 30px;
    color: pink;
  }
`;

export default Calendar;
