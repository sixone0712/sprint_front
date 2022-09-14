import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import createEmotionCache from '../libs/emotion/emotionCache';
import muiTheme from '../libs/theme/muiTheme';
import '../styles/globals.css';

export type AppPropsWithCache = AppProps & {
  Component: NextPage;
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppPropsWithCache) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
