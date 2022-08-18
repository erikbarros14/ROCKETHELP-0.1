import React from 'react';
import {    Button as NativeBaseButton, IButtonProps , Heading } from 'native-base';

type Props =  IButtonProps & {
    title: string
}

export function Button( {title  , ...rest} : Props ) {
  return (
    <NativeBaseButton {...rest} 
    
    w="full"
    bg="green.700"
    fontSize="sm"
    rounded="md"
    h={14}
    _pressed={{  bg: "green.500" }}
    >
     <Heading 
     color="white"
     fontSize="md"
     >
      {title}
     </Heading>
    </NativeBaseButton>
  );
}