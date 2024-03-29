import React from 'react';
import {Text, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {FontAwesome5} from "@expo/vector-icons";

type FieldPlayerProps = {
    player: null,
    position: string,
}

const FieldPlayer = ({position, player}: FieldPlayerProps) => {
    return (
        <View style={tw``}>
            <View key={player} style={tw`flex items-center justify-center`}>
                <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5c5cbb"} />
    {/*// @ts-ignore*/}
                <Text style={{backgroundColor: '#333333bb', color: 'white', fontWeight: 'bold', padding: 2, paddingHorizontal: 7, fontSize: 12}}>{player ? player.name : position}</Text>
            </View>
        </View>
    );
};

export default FieldPlayer;
