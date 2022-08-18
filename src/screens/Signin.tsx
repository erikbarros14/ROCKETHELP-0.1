 import { VStack, Heading , Icon , useTheme} from 'native-base'
  import Logo from '../assets/logo_primary.svg'
import { Input } from '../components/Input'
import { Envelope , Key } from 'phosphor-react-native'
import { Button } from '../components/Button'
import { useState } from 'react'

 export function Signin () {
   const [email , setEmail] = useState ('')
   const [senha , setSenha] = useState ('')
   
   function handleSignin () {
      console.log(email ,senha)
   }
   
   const {colors} = useTheme()
    return (
        <VStack flex={1} alignItems="center"bg="gray.600" px={8} pt={24} >
           <Logo/>
             <Heading  color="gray.100"fontSize='xl' mb={6} mt={20} >
                entre na sua conta 
             </Heading>
             <Input  placeholder="E-mail"
             mb={6}
             InputLeftElement={<Icon as={ <Envelope color={colors.gray[300]}  /> }ml={4}/> }
             onChangeText= {setEmail}
            
             />
             

             <Input placeholder="Senha"
                  InputLeftElement={<Icon as={ <Key color={colors.gray[300]} /> } ml={4} /> }
                  secureTextEntry
                  mb={24}
                  onChangeText={setSenha}
             />

              <Button
                title='Enviar'
                onPress={handleSignin}
              />
              
        </VStack>
    )
 }