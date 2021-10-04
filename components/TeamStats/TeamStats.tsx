import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const TeamStats = () => {
    return (
        <View>
            <View style={tw``}>
                <View style={tw``}>
                    <Text>Players</Text>
                </View>
                <View style={tw``}>
                    <Text>0/ 15</Text>
                </View>
            </View>
            <View style={tw``}>
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
