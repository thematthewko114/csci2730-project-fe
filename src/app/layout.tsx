"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/themes/theme-provider"
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets, RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const alchemyKey: string = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!;
  const walletconnectKey : string = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_KEY!;

  const { chains, publicClient } = configureChains(
      [mainnet],
      [
      alchemyProvider({ apiKey: alchemyKey }),
      publicProvider()
      ]
  );
    
  const { connectors } = getDefaultWallets({
      appName: 'BlockRecord',
      projectId: walletconnectKey,
      chains
  });

  const wagmiConfig = createConfig({
      autoConnect: true,
      connectors,
      publicClient
  })
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
