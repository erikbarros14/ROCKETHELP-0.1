
import React, { useState } from 'react';
import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import Logo from '../assets/logo_secondary.svg'
import { SignOut } from 'phosphor-react-native';
import {Filter} from '../components/Filter'
import {Orders , OrderProps}  from '../components/Orders'
import { Button } from '../components/Button';
import { ChatTeardropText } from 'phosphor-react-native'
import {useNavigation} from '@react-navigation/native'


export function Home() {
    const {colors} = useTheme()

     const [status , setStatus] = useState <"open" | "closed" > ('open')

     const [orders , setOrders] = useState<OrderProps[]>([
      {
        id: 'erik barros ',
        patrimony : '12345678',
        when : '239/08/2022 as 18:00',
        status : 'open'
      }
      ])
    
      const Navigation = useNavigation()

     function handleNewOrder(){
       Navigation.navigate('new')
     }

     function handleDeteios(orderId: string) {
       Navigation.navigate('deteios', {orderId})
     }

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
        renderItem={({item}) => <Orders data={item} onPress={ () => handleDeteios(item.id) } /> }
        showsVerticalScrollIndicator= {false}
        contentContainerStyle= {{paddingBottom: 100}}
        ListEmptyComponent= {() => (
          <Center>
            <ChatTeardropText color={colors.gray[300]} size= {40} />

            <Text color='gray.300' mt={6} fontSize="xl" textAlign='center' >
              você ainda não possui {'\n'}
            solicitções  { status === "open" ? "em andamento" : "finalizados"}
            </Text>
          </Center>
        ) }
        />
         <Button title='nova solicitção' onPress={handleNewOrder} />
        </VStack>

    </VStack>
  );
}