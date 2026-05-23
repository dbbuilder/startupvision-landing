import { MetadataRoute } from 'next'

const BLOG_SLUGS = [
  'ai-augmented-development',
  'code-review-roi',
  'fractional-cto',
  'hipaa-compliance',
  'mvp-success',
  'platform-vs-partnership',
  'prototype-to-production',
  'soc2-compliance',
  'tech-stack-2026',
  'tech-team-strategy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://startupvision.net'
  const now = new Date().toISOString()

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...blogPages,
  ]
}
