import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "./posts";
console.log("apollo client called");

export const client = new ApolloClient({
    uri: `https://graphqlzero.almansi.me/api`,
    cache: new InMemoryCache(),
});
