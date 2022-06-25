import { useEffect, useState } from "react";

const useLocalStorage = (key, initialvalue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialvalue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
