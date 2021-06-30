import React from 'react'
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import theme from '../../assets/themes'

function BottomSheetContent({ handleClose }) {
    return (
        <View style={styles.container}>
            <View style={styles.line}>
            </View>
            <TouchableOpacity 
                onPress={() => alert('Create a new album')}
                style={styles.create}
            >
                <Text style={styles.createText}>Create a new gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => handleClose}
                // onPress={handleClose}
                style={styles.cancel}
            >
                <Text style={styles.cancelText} >Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray,
        padding: theme.spacing.m,
        // height: '-45%',
        height: 250,
        alignItems: 'center',
    },
    line: {
        width: 60,
        height: 5,
        backgroundColor: theme.colors.white,
        borderRadius: 5
    },
    create: {
        height: theme.imageHeight.s,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        backgroundColor: theme.colors.white,
        width: '100%',
    },
    createText: {
        ...theme.textVariants.body1,
        color: 'black',
    },
    cancel: {
        width: '100%',
        height: theme.imageHeight.xs,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // marginVertical: theme.spacing.m,
        marginBottom: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        backgroundColor: theme.colors.white,
    },
    cancelText: {
        ...theme.textVariants.body1,
        color: 'black',
    },
    
})

export default BottomSheetContent
