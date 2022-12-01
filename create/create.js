import { createPlayer, getTeams } from '../fetch-utils.js';

const form = document.querySelector('form');
const teamSelect = document.querySelector('select');

window.addEventListener('load', async () => {
    const teams = await getTeams();
    for (let team of teams) {
        console.log(team);
        const teamOption = document.createElement('option');
        teamOption.textContent = team.name;
        teamOption.value = team.id;

        teamSelect.append(teamOption);
    }
});

form.addEventListener('submit', async () => {
    const data = new FormData(form);
    const playerName = data.get('player-name');
    const team = data.get('team-id');

    await createPlayer({
        name: playerName,
        team_id: team,
    });
});
