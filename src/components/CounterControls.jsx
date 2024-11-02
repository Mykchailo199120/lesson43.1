import {useContext} from "react";
import { CounterContext } from '../context/CounterContext.jsx';


export default function CounterControls() {
    const { increment, decrement, reset } = useContext(CounterContext);

    return (
        <div>
            <button onClick={increment}>Збільшити</button>
            <button onClick={decrement}>Зменшити</button>
            <button onClick={reset}>Скинути</button>
        </div>
    );
}