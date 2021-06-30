import React, { useLayoutEffect, useRef } from 'react'
import { View, Text, Pressable, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import albumPage from '../../assets/data/albumPage'
import theme from '../../assets/themes'
import Card from '../StyledComponents/Card'
import StyledScrollView from '../StyledComponents/StyledScrollView'
import AlbumCard from './AlbumCard'
import Feather from '@expo/vector-icons/Feather'
import BottomSheet from 'reanimated-bottom-sheet'
import BottomSheetContent from './BottomSheetContent'



function Albums({ navigation, navigation: { setOptions } }) {

    const sheetRef = useRef()

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={openBottomSheet} >
                    <View style={styles.addBtn} >
                        <Feather name="plus" size={16} color={theme.colors.white} />
                    </View>
                </TouchableOpacity>
            )
        })

    })

    const renderBottomSheetContent = () => <BottomSheetContent handleClose={closeBottomSheet} />

    const openBottomSheet = () => {
        sheetRef.current.snapTo(0)
    }

    const closeBottomSheet = () => {
        sheetRef.current.snapTo(1)
    }

    return (
        <>
            <StyledScrollView>
                {
                    albumPage.map((album, index) => (
                        <Card key={index}>
                            <AlbumCard album={album} navigation={navigation} />
                        </Card>
                    ))
                }
            </StyledScrollView>
            <BottomSheet 
                ref={sheetRef}
                snapPoints={[250, 0, 0]}
                // snapPoints={['40%', '20%', '0%']}
                initialSnap={1}
                borderRadius={20}
                renderContent={renderBottomSheetContent}
            />
        </>
    )
}

const styles = StyleSheet.create({
    addBtn: {
        width: 32,
        height: 32,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 50,
        marginHorizontal: theme.spacing.m
    },
})

export default Albums
