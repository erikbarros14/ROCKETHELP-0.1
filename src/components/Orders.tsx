import React from 'react';
import { HStack , Text} from 'native-base';

 export type OrderProps = {
    id : string;
    patrimony : string;
    when: string;
    status : 'open' | 'closed';
 }

  type Props = {
    data : OrderProps;
  }

export function Orders( {data , ...rest} : Props ) {
  return (
<HStack  color="white" fontSize="md" >
     <Text> patrimonio {data.patrimony} </Text>
    </HStack>
  );
}