// const BASE_ENVIRONMENTS = [
//   "/rooms/meetingroom/MeetingRoom.bundle.json",
//   "/rooms/atrium/Atrium.bundle.json",
//   "/rooms/MedievalFantasyBook/MedievalFantasyBook.bundle.json",
//   "/rooms/rooftopbuilding1/RooftopBuilding1.bundle.json",
//   "/rooms/wideopenspace/WideOpenSpace.bundle.json"
// ];
// const EXTRA_ENVIRONMENTS = process.env.EXTRA_ENVIRONMENTS ? process.env.EXTRA_ENVIRONMENTS.split(",") : [];
// const ALL_ENVIRONMENTS = EXTRA_ENVIRONMENTS.concat(BASE_ENVIRONMENTS);

// export const ENVIRONMENT_URLS = ALL_ENVIRONMENTS.map(x => {
//   return process.env.ASSET_BUNDLE_SERVER + x;
// });

// export const DEFAULT_ENVIRONMENT_URL = ENVIRONMENT_URLS[0];


const BASE_ENVIRONMENTS = [
  '/src/assets/environments/scenarios/conferencias.json',
  '/src/assets/environments/scenarios/areacomun.json',
  '/src/assets/environments/scenarios/galtec.json'
];
const EXTRA_ENVIRONMENTS = process.env.EXTRA_ENVIRONMENTS ? process.env.EXTRA_ENVIRONMENTS.split(",") : [];
const ALL_ENVIRONMENTS = EXTRA_ENVIRONMENTS.concat(BASE_ENVIRONMENTS);

// 'https://10.15.28.221:8080'

export const ENVIRONMENT_URLS = ALL_ENVIRONMENTS.map(x => {
  return 'https://localhost:8080' + x;
});

export const DEFAULT_ENVIRONMENT_URL = ENVIRONMENT_URLS[0];