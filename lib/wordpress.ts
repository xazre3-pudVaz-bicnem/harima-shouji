const WP_API_BASE =
  process.env.NEXT_PUBLIC_WP_API_BASE_URL || 'https://wp.harima-shouji.co.jp/wp-json/wp/v2'

export type WPPost = {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<
      Array<{
        id: number
        name: string
        slug: string
      }>
    >
  }
}

export async function getPosts(perPage = 12): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WP_API_BASE}/posts?_embed&per_page=${perPage}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const posts: WPPost[] = await res.json()
    return posts[0] ?? null
  } catch {
    return null
  }
}

export function getFeaturedImageUrl(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

export function getCategories(post: WPPost): string[] {
  return (
    post._embedded?.['wp:term']?.[0]?.map((cat) => cat.name) ?? []
  )
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
