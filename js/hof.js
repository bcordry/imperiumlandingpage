const hofRuns = [
  {
    name: "Ash",
    ace: { name: "Sceptile", sprite: "https://play.pokemonshowdown.com/sprites/gen5/sceptile.png" },
    date: "2024-05-01",
    team: [ /* ... */ ],
    e4megas: "None",
    vod: "https://twitch.tv/examplevod",
    version: "v1.2",
    uniques: "5",
    starter: { name: "Treecko", sprite: "https://play.pokemonshowdown.com/sprites/gen5/treecko.png" },
    restricteds: "Latios",
    sinnohLeaders: "Gardenia, Fantina",
    attempts: 2,
    deaths: 1,
    e4deaths: 0,
    country: "🇺🇸",
    funfacts: "No healing items used in battle.",
    rowColor: "#e0f7fa", // light blue row
    cellColors: {
      name: "#ffd54f",   // yellow name cell
      ace: "#ffe082",
      team: "#e1bee7",
      deaths: "#ffcdd2"
    }
  },
  // ...more runs
];

function renderHOFTable() {
  const container = document.getElementById('hof-table-container');
  let html = `<div class="hof-table-scroll"><table class="hof-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Ace</th>
        <th>Date</th>
        <th>Team</th>
        <th>E4 Megas</th>
        <th>VOD</th>
        <th>Version</th>
        <th>Uniques</th>
        <th>Starter</th>
        <th>Restricteds</th>
        <th>Sinnoh Leaders Defeated</th>
        <th>Attempts</th>
        <th>Deaths</th>
        <th>E4 Deaths</th>
        <th>Country</th>
        <th>Bonus Fun Facts</th>
      </tr>
    </thead>
    <tbody>
  `;
  hofRuns.forEach((run, idx) => {
    html += `<tr${run.rowColor ? ` style="background:${run.rowColor}"` : ""}>`;
    html += `<td>${idx + 1}</td>`;
    html += `<td${run.cellColors?.name ? ` style="background:${run.cellColors.name}"` : ""}>${run.name}</td>`;
    html += `<td${run.cellColors?.ace ? ` style="background:${run.cellColors.ace}"` : ""}>${run.ace ? `<img src="${run.ace.sprite}" alt="${run.ace.name}" title="${run.ace.name}">` : ""}</td>`;
    html += `<td>${run.date}</td>`;
    html += `<td${run.cellColors?.team ? ` style="background:${run.cellColors.team}"` : ""}>
      <div class="hof-team-cell">
        ${run.team.map(mon => `<img src="${mon.sprite}" alt="${mon.name}" title="${mon.name}">`).join('')}
      </div>
    </td>`;
    html += `<td>${run.e4megas || ""}</td>`;
    html += `<td class="vod-link">${run.vod ? `<a href="${run.vod}" target="_blank">Watch</a>` : ""}</td>`;
    html += `<td>${run.version || ""}</td>`;
    html += `<td>${run.uniques || ""}</td>`;
    html += `<td>${run.starter ? `<img src="${run.starter.sprite}" alt="${run.starter.name}" title="${run.starter.name}">` : ""}</td>`;
    html += `<td>${run.restricteds || ""}</td>`;
    html += `<td>${run.sinnohLeaders || ""}</td>`;
    html += `<td>${run.attempts || ""}</td>`;
    html += `<td${run.cellColors?.deaths ? ` style="background:${run.cellColors.deaths}"` : ""}>${run.deaths || ""}</td>`;
    html += `<td>${run.e4deaths || ""}</td>`;
    html += `<td>${run.country || ""}</td>`;
    html += `<td>${run.funfacts || ""}</td>`;
    html += `</tr>`;
  });
  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderHOFTable);

