import {createNativeStackNavigator} from '@react-navigation/native-stack'

import  {Home} from '../screens/Home'
import  {Deteios} from '../screens/Deteios'
import  {Register} from '../screens/Register'

const { Navigator , Screen } = createNativeStackNavigator()



export function AppRoutes() {
    return (

        <Navigator screenOptions={{headerShown : false}} >
            <Screen  name='home' component={Home} />
            <Screen  name='deteios' component={Deteios} />
            <Screen  name='new' component={Register} />
        </Navigator>
    )
}