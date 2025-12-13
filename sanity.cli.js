import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '23gflanp',
    dataset: 'production'
  },
  deployment: {
    appId: 'qa0c7ouzy3lwiic7ygau1rp8'
  }
})