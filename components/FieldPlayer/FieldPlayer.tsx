import React from 'react';
import {Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {FontAwesome5} from "@expo/vector-icons";



const FieldPlayer = () => {
    return (
        <View style={tw``}>
            <View key={player} style={tw`flex items-center justify-center`}>
                <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5c5cbb"} />
                <Text style={{backgroundColor: '#333333bb', color: 'white', fontWeight: 'bold', padding: 2, paddingHorizontal: 7, fontSize: 12}}>{position}</Text>
            </View>
        </View>
    );
};

export default FieldPlayer;
