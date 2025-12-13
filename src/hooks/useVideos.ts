import { useSanityData } from './useSanityData'

const VIDEOS_QUERY = `*[_type == "videos"][0]{
  title,
  featured,
  shorts,
  landscape
}`

export interface VideosData {
  title: string
  featured: { videoId: string; title: string }
  shorts: Array<{ videoId: string; title: string }>
  landscape: Array<{ videoId: string; title: string }>
}

export function useVideos() {
  return useSanityData<VideosData>(VIDEOS_QUERY)
}