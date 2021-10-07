
import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";
//parent is InterviewList


export default function InterviewerListItem(props) {
  // props without data restructuring => avatar = props.avatar, name = name.props, ...
  const { name, avatar, selected, setInterviewer } = props;
// use classNam elibrary to build class name and then pass it to components
  const interviewerListItemClass = classNames(
    "interviewers__item",
    { "interviewers__item--selected": selected }
  );

  return (
    <li className={interviewerListItemClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
};

