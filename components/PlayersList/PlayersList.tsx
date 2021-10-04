import React from 'react';
import {View} from "react-native";
import {players} from "../../assets/data/players";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import {BottomSheetFlatList} from "@gorhom/bottom-sheet";

const PlayersList = () => {
    return (
        <View>
            <BottomSheetFlatList data={players} renderItem={({item}) => (
                // @ts-ignore
                <PlayerListItem key={item.id} player={item}/>
            )} />
        </View>
    );
};

export default PlayersList;
