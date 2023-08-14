import { Button } from '@chakra-ui/react';

import { fetchRandomCountFx } from '../../store/store';

export const SetRandomCountButton = () => {  
  return <Button width="100%" onClick={() => fetchRandomCountFx()}>Load random value</Button>
};
