"use client"

import './globals.css';
import Head from 'next/head';
import { ReduxProvider } from './store/provider';
import { Space_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuSM from './components/MenuSM';
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from  '../apolloClient';

const sm = Space_Mono({ subsets: ['latin'] , weight:'400' });

export default function RootLayout({ children }) {

const [menuSMClick, setMenuSMClick] = useState(null);

const handleMenuSMClick = (e) => {
  setMenuSMClick(e);
};

  return (
    <html lang="en">
  <Head>
        <title>SHOP</title>
        <meta name="description" content="developed by create next app" />
  </Head>
       <body className={sm.className}>
       <ApolloProvider client={client}>
          <ReduxProvider>
          <Header onHeaderClick={handleMenuSMClick}/>
            <MenuSM onClick={menuSMClick}/>
              {children}
           </ReduxProvider>
        </ApolloProvider>
      <Footer/>
       </body>
    </html>
  )
}
