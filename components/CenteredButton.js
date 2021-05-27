import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';


function CenteredButton(props) {

    const { onPress, title, titleStyle, buttonStyle } = props

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={onPress}>
                <View style={{...styles.container, ...buttonStyle}}>
                    <Text style={{...styles.text, ...titleStyle}}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.danger,
        borderRadius: 7,
        paddingVertical: 7,
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
        color: Colors.secondary,
        fontSize: 16,
        fontFamily: 'RobotoMono-Regular',
        fontWeight: '900',
    },
})


export default CenteredButton