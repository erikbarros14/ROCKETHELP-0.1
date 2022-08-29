import React from 'react';
import { Text, VStack } from 'native-base';
import { Hearde } from '../components/Hearde';
import { useRoute} from '@react-navigation/native'

type RouterParam = {
  orderId : string;
}

export function Deteios() {
 const Router = useRoute()
 const {orderId} = Router .params as RouterParam  
  return (
    <VStack   flex={1} bg="gray.700">
     <Hearde title='Solicitação' />
     <Text color="white" >
      {orderId}
     </Text>
    </VStack>
  );
}