import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, FlatList } from 'react-native'
import StyledScrollView from '../StyledComponents/StyledScrollView'
import theme from '../../assets/themes'
import Gallery from './Gallery'
import SharedAblumCard from './SharedAblumCard'
import backgroundImages from '../../assets/data/backgroundImages'



function SharedAlbums({ route }) {

    const { album } = route.params

    // console.log(album)
    return (
        <StyledScrollView>
            <View>
                <View>
                    <SharedAblumCard album={album} />
                </View>
                <View style={styles.avatarDetail} >
                    <View style={styles.avatarGrid} >
                        {
                            album.avatars.map((avatar, index) => (
                                <ImageBackground source={avatar.image} key={index}
                                    style={[
                                        styles.avatar,
                                        { zIndex: index, marginLeft: index * 16, },
                                        index !== (album.avatars.length - 1) && { position: 'absolute' }
                                    ]}></ImageBackground>
                            ))
                        }
                    </View>
                    <View>
                        <Text style={styles.text} >{`${album.avatars.length} ${album.avatars.length == 1 ? 'person' : 'people' }`}</Text>
                    </View>
                </View>
                <View>
                    <Gallery images={backgroundImages} />
                </View>
            </View>
        </StyledScrollView>
    )
}

const styles = StyleSheet.create({
    avatarDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.lightGray,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.sm,
        borderRadius: theme.spacing.m,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
    },
    avatarGrid: {
        flexDirection: 'row',
        position: 'relative',
        height: theme.imageHeight.xs,
        
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
    text: {
        ...theme.textVariants.body3,
        color: theme.colors.gray,
    }
})

export default SharedAlbums
