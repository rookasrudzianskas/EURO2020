import {atom} from "recoil";
import {players} from "../assets/data/players";

export const allPlayersState = atom({
    key: 'allPlayersState',
    default: players,
});

export const positionFilterState = atom({
    key: 'positionFilterState',
    default: [],
});
