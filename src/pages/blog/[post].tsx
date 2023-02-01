import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { Post, Posts, SocialLinks } from '../../lib/querys';
import { formatDate } from '../../helpers/formatDate';

interface Props {
  apiData: any;
}

const PostApp = ({ apiData }: Props) => {
  const postContent = apiData.postData.post;

  return (
    <div className="container">
      <div className="pb-8">
        <div className="block w-full h-[200px] md:h-[400px] relative">
          <Image
            src={postContent.featuredImage.node.sourceUrl}
            fill
            alt="imagem de capa"
            className="object-cover object-center rounded-xl"
          />
        </div>
      </div>

      <div className="block space-y-2 pb-8">
        <div>
          <h1 className="text-3xl text-blue font-bold">{postContent.title}</h1>
        </div>

        <div>
          <span className="text-sm text-blue">
            {formatDate(postContent.date)}
          </span>
        </div>
      </div>

      <div
        className="text-sm pb-8"
        dangerouslySetInnerHTML={{ __html: postContent.content }}
      />
    </div>
  );
};

export default PostApp;

interface IPaths {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const resultApi = await (await Posts.queryExecute()).posts;

  const paths = resultApi?.map((path: IPaths) => {
    return {
      params: {
        post: path.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.post) {
    const [{ linksSocialPage }, { result: postData }] = await Promise.all([
      await SocialLinks.queryExecute(),
      await Post.queryExecute(params.post as string),
    ]);

    const response = {
      linksSocialPage,
      postData,
    };

    return {
      props: {
        apiData: response,
      },
      revalidate: 30,
    };
  }

  return {
    notFound: true,
  };
};
