// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoieWlob25nMDYxOCIsImEiOiJja2J3M28xbG4wYzl0MzJxZm0ya2Fua2p2In0.PNKfkeQwYuyGOTT_x9BJ4Q';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = false;
const CHINESE_INFO_MESSAGE = (yearLength, year) =>
  `我用 App 记录自己骑行 ${yearLength} 年了，下面列表展示的是 ${year} 的数据`;
const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `Cycling Journey with ${yearLength} Years, the table shows year ${year} data`;

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const MORNING_RIDE_TITLE = IS_CHINESE ? '清晨骑行' : 'Morning Ride';
const LUNCH_RIDE_TITLE = IS_CHINESE ? '上午骑行' : 'Lunch Ride';
const AFTERNOON_RIDE_TITLE = IS_CHINESE ? '午后骑行' : 'Afternoon Ride';
const EVENING_RIDE_TITLE = IS_CHINESE ? '傍晚骑行' : 'Evening Ride';
const NIGHT_RIDE_TITLE = IS_CHINESE ? '夜晚骑行' : 'Night Ride';

const RUN_TITLES = {
  MORNING_RIDE_TITLE,
  LUNCH_RIDE_TITLE,
  AFTERNOON_RIDE_TITLE,
  EVENING_RIDE_TITLE,
  NIGHT_RIDE_TITLE,
};

export {
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  IS_CHINESE,
  INFO_MESSAGE,
  RUN_TITLES,
};

export const AVATAR =
  'https://battlele.com/img/avatar.png'; // Temp avatar
export const NAVS = [
  { text: 'Blog', link: 'https://battlele.com' },
  { text: 'About', link: 'https://battlele.com/about' },
];

const nike = 'rgb(224,237,94)';
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';
