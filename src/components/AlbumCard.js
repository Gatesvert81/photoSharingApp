import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import theme from '../../assets/themes'
import Card from '../StyledComponents/Card'
import StyledBackground from '../StyledComponents/StyledBackground'
import StyledText from '../StyledComponents/StyledText'


function AlbumCard({ album, navigation }) {
    return (
        <ImageBackground
            source={album.background}
            style={styles.imageBackground}
        >
            <Pressable style={styles.pressible} onPress={() => navigation.navigate('Shared Album', {
                album: album
            })} >
                <View>
                    <Text style={styles.title} >{album.title}</Text>
                    <Text style={styles.text} >{`Created By ${album.user}`}</Text>
                </View>
                <View style={styles.avatarGrid} >
                    {
                        album.avatars.map((avatar, index) => (
                            <ImageBackground source={avatar.image} key={index} 
                            style={[
                                styles.avatar,
                                { zIndex: index , marginLeft:  index * 16 , },
                                index !== (album.avatars.length - 1) && { position: 'absolute' }
                            ]}></ImageBackground>
                        ))
                    }
                </View>
            </Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: 'cover',
        overflow: 'hidden',
        height: theme.imageHeight.s ,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.spacing.m,
        justifyContent: 'center',
    },
    pressible: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: theme.imageHeight.xs,
        height: theme.imageHeight.xs,
        borderRadius: theme.borderRadius.xs,
        borderRadius: 50,
        borderColor: theme.colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'hidden',
    },
    title: {
        ...theme.textVariants.h1,
        color: theme.colors.white,
    },
    text: {
        ...theme.textVariants.body3,
        color: theme.colors.white,
    },
    avatarGrid: {
        flexDirection: 'row',
        position: 'relative',
    }
})

export default AlbumCard
