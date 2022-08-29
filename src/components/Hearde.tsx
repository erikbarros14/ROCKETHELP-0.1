import React from 'react';
import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
   type Props = StyledProps & {
    title: string;
   }
export function Hearde( {title , ...rest}: Props ) {
  const Navigation = useNavigation()
    const {colors} = useTheme(  )
     function handleGowBack() {
      Navigation.goBack()
     }
  return (
    <HStack
     w='full'
     justifyContent='space-between'
     pt={12}
     pb={6}
     alignItems='center'
     bg='gray.600'
     {...rest}
    >
     <IconButton
     icon={ <CaretLeft  color={ colors.gray[200] } size={24} /> }
     onPress={ handleGowBack}
     />
      <Heading  color='gray.100' flex={1} ml={-6} fontSize='lg' textAlign="center" >
        {title}
      </Heading>

    </HStack>
  );
}