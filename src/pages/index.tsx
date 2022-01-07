import Head from 'next/head';
import Image from 'next/image';
import useNextBlurhash from 'use-next-blurhash';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const [blurDataUrl] = useNextBlurhash(`L*Ly+PWER+j[~WNeayWXtRWXjZoK`, 20, 10);
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.imageContainer}>
          <Image
            src="/lorem-picsum.jpg"
            alt="Landscape image"
            width="720"
            height="360"
            placeholder="blur"
            blurDataURL={blurDataUrl || `/lorem-picsum.jpg`}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
