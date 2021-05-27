import React from 'react'
import { Text, StyleSheet } from 'react-native' 
import Colors from '../constants/Colors'

import { windowWidth } from '../constants/screenSize' 


const BodyText = (props) => {
    return (
        <Text 
            style={{
                ...styles.style,
                ...props.style,
            }}>
            {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({
    style:{
        color: Colors.secondary,
        fontFamily: 'Roboto-Regular',
        fontSize: windowWidth/10,
        fontWeight: '800',
    }
})


export default BodyText