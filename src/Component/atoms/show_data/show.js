import React from 'react';
import { View, Text } from 'react-native';

const ShowData = ({item}) => {
    console.log(item)
    return(
        <View>
            <Text>Nama : {item.nama}</Text>
            <Text>Password : {item.email}</Text>
        </View>
    )
}

export default ShowData;