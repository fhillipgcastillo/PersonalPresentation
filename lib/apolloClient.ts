import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'cross-fetch';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: `https://graphqlzero.almansi.me/api`, fetch })
});
