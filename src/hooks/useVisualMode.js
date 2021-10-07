import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

 // A transition function  allows us to advance to any other mode
 //Ex: "EMPTY" => "CREATE" create a new appointment in a currently empty time slot. =>Edit , ..

  function transition(mode, replace = false) {

    if (replace) {
      setHistory(prev => [...prev.slice(0, -1), mode])
    } else {
      setHistory(prev => [...prev, mode])
    }
    setMode(mode)
  }
 //The back function could be used to pop back to the most recent component, such as backing out of the "CONFIRM" component by clicking "Cancel" to go back to the "SHOW" component
  function back() {
    if (history.length > 1) {

      setMode(history[history.length - 2]);
      setHistory(prev => [...prev.slice(0, -1)]);
    }
  }

  return { mode, transition, back }
};

