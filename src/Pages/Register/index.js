import React from 'react';
import {View, ScrollView, StyleSheet, Image, Text} from 'react-native';
import {colors, LogoStyle, text} from '../../utils';
import { Logo } from '../../assets';
import { InputText, Action_Button, IconBack } from '../../Component';
import { useSelector, useDispatch } from 'react-redux';
import { setFormRegister } from '../../redux';

const Register = ({navigation: {goBack}}) => {

 const form = useSelector((state) => state.RegisterReducer);
 const dispatch = useDispatch();
  const onInputChange = (value, input) => {
    dispatch(setFormRegister(input, value));
  };
  const sendData= () =>{
    console.log("Data yang Dikirim: ", form);
  };


  return (

    <View style={{backgroundColor: colors.default}}>
      <IconBack
        onPress = {() => goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={styles.content}>

          <View style={{alignItems: 'center', paddingVertical: 25}}>
            <Image source={Logo} style={LogoStyle.default}/>
          </View>

          <View style={{alignItems: 'center', marginTop: 20, height: 329}}>

            <InputText
              TittleInput= "email"
              value={form.Email}
              onChangeText = {value => onInputChange(value, 'Email')}
            />
            <InputText
              TittleInput="Nama Lengkap"
              value={form.NamaLengkap}
              onChangeText = {value => onInputChange(value, 'NamaLengkap')}
            />
            <InputText
              TittleInput="Kata Sandi"
              secureTextEntry={true}
              value={form.KataSandi}
              onChangeText = {value => onInputChange(value, 'KataSandi')}
            />

            <View style = {{ alignItems: 'center', justifyContent: 'center', paddingTop: 40}} >
              <Action_Button
                Tittle="Daftar"
                onPress = {() => sendData()}
              />
            </View>  

          </View>

        </View>

      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.default,
  },
})

export default Register;
