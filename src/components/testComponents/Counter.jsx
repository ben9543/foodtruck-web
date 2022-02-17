import { increment, decrement } from "../../redux/slices/counterSlice";
const Counter = ({dispatch, count}) => {
    return (
        <div>
        <div>
        <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
        >
            Increment
        </button>
        <span>{count}</span>
        <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
        >
            Decrement
        </button>
        </div>
    </div>
    )
    }


export default Counter;