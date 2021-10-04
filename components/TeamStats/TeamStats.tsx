import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const TeamStats = () => {
    return (
        <View style={[tw`flex flex-row bg-gray-100 mt-4 w-full px-48 py-5 rounded-md border-4 border-blue-400`]}>
            <View style={tw`flex`}>
                <View style={tw`-ml-36`}>
                    <Text>Players</Text>
                </View>
                <View style={tw`-ml-36`}>
                    <Text>0/ 15</Text>
                </View>
            </View>
            <View style={tw`flex`}>
                <View style={tw`-ml-20`}>
                    <Text>Remaining</Text>
                </View>
                <View style={tw`-ml-20`}>
                    <Text>$100m</Text>
                </View>
            </View>
        </View>
    );
};

export default TeamStats;
