import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Axios from 'axios';
import { URL_API } from '../../utils/API';
import { FlatList } from 'react-native-gesture-handler';
import { ShowData } from '../../Component/atoms';

const HomeScreen= () => {

// const [hasError, setError] = useState(false);
const [data, setData] = useState({});

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}

async function getData() {
    Axios.get(URL_API, null, {
        headers: headers,
    })
        .then(function (response) {
            // handle success
            setData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            console.log(error.response); 
        })
        if(data.source == data.source) {
            return null
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <ShowData item={item}/>
                }}
            />
        </View>
    );
};

export default HomeScreen;
