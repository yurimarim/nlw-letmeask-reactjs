import { useState } from "react";

export function Button() {
  // let it change
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);

  }

  return (
    // sempre que quiser colocar um código JS, deve estar entre {}
    // || (or) 'Default' -> por conta que o type text ele é opcional (text?), 
    //  então pode dar erro por que os outros elementos não foram setados
    <button onClick={increment}>
      {counter}
    </button>
  )
}

