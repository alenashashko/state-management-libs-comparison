import { fetchRandomCountFx } from '../../store/store';

export const SetRandomCountButton = () => {  
  return <button onClick={() => fetchRandomCountFx()}>load random value</button>
};
