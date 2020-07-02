import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Action_Button, Text_Button, InputText} from '../../Component';
import {Logo} from '../../assets';
import {colors, text, LogoStyle} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import { setFormLogin } from '../../redux';

const Login = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  const form = useSelector((state) => state.LoginReducer);

  const dispatch = useDispatch();

  const onInputChange = (value, input) => {
    dispatch(setFormLogin(input, value));
  };
  
  const sendData= () => {
    console.log("Data Terkirim", form)
  };

  return (

    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{backgroundColor: colors.default}}>

        <View style={{paddingTop: 20, alignItems: 'center', height: 250}}>
          <Image source={Logo} style={LogoStyle.default}/>
        </View>
        
        <View style = {{ alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
          <InputText
            TittleInput= "Email"
            value={form.Email}
            onChangeText = {value => onInputChange(value, 'Email')}
          />
          <InputText
            TittleInput = "Password"
            Security= {true}
            value={form.KataSandi}
            onChangeText = {value => onInputChange(value, 'KataSandi')}
          />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'flex-end', height: 142}}>
          <Action_Button
            Tittle = "Masuk"
            // onPress = {() =>  sendData()}
            onPress= {() => handleGoTo('Home')}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 100}}>
          <Text style={text.default}>Tidak Punya Akun?</Text>
          <Text_Button
            Tittle = "Daftar"
            onPress = {() => handleGoTo('Register')}
          />
        </View>

      </View>
    </ScrollView>
  );
};

export default Login;
