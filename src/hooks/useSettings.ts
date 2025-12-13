import { useSanityData } from './useSanityData'

const SETTINGS_QUERY = `*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  footerTagline,
  footerCopyright
}`

export interface SettingsData {
  siteTitle: string
  siteDescription: string
  footerTagline: string
  footerCopyright: string
}

export function useSettings() {
  return useSanityData<SettingsData>(SETTINGS_QUERY)
}