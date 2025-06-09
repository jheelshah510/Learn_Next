'use client'
import { useCounter } from "../store";

export default function Home() {

const count = useCounter((state) => state.count);
const increment = useCounter((state) => state.increment);
const decrement = useCounter((state) => state.decrement);
  return (
    <div className="flex justify-center">
         <button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button>
    </div>
  );
}
