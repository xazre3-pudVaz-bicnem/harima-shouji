import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/app/v2/_components/PageHero'
import CtaSection from '@/app/v2/_components/CtaSection'

export const metadata: Metadata = {
  title: 'お客様の声｜店舗内装・原状回復工事',
  description:
    '株式会社播磨商事への施工に関するお客様の声を掲載しています。飲食FC・美容サロン・フィットネスジムなど業種を問わず対応しております。',
  alternates: {
    canonical: 'https://harima-shouji.co.jp/voice',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'ホーム',
      item: 'https://harima-shouji.co.jp/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'お客様の声',
      item: 'https://harima-shouji.co.jp/voice',
    },
  ],
}

const testimonials = [
  {
    industry: '飲食FC',
    role: '担当者様',
    comment: '担当者の方からいただいたお声を順次掲載予定です。',
  },
  {
    industry: '美容サロン',
    role: '担当者様',
    comment: '担当者の方からいただいたお声を順次掲載予定です。',
  },
  {
    industry: 'フィットネスジム',
    role: '担当者様',
    comment: '担当者の方からいただいたお声を順次掲載予定です。',
  },
]

export default function VoicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ background: '#FAFAF8' }}>
        <PageHero
          label="VOICE"
          title="お客様の声"
          image="/fc-02.png"
          breadcrumb={[
            { label: 'TOP', href: '/' },
            { label: 'VOICE', href: '/voice' },
          ]}
        />

        {/* Notice banner */}
        <section style={{ background: '#F5F4F0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '1.25rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#A8A29E',
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: '0.8125rem',
                color: '#78716C',
                letterSpacing: '0.02em',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              掲載準備中のため、順次更新いたします。
            </p>
          </div>
        </section>

        {/* Testimonials grid */}
        <section
          style={{
            paddingTop: '6rem',
            paddingBottom: '6rem',
            background: '#FFFFFF',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 2rem',
            }}
          >
            {/* Section label */}
            <div
              style={{
                marginBottom: '4rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '0.5625rem',
                  fontWeight: 700,
                  letterSpacing: '0.32em',
                  color: 'rgba(10,10,10,0.2)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                CUSTOMER VOICE
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.3,
                }}
              >
                施工事例のお客様よりいただいたお声
              </h2>
            </div>

            {/* Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  style={{
                    background: '#FAFAF8',
                    border: '1px solid rgba(0,0,0,0.07)',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Pending label */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: '#A8A29E',
                      background: '#F5F4F0',
                      border: '1px solid rgba(0,0,0,0.07)',
                      padding: '0.25rem 0.625rem',
                    }}
                  >
                    掲載許可取得後に公開予定
                  </div>

                  {/* Industry + role */}
                  <div>
                    <div
                      style={{
                        fontSize: '0.5625rem',
                        fontWeight: 700,
                        letterSpacing: '0.28em',
                        color: 'rgba(10,10,10,0.25)',
                        textTransform: 'uppercase',
                        marginBottom: '0.375rem',
                      }}
                    >
                      INDUSTRY
                    </div>
                    <p
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#0A0A0A',
                        letterSpacing: '-0.01em',
                        margin: 0,
                      }}
                    >
                      {t.industry}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: '#A8A29E',
                        marginTop: '0.25rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {t.role}
                    </p>
                  </div>

                  {/* Stars */}
                  <div
                    style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
                    aria-label="評価 5つ星"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L8 9.385l-3.09 1.624.59-3.44L3 5.132l3.455-.502L8 1.5z"
                          fill="rgba(10,10,10,0.18)"
                          stroke="rgba(10,10,10,0.12)"
                          strokeWidth="0.5"
                        />
                      </svg>
                    ))}
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        color: '#A8A29E',
                        marginLeft: '0.25rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      公開後に表示
                    </span>
                  </div>

                  {/* Comment placeholder */}
                  <blockquote
                    style={{
                      margin: 0,
                      padding: '1.25rem',
                      background: '#F5F4F0',
                      borderLeft: '3px solid rgba(0,0,0,0.1)',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.5rem',
                        left: '1rem',
                        fontSize: '2rem',
                        color: 'rgba(0,0,0,0.08)',
                        lineHeight: 1,
                        fontFamily: 'Georgia, serif',
                        userSelect: 'none',
                      }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        color: '#78716C',
                        lineHeight: 1.8,
                        margin: 0,
                        paddingTop: '1rem',
                        fontStyle: 'italic',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {t.comment}
                    </p>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* お声をお寄せください CTA */}
        <section
          style={{
            paddingTop: '6rem',
            paddingBottom: '6rem',
            background: '#F5F4F0',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 2rem',
            }}
          >
            <div
              style={{
                fontSize: '0.5625rem',
                fontWeight: 700,
                letterSpacing: '0.32em',
                color: 'rgba(10,10,10,0.2)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              FEEDBACK
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: '-0.03em',
                lineHeight: 1.3,
                marginBottom: '1rem',
              }}
            >
              お声をお寄せください
            </h2>
            <p
              style={{
                fontSize: '0.9375rem',
                color: '#6B6B6B',
                lineHeight: 2,
                marginBottom: '2.5rem',
                maxWidth: '480px',
                margin: '0 auto 2.5rem',
              }}
            >
              弊社の施工をご利用いただいたお客様のご意見・ご感想をお待ちしております。
              掲載許可をいただいたお声は、このページにて紹介させていただきます。
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '1rem 3rem',
                background: '#0A0A0A',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
              }}
            >
              お問い合わせ・お声フォーム
            </Link>
          </div>
        </section>

        <CtaSection
          heading={'工事のご相談は\nお気軽にどうぞ'}
          subtext="無料見積り・現地調査はお問い合わせより承ります"
          primaryLabel="お問い合わせ"
          primaryHref="/contact"
        />
      </div>
    </>
  )
}
