import React from 'react'
import HeaderButton from './HeaderButton'

export default HeaderLeftMenu = ({navData}) => {
    return (
        <HeaderButton
            name='menu'
            type='simple-line'
            onPress={()=>navData.navigation.toggleDrawer()}/>
    )
}