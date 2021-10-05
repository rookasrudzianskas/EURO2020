import React from 'react';
import {View, Text} from "react-native";
import tw from "tailwind-react-native-classnames";
import {useRecoilValue} from "recoil";
import {numberOfPlayers, valueOfPlayers} from "../../atoms/MyTeam";

const TeamStats = () => {

    const nofPlayers = useRecoilValue(numberOfPlayers);
    const value = useRecoilValue(valueOfPlayers);

    return (
        <View style={[tw`flex flex-row bg-gray-100 mt-4 w-full px-48 py-5 rounded-md border-4 border-blue-400 shadow-lg`]}>

            <View style={tw`flex`}>
                <View style={tw`-ml-40`}>
                    <Text style={tw`text-gray-500`}>Players</Text>
                </View>
                <View style={tw`-ml-40`}>
                    <Text style={tw`text-gray-900 text-xl font-bold`}>{nofPlayers} / 15</Text>
                </View>
            </View>
            <View style={tw`flex`}>
                <View style={tw`-ml-20`}>
                    <Text style={tw`text-gray-500`}>Remaining</Text>
                </View>
                <View style={tw`-ml-20`}>
                    <Text style={tw`text-gray-900 text-xl font-bold`}>${((100_000_000 - value) / 100_000_000).toFixed(1)}m</Text>
                </View>
            </View>
        </View>
    );
};

export default TeamStats;
