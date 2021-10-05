import React from 'react';
import {View, Text} from "react-native";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import {BottomSheetFlatList} from "@gorhom/bottom-sheet";
import {allPlayersState} from "../../atoms/Players";
import {useRecoilState} from "recoil";

const PlayersList = () => {
    const [players] = useRecoilState(allPlayersState);

    // setInterval(() => setPlayers([]), 5000);

    return (
        <>
            <BottomSheetFlatList data={players} renderItem={({item}) => (
                // @ts-ignore
                <PlayerListItem key={item.id} player={item}/>

            )} />
        </>
    );
};

export default PlayersList;
