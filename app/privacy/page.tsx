import type { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社播磨商事のプライバシーポリシー。',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <div className="container py-14">
        <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />
        <div className="mt-8 max-w-3xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-3">1. 個人情報の取得について</h2>
              <p>
                株式会社播磨商事（以下「当社」）は、お問い合わせフォームやメール等を通じてお客様の個人情報を取得する場合があります。
                個人情報は適切な方法で取得し、不正な手段による取得は行いません。
              </p>
            </section>
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-3">2. 個人情報の利用目的</h2>
              <p>取得した個人情報は、以下の目的に限り利用いたします。</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>お問い合わせへの対応</li>
                <li>サービスのご提供</li>
                <li>お見積り・工事に関する連絡</li>
              </ul>
            </section>
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-3">3. 個人情報の第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除き、お客様の同意なしに個人情報を第三者に提供することはありません。
              </p>
            </section>
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-3">4. 個人情報の管理</h2>
              <p>
                当社は、個人情報の漏洩・紛失・改ざん等を防止するため、適切な安全管理措置を講じます。
              </p>
            </section>
            <section>
              <h2 className="text-base font-bold text-gray-900 mb-3">5. お問い合わせ</h2>
              <p>個人情報に関するお問い合わせは、下記までご連絡ください。</p>
              <div className="mt-2">
                <p>株式会社播磨商事</p>
                <p>メール：naisou@harima-shouji.co.jp</p>
                <p>電話：080-4724-0713</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
