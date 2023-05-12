require('dotenv').config()

module.exports = {
  expo: {
    userInterfaceStyle: 'dark',
    owner: 'maxeozakh',
    icon: './assets/images/icon.png',
    extra: {
      eas: {
        projectId: process.env.PROJECT_ID,
      },
    },
    ios: {
      bundleIdentifier: process.env.BUNDLE_IDENTIFIER,
    },
  },
}
