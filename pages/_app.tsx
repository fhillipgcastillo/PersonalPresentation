import { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import '../styles/globals.css'
import { API_URL } from '../lib/posts';


const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
    return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
    );
}
