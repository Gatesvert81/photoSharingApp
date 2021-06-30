import React from 'react'
import { ImageBackground, View, StyleSheet, Text } from 'react-native'
import theme from '../../assets/themes'

function SharedAblumCard({album}) {
    return (
        <ImageBackground
            source={album.background}
            style={styles.imageBackground}
        >
            <View>
                <Text style={styles.title} >{album.title}</Text>
                <Text  style={styles.text} >{`Created By ${album.user}`}</Text>
            </View>
            <View>
                <Text style={styles.text} >108 photos</Text>
            </View>
            {/* <Text>Hi</Text> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: 'cover',
        overflow: 'hidden',
        height: theme.imageHeight.l ,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingBottom: theme.spacing.m,
        borderRadius: theme.spacing.m,
        // justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    title: {
        ...theme.textVariants.h1,
        color: theme.colors.white,
    },
    text: {
        ...theme.textVariants.body3,
        color: theme.colors.white,
    }
})

export default SharedAblumCard
