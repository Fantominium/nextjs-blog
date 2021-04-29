import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Malcolm Garner' 
export const siteTitle = 'Malcolm Garner - React Developer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="../public/images/profile.jpg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div className={styles.nav}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={name}
            />
            <div className={styles.nav}>
              <h1 className={utilStyles.headingXl +' '+ styles.headerTitle}>{name}</h1>
              <div className={styles.links}>
                  <a href="https://github.com/Fantominium" className={styles.link}>GitHub</a>
                <Link href="/aboutme">
                  <a className={styles.link}>About Me</a>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.nav}>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={90}
                  width={90}
                  alt={name}
                />
              </a>
            </Link>
            <div className={styles.nav}>
              <Link href="/">
                <h1 className={utilStyles.headingLg}>{name}</h1>
              </Link>
              <div className={styles.links}>
                  <a href="https://github.com/Fantominium" className={styles.link}>GitHub</a>
                <Link href="/">
                  <a className={styles.link}>About Me</a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      <main id={styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome + ' ' + styles.footer}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}