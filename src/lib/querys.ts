import { gql } from '@apollo/client';
import { CiPizza } from 'react-icons/ci';
import { getClient } from './apollo';

const ApolloClient = getClient();

export const AboutHome = {
  postType: 'page',
  acf: 'paginaHome',
  query: function () {
    return gql`
      query GetContentAbout {
        ${this.postType}(id: "81", idType: DATABASE_ID){
          ${this.acf}{
            simuladorTitulo
            simuladorDescricao
            blockTituloSobre
            blockDescricaoSobre
          }
        },
        thumbnail:${this.postType}(id: "2", idType: DATABASE_ID){
          featuredImage{
            node{
              sourceUrl
            }
          }
        }
      }
    `;
  },

  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      ContentAboutHome: result.page.paginaHome,
      thumbnail: result.thumbnail.featuredImage.node.sourceUrl
    };


  }
}

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

    return {
      linksSocialPage: result.page.paginaHome
    };
  }
};

export const Banners = {
  postType: 'banners',
  acf: 'bannerHome',
  query: function () {
    return gql`
      query GetSocialLink {
        ${this.postType} {
          nodes {
            ${this.acf}  {
              bannerImagemDesktop {
                sourceUrl
              }
              bannerImagemMobile {
                sourceUrl
              }
              bannerLinkExterno
              bannerLink
            }
          }
        }
      }
    `;
  },

  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    const banners = result[this.postType].nodes?.map((item: any) => {
      return {
        ImgDesktopUrl: item[this.acf].bannerImagemDesktop.sourceUrl,
        ImgMobileUrl: item[this.acf].bannerImagemMobile.sourceUrl,
        LinkExterno: item[this.acf].bannerLinkExterno,
        Url: item[this.acf].bannerLink
      }
    })

    return {
      banners
    };
  }
};

export const PgAbout = {
  postType: 'page',
  acf: 'paginaSobre',
  query: function () {
    return gql`
      query GetContent {
        ${this.postType}(id: "2", idType: DATABASE_ID){
          featuredImage{
            node{
              sourceUrl
            }
          }
          content
          ${this.acf}{
            sDiretoriaTitulo
            sDiretoriaDescricao
            sTituloVisao
            sVisaoDescricao
            sTituloValores
            sValoresDescricao
            sTituloMissao
            sMissaoDescricao
            sTituloVisao
            sVisaoDescricao
            sPoliticaTitulo
            sPoliticaDescricao
            sImagensCertificados{
              mediaItemUrl
            }
          }
        }
      }
    `;
  },

  queryExecute: async function () {
    const contentAbout = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return { contentAbout }
  }
}

export const Empreendimentos = {
  postType: 'empreendimentos',
  acf: 'empreendimento',
  query: function () {
    return gql`
      query GetContent {
        ${this.postType}{
          nodes {
            slug
            ${this.acf}{
              empTipoDoEmpreendimento
              empEtapa
              empImagemPrincipal{
                sourceUrl
              }
              parcelasAPartirDe
              empLogotipoDoEmpreendimento{
                sourceUrl
              }
              empCaracteristicas
              empEstagioDaObra
              empEstagio
              empCidade
            }
          }
        }
      }
    `;
  },

  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return { AllEmp: result.empreendimentos.nodes }
  }
}

export const Empreendimento = {
  postType: 'empreendimento',
  acf: 'empreendimento',
  query: function () {
    return gql`
      query GetContent($id: ID!) {
        ${this.postType}(idType: SLUG, id: $id){
          ${this.acf} {
            empImagemDaCapa{
              sourceUrl
            }
            empImagemPrincipal{
              sourceUrl
            }
            empLogotipoDoEmpreendimento{
              sourceUrl
            }
            empDescricao
            empTipoDoEmpreendimento
            empEtapa
            parcelasAPartirDe
            empCidade
            empEstagioDaObra
            empEstagio
            empCaracteristicas
            empDiferencial{
              icone{
                sourceUrl
              }
              nome
            }
            empImagensDasPlantas{
            texto
            imagem{
                sourceUrl
              }
            }
            empFotos{
              sourceUrl
            }
            empImagemDaImplantacao{
              sourceUrl
            }
            empLocalizacao
            empEstandeDeVendas
          }
        }
      }
    `;
  },

  queryExecute: async function (slug: string) {
    const result = await (
      await ApolloClient.query({ query: this.query(), variables: { id: slug } })
    ).data;

    return { emp: result.empreendimento.empreendimento }
  }
}

export const EmpSlugs = {
  postType: 'empreendimentos',
  query: function () {
    return gql`
      query GetContent {
        ${this.postType}{
          nodes {
            slug
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return { slugs: result.empreendimentos.nodes }
  }
}

export const Posts = {
  postType: 'posts',
  query: function () {
    return gql`
      query GetContent{
        ${this.postType} {
          nodes{
            title
            date
            slug
            featuredImage{
              node{
                sourceUrl
              }
            }
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return { posts: result.posts.nodes }
  }
}

export const Post = {
  postType: 'post',
  query: function () {
    return gql`
      query GetContent($id: ID!) {
        ${this.postType}(idType: SLUG, id: $id) {
            title
            date
            featuredImage{
              node{
                sourceUrl
              }
            }
            content
          }
        }
    `;
  },
  queryExecute: async function (slug: string) {
    const result = await (
      await ApolloClient.query({ query: this.query(), variables: { id: slug } })
    ).data;

    return { result }
  }
}

export const ExecuteAllQuerys = async () => {
  const [
    { linksSocialPage },
    { banners },
    { ContentAboutHome, thumbnail },
    { AllEmp }
  ] = await Promise.all([
    await SocialLinks.queryExecute(),
    await Banners.queryExecute(),
    await AboutHome.queryExecute(),
    await Empreendimentos.queryExecute(),
  ]);

  return {
    linksSocialPage,
    banners,
    ContentAboutHome,
    thumbnail,
    AllEmp
  };
};
