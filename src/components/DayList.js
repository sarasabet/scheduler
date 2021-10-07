import React from "react";
import DayListItem from "./DayListItem.js"


export default function DayList(props) {
  const { days, selectedDay, setDay } = props;
  const daysArr = [];

// map each day of day list {days}, passing a key to each day/item is critcal 
  days.map((currentDay) => {
    return daysArr.push(
      <DayListItem
        key={currentDay.id}
        name={currentDay.name }
        spots={currentDay.spots}
        selected={currentDay.name === selectedDay}
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