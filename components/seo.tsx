"use client"

import Head from "next/head"
import { useRouter } from "next/router"
import { websiteContent } from "@/data/website-content"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  noindex?: boolean
  nofollow?: boolean
}

export default function SEO({ title, description, keywords, ogImage, noindex = false, nofollow = false }: SEOProps) {
  const router = useRouter()
  const { seo } = websiteContent

  // Get the current page path
  const path = router.pathname
  const pageName = path === "/" ? "home" : path.split("/")[1]

  // Get page-specific SEO settings or use defaults
  const pageSEO = seo.pages[pageName as keyof typeof seo.pages] || {}

  // Use provided values or fall back to page-specific values or global defaults
  const seoTitle = title || pageSEO.title || seo.global.defaultTitle
  const seoDescription = description || pageSEO.description || seo.global.defaultDescription
  const seoKeywords = keywords || pageSEO.keywords || seo.global.defaultKeywords
  const seoOgImage = ogImage || pageSEO.ogImage || `${seo.global.siteUrl}/images/og-default.jpg`

  // Construct canonical URL
  const canonicalUrl = `${seo.global.siteUrl}${path === "/" ? "" : path}`

  // Robots meta tag
  const robotsContent = `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`

  return (
    <Head>
      {/* Override any metadata set in layout.tsx for specific pages */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots meta tag */}
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />

      {/* Twitter */}
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
    </Head>
  )
}

