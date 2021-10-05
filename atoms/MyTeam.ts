import {atom} from "recoil";
import {Player} from "../types";


export const MyPlayersState = atom({
    key: 'MyPlayersState',
    default: [] as Player[],
})
