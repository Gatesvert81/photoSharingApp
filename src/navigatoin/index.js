import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Albums from '../components/Albums'
import SharedAlbums from '../components/SharedAlbums'


const  Stack = createStackNavigator()
function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Album" component={Albums} />
            <Stack.Screen name="Shared Album" component={SharedAlbums} />
        </Stack.Navigator>
    )
}

export default Navigator
