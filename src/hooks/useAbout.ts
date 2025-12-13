import { useSanityData } from './useSanityData'

const ABOUT_QUERY = `*[_type == "about"][0]{
  title,
  tagline,
  description,
  extendedBio,
  stats,
  expertise
}`

export interface AboutData {
  title: string
  tagline: string
  description: string
  extendedBio: any[]
  stats: Array<{ value: string; label: string }>
  expertise: string[]
}

export function useAbout() {
  return useSanityData<AboutData>(ABOUT_QUERY)
}