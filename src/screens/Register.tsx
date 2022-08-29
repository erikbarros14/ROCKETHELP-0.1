import React from 'react';
import { VStack } from 'native-base';
import { Hearde } from '../components/Hearde';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack bg='gray.600' flex={1} p={6} >
     <Hearde
      title='nova solicitação'
     />

     <Input
     placeholder='Numero do patrimonio'
     mt={4}
     />
     
     <Input
     placeholder='Descrição do problema '
     flex={1}
      mt={5}
      multiline
      textAlignVertical='top'
     />
      <Button
      title='Cadastrar'
      mt={5}
      />

    </VStack>
  );
}