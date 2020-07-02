import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
// import icon from 
import { Input } from 'react-native-elements';

const InputText = ({TittleInput, Security, ...rest}) => {
    return(
        <View style={styles.component}>
            <TextInput
                style={styles.styleInput}
                editable
                placeholder={TittleInput}
                secureTextEntry={Security}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    component: {
        width: '90%',
        borderColor: '#fff',
    },
    styleInput: {
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default InputText;