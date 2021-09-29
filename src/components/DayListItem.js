import React from "react";
import "components/DayListItem.scss";
import classnames from "classnames";


export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;
//change class-name based on receing props
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots
  });
  // provide proper msg based on available spots
  function formatSpots() {
    if (!spots) {
      return "no spots remaining";
    }

    if (spots === 1) {
      return "1 spot remaining";
    }

    return `${spots} spots remaining`;
  }

  return (
    <li onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}