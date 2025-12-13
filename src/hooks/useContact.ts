import { useSanityData } from './useSanityData'

const CONTACT_QUERY = `*[_type == "contact"][0]{
  title,
  description,
  ctaText,
  email
}`

export interface ContactData {
  title: string
  description: string
  ctaText: string
  email: string
}

export function useContact() {
  return useSanityData<ContactData>(CONTACT_QUERY)
}