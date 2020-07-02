/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Action_Button = ({Tittle, onPress}) => {
  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.Text}>{Tittle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    alignItems: 'center',
  },
  Button: {
    borderRadius: 100,
    backgroundColor: '#fff',
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  }
});

export default Action_Button;
