import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";

const Filters = () => {
    return (
        <View style={tw`flex items-center`}>
            <View style={[{justifyContent: 'space-between'}, tw`flex flex-row items-center justify-center ml-8 mt-5`]}>
                 <View style={[{display: 'flex', flexDirection: 'row', flex: 1},tw`flex`]}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>FWD</Text>
                        {/*<Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>Forwards</Text>*/}
                    </TouchableOpacity>
                 </View>
                 <View style={[{display: 'flex', flexDirection: 'row', flex: 1},tw`flex`]}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>MID</Text>
                        {/*<Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>Forwards</Text>*/}
                    </TouchableOpacity>
                 </View>
                 <View style={[{display: 'flex', flexDirection: 'row', flex: 1},tw`flex`]}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>DEF</Text>
                        {/*<Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>Forwards</Text>*/}
                    </TouchableOpacity>
                 </View>
                 <View style={[{display: 'flex', flexDirection: 'row', flex: 1},tw`flex`]}>
                    <TouchableOpacity activeOpacity={0.8}>
                         <Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>GCK</Text>
                         {/*<Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>Forwards</Text>*/}
                    </TouchableOpacity>
                 </View>
            </View>
        </View>
    );
};

export default Filters;
