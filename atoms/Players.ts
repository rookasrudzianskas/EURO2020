import {atom, selector} from "recoil";
import response from '../assets/data/response.json';

const pos2pos = {
    Attacker: 'FWD',
    Defender: 'DEF',
    Midfielder: 'MID',
    Goalkeeper: 'GCK',
};

export const allPlayersState = selector({
    key: 'allPlayersState',
    get: async () => {
        return new Promise((resolve, reject) => {
           setTimeout(() => resolve(
               response.response.map((entry) => ({
                   id: entry.player.id,
                   name: entry.player.name,
                   match: 'SDA',
                   price: 12300000,
                   // @ts-ignore
                   position: pos2pos[entry.statistics[0].games.position],
                   totalPoints: 29,
               }))
           ), 1000);
        });

    }
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

});

