import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '23gflanp', // FIXED: was 23gf1anp
  dataset: 'production',
  useCdn: true, // Use CDN for faster response
  apiVersion: '2024-12-12', // Today's date
})