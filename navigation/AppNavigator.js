import React, { useState } from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Colors from '../constants/Colors'
import DrawerNavigator from './DrawerNavigator'
import InitialLoader from '../screens/InitialLoader'


export default function AppNavigator() {

    const [condition, setCondition] = useState(true)

    return (
        <NavigationContainer>
            <StatusBar {...styles.statusBar}/>
            <View style={styles.container}>
                {!condition ?
                <InitialLoader /> :
                <DrawerNavigator />}
            </View>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: Colors.primary,
    },
    container: {
        flex:1,
        backgroundColor: Colors.primary,
    },
})