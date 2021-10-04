import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Feather, Ionicons} from "@expo/vector-icons";
import {Player} from "../../types";

interface Props {
    player: Player;
}

const PlayerListItem = ({player}: Props) => {
    return (
        <View style={tw`mx-6 border-b-2 border-gray-200`}>
            <View style={tw`mb-3`}>
                <View style={tw`flex flex-row items-center`}>
                    <View style={tw`p-3 border-r-2 border-gray-200`}>
                        <Feather name="info" size={24} color="blue" />
                    </View>
                    <View style={tw` ml-2 mr-1`}>
                        {/*<Ionicons name="football" size={30} color="black" />*/}
                    <Image  source={{
                        uri: `https://media.api-sports.io/football/players/${player.id}.png`,
                    }} style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: "#ddd",
                        marginRight: 10,
                    }} />
                    </View>
                    <View style={tw`flex ml-2 flex-1`}>
                        <Text style={tw` text-lg font-bold`}>{player?.name}</Text>
                        <Text style={tw` text-sm`}>{player?.match}</Text>
                    </View>

                    <View style={tw`flex`}>
                        <Text style={tw`text-lg font-bold`}>${(player?.price  / 1_000_000).toFixed(1)}m</Text>
                        <Text style={tw`text-right`}>{player?.position}</Text>
                    </View>

                    <View style={tw`flex`}>
                        <Text style={tw`mx-5 text-lg font-bold`}>{player?.totalPoints}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PlayerListItem;
