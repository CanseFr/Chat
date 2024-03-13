import {ApolloClient, InMemoryCache} from "@apollo/client";
// import {API_URL} from "./urls";

// TODO : Fix env bug

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:`http://localhost:3000/graphql`
  // uri:`${API_URL}/graphql`
})

export default client;