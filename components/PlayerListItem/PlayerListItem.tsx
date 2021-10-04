import React from 'react';
import {View, Text, Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Feather} from "@expo/vector-icons";

const PlayerListItem = () => {
    return (
        <View style={tw``}>
            <View>
                <View style={tw`flex flex-row items-center`}>
                    <Feather name="info" size={24} color="blue" />
                    <Image source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f5be112e7f395dc08ef8e58%2FLionel-Messi-celebrating-scoring-a-goal-in-the-2019-20-UEFA-Champions-League%2F1960x0.jpg%3Ffit%3Dscale'}} />
                    <View style={tw`flex`}>
                        <Text style={tw``}>C. Ronaldo</Text>
                        <Text style={tw``}>GSD vs SJD</Text>
                    </View>

                    <View style={tw`flex`}>
                        <Text style={tw``}>$10.1</Text>
                        <Text style={tw``}>MID</Text>
                    </View>

                    <View style={tw`flex`}>
                        <Text>29</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PlayerListItem;
