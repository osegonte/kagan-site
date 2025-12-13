import { useSanityData } from './useSanityData'

const SERVICES_QUERY = `*[_type == "services"][0]{
  title,
  servicesList,
  ctaText,
  ctaEmail
}`

export interface ServicesData {
  title: string
  servicesList: Array<{ name: string; description: string }>
  ctaText: string
  ctaEmail: string
}

export function useServices() {
  return useSanityData<ServicesData>(SERVICES_QUERY)
}