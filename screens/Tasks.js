import React, { useEffect } from 'react'
import { View } from 'react-native'

import BodyText from '../components/BodyText'
import HeaderLeftMenu from '../components/HeaderLeftMenu'
import { containerStyles } from '../constants/styles/containerStyles'

export default Tasks = () => {
    return (
        <View style={containerStyles.fullScreenCentreContent}>
            <BodyText>Tasks</BodyText>
        </View>
    )
}


export const TasksScreenOptions = navData => {
    return {
        headerTitle: 'Tasks',
        headerLeft: () => <HeaderLeftMenu navData={navData}/>,
    }
}