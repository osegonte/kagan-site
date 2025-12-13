import { useSanityData } from './useSanityData'

const HERO_QUERY = `*[_type == "hero"][0]{
  headline,
  subheadline,
  description,
  primaryCTA,
  primaryCTALink,
  secondaryCTA,
  secondaryCTALink,
  "heroImageUrl": heroImage.asset->url
}`

export interface HeroData {
  headline: string
  subheadline: string
  description: string
  primaryCTA: string
  primaryCTALink: string
  secondaryCTA: string
  secondaryCTALink: string
  heroImageUrl?: string
}

export function useHero() {
  return useSanityData<HeroData>(HERO_QUERY)
}