import { useSanityData } from './useSanityData'

const SETTINGS_QUERY = `*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  footerTagline,
  footerCopyright,
  "logoUrl": logo.asset->url
}`

export interface SettingsData {
  siteTitle: string
  siteDescription: string
  footerTagline: string
  footerCopyright: string
  logoUrl?: string
}

export function useSettings() {
  return useSanityData<SettingsData>(SETTINGS_QUERY)
}