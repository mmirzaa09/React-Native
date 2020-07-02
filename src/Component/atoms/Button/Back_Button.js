import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Panah_Kiri } from '../../../assets';

const IconBack = ({navigation, onPress }) => {
    // const handleTo = (screen) => {
    //     navigation.navigate(screen);
    // }
    
    return(
        <View style={styles.content}>
            <TouchableOpacity onPress={onPress} >
                <Image source={Panah_Kiri} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        marginVertical: 10,
        marginHorizontal: 10,
        width: 40,
        height: 40,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon : {
        resizeMode: 'contain',
        width: 25,
        height: 25,
    }
})

export default IconBack;