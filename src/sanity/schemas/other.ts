export const heroSchema = {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'headline', title: 'Main Headline', type: 'string' },
    { name: 'subheadline', title: 'Subheadline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'primaryCTA', title: 'Primary CTA Text', type: 'string' },
    { name: 'primaryCTALink', title: 'Primary CTA Link', type: 'string' },
    { name: 'secondaryCTA', title: 'Secondary CTA Text', type: 'string' },
    { name: 'secondaryCTALink', title: 'Secondary CTA Link', type: 'string' },
  ],
}

export const contactSchema = {
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Section Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'ctaText', title: 'CTA Button Text', type: 'string' },
    { name: 'email', title: 'Contact Email', type: 'string' },
  ],
}

export const socialSchema = {
  name: 'social',
  title: 'Social Media Links',
  type: 'document',
  fields: [
    { name: 'youtube', title: 'YouTube URL', type: 'url' },
    { name: 'tiktok', title: 'TikTok URL', type: 'url' },
    { name: 'instagram', title: 'Instagram URL', type: 'url' },
    { name: 'twitter', title: 'X (Twitter) URL', type: 'url' },
  ],
}

export const settingsSchema = {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', title: 'Site Title', type: 'string' },
    { name: 'siteDescription', title: 'Site Description', type: 'text' },
    { name: 'footerTagline', title: 'Footer Tagline', type: 'string' },
    { name: 'footerCopyright', title: 'Footer Copyright Text', type: 'string' },
  ],
}