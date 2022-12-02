/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getTeams, removePlayer } from './fetch-utils.js';
import { createTeam } from './render-utils.js';

/* Get DOM Elements */
const teamsEl = document.querySelector('#esport-teams');

/* State */

/* Events */
window.addEventListener('load', async () => {
    fetchAndDisplayTeams();
});

/* Display Functions */
async function fetchAndDisplayTeams() {
    teamsEl.innerHTML = '';
    const teams = await getTeams();

    for (let team of teams) {
        const teamEl = createTeam(team);
        const teamPlayersEl = document.createElement('div');
        for (let player of team.team_players) {
            const teamPlayerEl = document.createElement('div');
            teamPlayerEl.classList.add('player');
            teamPlayerEl.textContent = `Player Name: ${player.name}`;

            teamPlayerEl.addEventListener('click', async () => {
                await removePlayer(player.id);

                fetchAndDisplayTeams();
            });

            teamPlayersEl.append(teamPlayerEl);
        }
        teamEl.append(teamPlayersEl);
        teamsEl.append(teamEl);
    }
}
