import {atom, selector} from "recoil";
import {players} from "../assets/data/players";

export const allPlayersState = atom({
    key: 'allPlayersState',
    default: players,
});

export const positionFilterState = atom({
    key: 'positionFilterState',
    default: [] as string[],
});

export const filteredPlayers = selector({
    key: 'filterPlayers',
    get: ({get}) => {
        const players = get(allPlayersState); // we get updates to this state
        const filters = get(positionFilterState); // we get updates to this state
        return players.filter(player => filters.length === 0 || filters.includes(player.position)); // return the state with the player which exists in the filtered state
    //    if no filters selected, I see all of them
    }

})
