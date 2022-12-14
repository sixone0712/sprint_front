import { css } from '@emotion/react';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <Button>1234</Button>
//         <h1
//           className={styles.title}
//           css={css`
//             color: red;
//           `}
//         >
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing <code className={styles.code}>pages/index.tsx</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   );
// };

// export default Home;

const Home: NextPage = () => {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <header>
          <h1>MUI5 + Next.js 12</h1>
        </header>
        <section>
          <Button variant={'contained'}>Hello MUI</Button>

          <FormControl>
            {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            <br />
            <br />
            <br />
            <br />
            {/* <InputLabel htmlFor="my-input2">Email address2</InputLabel> */}
            <Input id="my-input2" aria-describedby="my-helper-text2" />
            <FormHelperText id="my-helper-text2">We'll never share your email2.</FormHelperText>
          </FormControl>
        </section>
      </div>
    </main>
  );
};

export default Home;
