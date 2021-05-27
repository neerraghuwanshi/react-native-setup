import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CenteredButton from '../components/CenteredButton';
import BottomTabNavigator from './BottomTabNavigator';
import Colors from '../constants/Colors';


const Drawer = createDrawerNavigator();

export default DrawerNavigator =  () => {
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: Colors.primaryContrast,
            }}
            drawerContent={()=>(
                <CenteredButton
                    title='Logout'
                    onPress={()=>{
                        console.log('Logout')
                    }}/>
            )}>
            <Drawer.Screen 
                name="BottomTabNavigator"
                component={BottomTabNavigator} />
        </Drawer.Navigator>
    );
}