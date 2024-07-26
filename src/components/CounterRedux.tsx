import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec } from '../redux/counter/counter';

const CounterRedux: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(inc())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(dec())}>-</button>
    </div>
  );
};

export default CounterRedux;
