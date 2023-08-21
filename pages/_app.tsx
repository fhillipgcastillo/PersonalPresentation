import { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { client } from '../lib/apolloClient';

import '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
    return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
    );
}
