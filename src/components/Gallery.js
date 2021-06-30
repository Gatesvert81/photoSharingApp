import { Nunito_200ExtraLight } from '@expo-google-fonts/nunito'
import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import theme from '../../assets/themes'

function Gallery({images}) {

    

    const renderItem = ({ item }) => (
            <Image 
                source={item.background}
                style={styles.image}
            />
    ) 

    return (
        <ScrollView 
            contentContainerStyle={styles.gallery}
        >
            <Text style={styles.galleryText} >Gallery</Text>
            <FlatList 
                data={images}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                numColumns={3}
                key={item => item.id}
            />
        </ScrollView>
    )
}

const windowWidth = ( Dimensions.get('window').width ) - ((2 * theme.spacing.m) + 6)

const styles = StyleSheet.create({
    gallery: {
        marginHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        marginVertical: theme.spacing.m,
        overflow: 'hidden',
        alignItems: 'center',
    },
    galleryText: {
        ...theme.textVariants.body3,
        color: theme.colors.gray,
    },
    imageCard: {
        
        // overflow: 'hidden',
        // resizeMode: 'contain',
    },
    image: {
        width: windowWidth / 3 ,
        height: windowWidth / 3,
        margin: 2,
    }
})

export default Gallery
