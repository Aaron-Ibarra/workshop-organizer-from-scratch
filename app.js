/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getTeams } from './fetch-utils.js';
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
    const teams = await getTeams();

    for (let team of teams) {
        const teamEl = createTeam(team);
        for (let member of team.team_members) {
            const teamMemberEl = document.createElement('div');
            teamMemberEl.textContent = `Player Name: ${member.name}`;
            teamEl.append(teamMemberEl);
        }
        teamsEl.append(teamEl);
    }
}
