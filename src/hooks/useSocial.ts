import { useSanityData } from './useSanityData'

const SOCIAL_QUERY = `*[_type == "social"][0]{
  youtube,
  tiktok,
  instagram,
  twitter
}`

export interface SocialData {
  youtube: string
  tiktok: string
  instagram: string
  twitter: string
}

export function useSocial() {
  return useSanityData<SocialData>(SOCIAL_QUERY)
}