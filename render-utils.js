export function createTeam(team) {
    const teamEl = document.createElement('div');
    const nameEl = document.createElement('h3');

    nameEl.textContent = team.name;

    teamEl.append(nameEl);

    return teamEl;
}
