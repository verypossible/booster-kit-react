const common = {
  action: 'rgb(8,130,218)',
  backgroundDark: 'rgba(0,0,0,1)',
  backgroundLight: 'rgba(255,255,255,1)',
  dark: '#333',
  darkGray: 'rgb(97,97,97)',
  light: '#FFF',
  lightGray: 'rgb(194,192,196)'
}

const status = {
  alert: 'rgb(235,72,21)',
  ok: 'rgb(98,167,28)',
  warning: 'rgb(221,131,39)'
}

const theme = {
  dark: {
    primaryBackground: common.backgroundDark,
    primaryBackgroundInverted: common.backgroundLight,
    primaryColor: common.dark,
    primaryColorInverted: common.light
  },
  light: {
    primaryBackground: common.backgroundLight,
    primaryBackgroundInverted: common.backgroundDark,
    primaryColor: common.light,
    primaryColorInverted: common.dark
  }
}

export { status }

export default {
  common,
  theme
}
