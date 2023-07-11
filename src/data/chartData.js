import { teamScoring, rushTDs, passTDs } from './stats'

// AVG TEAM SCORING
export const avgTeamScore = {
  labels: teamScoring.map(item => item.year),
  datasets: [
    {
      label: 'Average Team Points scored per Game',
      data: teamScoring.map(item => item.avgScore),
      fill: true,
      backgroundColor: 'grey',
      borderColor: 'rgb(0, 94, 255)',
    },
  ],
}
// AVG RUSH TDs
export const avgRushTD = {
  labels: rushTDs.map(item => item.year),
  datasets: [
    {
      label: 'Average Team Rushing TDs Per Game',
      data: rushTDs.map(item => item.avgRushTD),
      fill: true,
      backgroundColor: 'grey',
      borderColor: 'rgb(0, 94, 255)',
    },
  ],
}
// AVG PASS TDs
export const avgPassTD = {
  labels: passTDs.map(item => item.year),
  datasets: [
    {
      label: 'Average Team passing TDs Per Game',
      data: passTDs.map(item => item.avgPassTD),
      fill: true,
      backgroundColor: 'grey',
      borderColor: 'rgb(0, 94, 255)',
    },
  ],
}
