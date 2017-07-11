const common = {
  action: 'rgb(8,130,218)',
  backgroundDark: '#000',
  backgroundLight: '#FFF',
  dark: '#000',
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
