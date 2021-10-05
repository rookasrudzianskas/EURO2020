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
        try {
            const response = await fetch("https://api-football-v1.p.rapidapi.com/v3/players?league=4&season=2020", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                    "x-rapidapi-key": "dea5310136msh3f59c4dcecedff3p1e01b8jsndffe742e9b8d"
                }
            });

            const json = await response.json();

            // @ts-ignore
            return json.response.map((entry) => ({
                id: entry.player.id,
                name: entry.player.name,
                match: 'SDA',
                price: 12_300_000,
                // @ts-ignore
                position: pos2pos[entry.statistics[0].games.position],
                totalPoints: 29,

            }));
        } catch (e) {
            console.log(e);
            return [];
        }

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

