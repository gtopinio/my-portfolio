import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

import { onError } from "@apollo/client/link/error";
import { ApolloLink } from "@apollo/client/core";

const uris = [ // Dynamic link switching doesn't work
  // 'https://myportfolio-spring-boot.onrender.com/graphql',
  'https://myportfolio-spring-boot-c2.onrender.com/graphql',
  // 'https://myportfolio-spring-boot-c2-bhsl.onrender.com/graphql'
]; // <-- add the URLs of the GraphQL servers here

let uriIndex = 0;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const errorLink = onError(({ networkError }) => {
    if (networkError) {
      uriIndex = (uriIndex + 1) % uris.length; // switch to the next URI
    }
  });

  const link = ApolloLink.from([
    errorLink,
    httpLink.create({ uri: uris[uriIndex] }),
  ]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
