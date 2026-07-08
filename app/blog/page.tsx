import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'
import { getPosts, getFeaturedImageUrl, getCategories, formatDate } from '@/lib/wordpress'

export const metadata: Metadata = {
  title: 'ブログ | 店舗内装工事・原状回復の情報',
  description: '株式会社播磨商事のブログ。フランチャイズ本部向け内装工事・原状回復・クロス張替え・退去立会いに関する情報をお届けします。',
  alternates: { canonical: 'https://harima-shouji.co.jp/blog' },
}

export default async function BlogPage() {
  const posts = await getPosts(12)

  return (
    <div style={{ background: '#F6F4EF' }}>
      <PageHero
        label="BLOG"
        title="ブログ"
        subtitle="店舗内装工事・原状回復に関する情報をお届けします。"
        image="/LINE_ALBUM_2026.6.10_260610_3.jpg"
        breadcrumb={[
          { label: 'TOP', href: '/' },
          { label: 'ブログ', href: '/blog' },
        ]}
      />

      <section style={{ background: '#FFFFFF', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '6rem 0' }}>
              <p style={{ fontSize: '0.9375rem', color: '#8F8B82' }}>記事は近日公開予定です。</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '2px' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const imageUrl = getFeaturedImageUrl(post)
                const categories = getCategories(post)
                return (
                  <article key={post.id}>
                    <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', background: '#F6F4EF' }}>
                      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                            fill
                            style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div style={{ background: '#E7E3DA', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '0.75rem', color: '#8F8B82' }}>播磨商事</span>
                          </div>
                        )}
                      </div>
                      <div style={{ padding: '1.75rem 1.5rem' }}>
                        {categories.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            {categories.map((cat) => (
                              <span key={cat} style={{ fontSize: '0.6875rem', color: '#8F8B82', background: '#E7E3DA', padding: '0.25rem 0.75rem', fontWeight: 600 }}>
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                        <h2
                          style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.6, marginBottom: '0.75rem' }}
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <p style={{ fontSize: '0.75rem', color: '#8F8B82' }}>{formatDate(post.date)}</p>
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <CtaSection heading={'施工管理について\nご相談ください'} subtext="FC本部・多店舗展開企業向けの施工管理をまとめてサポートします。" />
    </div>
  )
}
