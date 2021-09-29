import React from "react";
import DayListItem from "./DayListItem.js"


export default function DayList(props) {
  // map each and every day-obj ! important: pass the key and import DAyListItem to br able calling it
  const parsedDays = props.days.map(day => <DayListItem 
    key={day.id} 
    name={day.name} 
    spots={day.spots} 
    selected={day.name === props.day} 
    setDay={props.setDay} 
    />);
 
    return (
    <ul className="DayList">
      {parsedDays}
    </ul>
  );
}