import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {useRecoilState} from "recoil";
import {positionFilterState} from "../../atoms/Players";


const Filters = () => {

    const [positionFilter, setPositionFilter] = useRecoilState(positionFilterState);
    const positions = ['FWD', 'MID', 'DEF', 'GCK']
    console.log(positionFilter);
    const onFilterPress = (position: string) => {
        // console.warn(position);
        setPositionFilter((curPositionFilter) => {
            if(curPositionFilter.includes(position)) {
                // remove the filter
                return curPositionFilter.filter(pos => pos !== position);
            } else {
                return [...curPositionFilter, position];
            }
            // [...curPositionFilter, position]
        });
    }
    const isSelected = (position: string) => {
        return positionFilter.includes(position);
    }

    return (
        <View style={tw`flex items-center`}>
            <View style={[{justifyContent: 'space-between'}, tw`flex flex-row items-center justify-center ml-8 mt-5`]}>
                {positions.map((position) => (
                     <View key={position} style={[{display: 'flex', flexDirection: 'row', flex: 1},tw`flex`]}>
                        <TouchableOpacity style={{backgroundColor: isSelected(position) ? 'purple' : '#ddd'}} activeOpacity={0.8} onPress={() => onFilterPress(position)}>
                            <Text style={tw` px-4 py-3 font-bold  rounded-md shadow-md`}>{position}</Text>
                            {/*<Text style={tw`bg-gray-300 px-4 py-3 font-bold  rounded-md shadow-md`}>Forwards</Text>*/}
                        </TouchableOpacity>
                     </View>
                ))}

            </View>
        </View>
    );
};

export default Filters;
