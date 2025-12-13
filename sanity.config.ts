import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'KaganTech Site',
  
  projectId: '23gflanp', // FIXED: was 23gf1anp
  dataset: 'production',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemas,
  },
  
  // This tells Studio which URL to use for authentication
  basePath: '/studio',
})