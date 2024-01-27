iximport Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Netflix!" />
        <p className="description">
          Thank you for confirming the offer!
        </p>
      </main>

      <Footer />
    </div>
  )
}
