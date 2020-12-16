export type EndpointConfig<Endpoints extends { [name: string]: string }> = {
  endpoints: Endpoints,
  url: string,
};

export type APIServerEndpoints = {
  graphql: string,
};

export const apiServer: EndpointConfig<APIServerEndpoints> = {
  endpoints: {
    graphql: '/graphql',
  },
  url: 'http://api-server:4000',
};
