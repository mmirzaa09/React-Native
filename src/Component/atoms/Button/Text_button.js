import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Text_Button = ({Tittle, onPress}) =>{
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{Tittle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginLeft: 5
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'yellow'
    }
})

export default Text_Button;