import React from 'react';
import { Box, Circle, HStack , Text, useTheme, VStack , Pressable, IPressableProps} from 'native-base';
import { ClockAfternoon, Hourglass , CircleWavyCheck } from 'phosphor-react-native'

 export type OrderProps = {
    id : string;
    patrimony : string;
    when: string;
    status : 'open' | 'closed';
 }

  type Props = IPressableProps & {
    data : OrderProps;
  }

export function Orders( {data , ...rest} : Props ) {
  const {colors} = useTheme () ;
    
  const statusColors = data.status === "open" ? colors.secondary[700] : colors.green[300]
  return (
    <Pressable {...rest}>
<HStack
 bg="gray.600"
 mb={4}
 justifyContent="space-between"
 alignItems="center"
 rounded="sm"
 overflow="hidden"
 >
  <Box h="full" w={2} bg={statusColors}/>
    <VStack flex={1} my={5} ml={5}  >

     <Text color="white" fontSize="md"> patrimonio {data.patrimony} </Text>
     <HStack alignItems="center" >
      <ClockAfternoon size={15} color={colors.gray[300]} />
      <Text color="gray.200" fontSize="xs" ml={1} > {data.when} </Text>
     </HStack>
    </VStack>
       <Circle color="gray.500" h={12} w={12} mr={5} >
          {data.status === 'open' ? <CircleWavyCheck size={24} color={statusColors } /> : 
              <Hourglass size={24} color={statusColors} />
          }
       </Circle>
    </HStack>
    </Pressable>
  );
}