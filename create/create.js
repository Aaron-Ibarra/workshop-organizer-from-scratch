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

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const playerName = data.get('player-name');
    const nickname = data.get('player-nickname');
    const team = data.get('team-id');

    await createPlayer({
        name: playerName,
        ign: nickname,
        team_id: team,
    });

    location.replace('../');
});
