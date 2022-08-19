
import React, { useState } from 'react';
import { FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import Logo from '../assets/logo_secondary.svg'
import { SignOut } from 'phosphor-react-native';
import {Filter} from '../components/Filter'
import {Orders , OrderProps}  from '../components/Orders'

export function Home() {
    const {colors} = useTheme()

     const [status , setStatus] = useState <"open" | "closed" > ('open')

     const [orders , setOrders] = useState<OrderProps[]>([{
      id: '1234',
      patrimony : '94836854',
      when : '10/08/2022  as 15:40',
      status: 'open',
     }])

  return (
    <VStack flex={1} bg="gray.700" >
        <HStack
         w="full"
         justifyContent="space-between"
          alignItems="center"
          bg="gray.600"
          pb={5}
          pt={12}
          px={5}

         >
           <Logo/>
          <IconButton
           icon={<SignOut size={26} color={colors.gray[300]} />}
          />

        </HStack>
        <VStack  flex={1} px={6}>
        <HStack w="full" mt={8}mb={4}  justifyContent="space-between" alignItems="center" >
          <Heading color="gray.100" >
            Meus chamados
          </Heading>
           
           <Text  color="gray.200">
            4
            </Text>
        </HStack>
        <HStack space={3} mb={8} >
        <Filter
           type="open"
           title='em andamento'
           onPress={()  =>setStatus('open')} 
            isActive={status === 'open'}
           />
           <Filter
           type="closed"
           title='finalizado'
           onPress={()  =>setStatus('closed')} 
           isActive={status === 'closed'}
           />
        </HStack>
        <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Orders data={item} /> }
        />
        </VStack>

    </VStack>
  );
}