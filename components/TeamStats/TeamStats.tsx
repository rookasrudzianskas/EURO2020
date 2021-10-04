import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const TeamStats = () => {
    return (
        <View style={[tw`flex flex-row bg-gray-100 w-full px-36 py-5`]}>
            <View style={tw`flex`}>
                <View style={tw``}>
                    <Text>Players</Text>
                </View>
                <View style={tw``}>
                    <Text>0/ 15</Text>
                </View>
            </View>
            <View style={tw`flex`}>
                <View style={tw``}>
                    <Text>Remaining</Text>
                </View>
                <View style={tw``}>
                    <Text>$100m</Text>
                </View>
            </View>
        </View>
    );
};

export default TeamStats;
