import { gql } from '@apollo/client';
import { getClient } from './apollo';

const ApolloClient = getClient();

export const SocialLinks = {
  postType: 'page',
  acf: 'paginaHome',
  query: function () {
    return gql`
      query GetSocialLink {
        ${this.postType}(id: "81", idType: DATABASE_ID) {
          ${this.acf} {
            rsLinkFacebook
            rsLinkInstagram
            rsLinkLinkedin
            rsLinkYoutube
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    console.log(result);

    return {
      result
    };
  }
};

export const ExecuteAllQuerys = async () => {
  const [
    { result }
  ] = await Promise.all([
    await SocialLinks.queryExecute()
  ]);

  return {
    result,
  };
};
