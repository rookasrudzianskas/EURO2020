import * as React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';
import Field from "../components/Field/Field";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import TeamStats from "../components/TeamStats/TeamStats";
import BottomSheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet";
import {Suspense, useCallback, useMemo, useRef} from "react";
import PlayerListItem from "../components/PlayerListItem/PlayerListItem";
import {players} from "../assets/data/players";
import Filters from '../components/Filters/Filters';
import PlayersList from "../components/PlayersList/PlayersList";
import {useRecoilState} from 'recoil';




const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

    const bottomSheetRef = useRef<BottomSheet>(null);
    const filtersBottomSheet = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => [0, '60%'], []);

    const handleSheetChanges = useCallback((index: number) => {
        // console.log('handleSheetChanges', index);
    }, []);


    const viewPlayers = () => {
        // console.warn("DONE");
        bottomSheetRef?.current?.expand();
    }

    const openFilters = () => {
        filtersBottomSheet?.current?.expand();
    }

    // @ts-ignore
    return (
        <View style={[{backgroundColor: '#4CCF4D'},tw`flex flex-1 items-center`]}>
            <View style={tw`bg-blue-500 w-full`}>
                <View style={tw`mt-8 flex items-center`}>
            {/*<ImageBackground source={{uri: 'https://ico.li/wp-content/uploads/2020/02/uefa-euro-2020-abstract-background-759x499.jpg'}>*/}
                    <View style={tw`mt-2`}>
                        <Text style={tw`text-xl text-gray-100 font-bold`}>Pick your players</Text>
                    </View>
                    <View style={tw`mb-2`}>
                        <TeamStats />
                    </View>
                </View>
            </View>
            {/*</ImageBackground>*/}
            <View style={tw` flex flex-1`}>
                <Field />
            </View>

            <View style={tw`flex flex-row items-center mb-8`}>
                <TouchableOpacity activeOpacity={0.8} onPress={viewPlayers}>
                    <View style={tw`bg-yellow-500 px-24 py-4 flex flex-1 rounded-full border-2 border-yellow-600`}>
                        <Text style={tw`text-xl font-bold`}>View Players</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={tw`bg-yellow-500 ml-5 p-4 rounded-full border-2 border-yellow-600 shadow-lg`}>
                        <MaterialCommunityIcons name="fire" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={{flex: 1}}>

                    <View style={tw`mx-5 mb-2`}>
                    <TouchableOpacity activeOpacity={0.8} onPress={openFilters}>
                        <View style={tw`bg-blue-500 w-36 flex items-center px-2 py-1 rounded-full border-2 border-blue-600`}>
                            <Text style={tw`text-xl text-white`}>Add Filters</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                        {/*@ts-ignore*/}
                    <Suspense fallback={<Text>Loading...</Text>}>
                        <PlayersList />
                    </Suspense>
                </View>
            </BottomSheet>

            <BottomSheet
                ref={filtersBottomSheet}
                snapPoints={snapPoints}
            >

                <View style={{flex: 1}}>
                    <Filters />
                </View>
            </BottomSheet>

        </View>
  );
}




export default HomeScreen;
