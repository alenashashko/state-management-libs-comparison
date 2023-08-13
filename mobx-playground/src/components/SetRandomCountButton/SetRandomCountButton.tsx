import { observer } from 'mobx-react-lite';
import { state } from '../../store/store';

export const SetRandomCountButton = observer(() => { 
  return <button onClick={() => state.fetchRandomCount()}>load random value</button>
});
