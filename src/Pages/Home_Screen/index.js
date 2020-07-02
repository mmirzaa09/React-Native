import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Axios from 'axios';
import { URL_API } from '../../utils/API';

const HomeScreen= () => {

// const [hasError, setError] = useState(false);
// const [data, setData] = useState({});

const Axios = require('axios')

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

async function fetchData() {
    Axios.get(URL_API, null, {headers:headers})
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            console.log(error.response); 
        })
    }

useEffect(() =>{
    fetchData();
    // console.log(fetchData);
});


    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>ID : </Text>
            <Text>Title : </Text>
        </View>
    );
};

export default HomeScreen;
