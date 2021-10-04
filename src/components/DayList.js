import React from "react";
import DayListItem from "./DayListItem.js"


export default function DayList(props) {
  const { days, value, setDay } = props;
  const daysArr = [];

  days.map((currentDay) => {
    return daysArr.push(
      <DayListItem
        key={currentDay.id}
        name={currentDay.name}
        spots={currentDay.spots}
        selected={currentDay.name === value}
        setDay={ setDay}
      />
    );
  })

  return (
    <ul>
      {daysArr}
    </ul>
  )
}