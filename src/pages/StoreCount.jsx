import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/reducer/counterSlice';

export default function() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </>
    )
}