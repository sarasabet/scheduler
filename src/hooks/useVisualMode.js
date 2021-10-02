import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      history.pop();
    }
    //update the MOde based on current situation
    setMode(mode);
    // push the last current mode te the history , to make it trackable for future
    history.push(mode); 
  };

  const back = () => {
    if (history.length > 1) {
      setHistory(history => {
        const prevHistory = history.slice(0, history.length - 1);
        setMode(prevHistory[prevHistory.length - 1]);
        return prevHistory
      });
    }
  }


  return { mode, transition, back }
};

