import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/sections/CTABanner'
import { getPosts, getFeaturedImageUrl, getCategories, formatDate } from '@/lib/wordpress'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'ブログ | 店舗内装工事・原状回復の情報',
  description:
    '株式会社播磨商事のブログ。フランチャイズ本部向け内装工事・原状回復・クロス張替え・退去立会いに関する情報をお届けします。',
  alternates: { canonical: 'https://harima-shouji.co.jp/blog' },
}

export default async function BlogPage() {
  const posts = await getPosts(12)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: 'ブログ', url: '/blog' }])),
        }}
      />

      <div className="bg-gray-950" style={{ paddingTop: '10rem' }}>
        <div className="container py-14">
          <Breadcrumb items={[{ label: 'ブログ' }]} />
          <div className="mt-4">
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">BLOG</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5">ブログ</h1>
            <p className="text-gray-300 text-base leading-relaxed">
              店舗内装工事・原状回復・退去立会いに関する情報をお届けします。
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-300 text-5xl mb-4 font-light">—</div>
              <p className="text-gray-500 text-sm">記事は近日公開予定です。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const imageUrl = getFeaturedImageUrl(post)
                const categories = getCategories(post)
                return (
                  <article key={post.id} className="group">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="overflow-hidden mb-4">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                            <span className="text-xs text-gray-400">播磨商事</span>
                          </div>
                        )}
                      </div>
                      <div>
                        {categories.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {categories.map((cat) => (
                              <span key={cat} className="text-xs text-amber-600 font-medium">
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                        <h2
                          className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
