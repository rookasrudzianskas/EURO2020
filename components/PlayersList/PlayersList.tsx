import React from 'react';
import {View, Text} from "react-native";
import PlayerListItem from "../PlayerListItem/PlayerListItem";
import {BottomSheetFlatList} from "@gorhom/bottom-sheet";
import {allPlayersState, filteredPlayers} from "../../atoms/Players";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

const PlayersList = () => {
    // const [players] = useRecoilState(allPlayersState); // you need both of them
    const players = useRecoilValue(filteredPlayers) // just if you need a value, you do not need anything to change
    // const setPlayers = useSetRecoilState(allPlayersState); // this one is if you need to change

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
