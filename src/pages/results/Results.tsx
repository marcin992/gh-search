import React, { PureComponent } from 'react';
import { RouteComponentProps, useLocation } from '@reach/router';
import { useQuery } from '@apollo/client';
import queryString from 'query-string';
import gql from 'graphql-tag';

const GET_RESULTS = gql`
  query GetResults($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      pageInfo {
        endCursor
      }
      edges {
        cursor

        node {
          ... on Repository {
            id
            url
            openGraphImageUrl
            nameWithOwner
            description
            stargazerCount
            latestRelease {
              name
              createdAt
              updatedAt
            }
            mentionableUsers(first: 5) {
              nodes {
                id
                avatarUrl
                name
                login
                url
              }
            }
          }
        }
      }
    }
  }
`;

export function Results(props: RouteComponentProps) {
  const location = useLocation();
  console.log({ l: location.search });
  const { q: searchQuery } = queryString.parse(location.search);
  const { data, loading, error } = useQuery(GET_RESULTS, {
    variables: {
      query: searchQuery,
    },
  });

  if (loading || error) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
