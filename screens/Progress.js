import React, { useEffect } from 'react'
import { View } from 'react-native'

import BodyText from '../components/BodyText'
import HeaderLeftMenu from '../components/HeaderLeftMenu'
import { containerStyles } from '../constants/styles/containerStyles'


export default Progress = () => {
    return (
        <View style={containerStyles.fullScreenCentreContent}>
            <BodyText>Progress</BodyText>
        </View>
    )
}


export const ProgressScreenOptions = navData => {
    return {
        headerTitle: 'Progress',
        headerLeft: () => <HeaderLeftMenu navData={navData}/>,
    }
}