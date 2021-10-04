import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Feather, Ionicons} from "@expo/vector-icons";

const PlayerListItem = () => {
    return (
        <View style={tw`mx-6`}>
            <View>
                <View style={tw`flex flex-row items-center`}>
                    <View style={tw`p-3 border-r-2 border-gray-300`}>
                        <Feather name="info" size={24} color="blue" />
                    </View>
                    <View style={tw` ml-2 mr-1`}>
                        <Ionicons name="football" size={30} color="black" />
                    {/*<Image source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f5be112e7f395dc08ef8e58%2FLionel-Messi-celebrating-scoring-a-goal-in-the-2019-20-UEFA-Champions-League%2F1960x0.jpg%3Ffit%3Dscale'}} />*/}
                    </View>
                    <View style={tw`flex ml-2 flex-1`}>
                        <Text style={tw` text-lg font-bold`}>C. Ronaldo</Text>
                        <Text style={tw` text-sm`}>GSD vs SJD</Text>
                    </View>

                    <View style={tw`flex`}>
                        <Text style={tw`text-lg font-bold`}>$10.1</Text>
                        <Text style={tw`text-right`}>MID</Text>
                    </View>

                    <View style={tw`flex`}>
                        <Text style={tw`mx-5 text-lg font-bold`}>29</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PlayerListItem;
