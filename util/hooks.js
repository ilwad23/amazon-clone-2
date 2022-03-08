import { useState, useEffect, useRef } from "react";
export const useMediaMatcher = (breakpoint = 581) => {
  const [toggleChange, setToggleChange] = useState(false);
  const matchMediaRef = useRef(null);

  useEffect(() => {
    matchMediaRef.current = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const initialMatch = matchMediaRef.current.matches;

    if (initialMatch) {
      setToggleChange(true);
    } else {
      setToggleChange(false);
    }

    const test = (e) => {
      if (e.matches) {
        setToggleChange(true);
      } else {
        setToggleChange(false);
      }
    };
    matchMediaRef.current.addListener(test);
    return ()=> {
        matchMediaRef.current.removeListener(test);

    }
  }, [breakpoint]);
  return toggleChange;
};
