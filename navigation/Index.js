import AddNotes from '../screens/viewlisttotal'
import ListOfItems from '../screens/list';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import viewlisttotal from '../screens/viewlisttotal';

const StackNavigator = createStackNavigator({
ListOfItems: {
    screen: ListOfItems
},
viewlisttotal:{
    screen: viewlisttotal
}
},
{
    initialRouteName: 'ListofItems',
    headerMode : 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)


