import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Posts } from '../../lib/querys';
import ImageCapa from '../../../public/posts.jpeg';
import { formatDate } from '../../helpers/formatDate';
import Link from 'next/link';

interface Props {
  apiData: {
    posts: [
      {
        title: string;
        date: string;
        slug: string;
        featuredImage: {
          node: {
            sourceUrl: string;
          };
        };
      }
    ];
  };
}

const PostsApp = ({ apiData }: Props) => {
  return (
    <section className="container py-6">
      <div className="w-full h-[200px] md:h-[400px] relative rounded-3xl">
        <Image
          src={ImageCapa}
          alt="Imagem de capa Blog Unicos"
          fill
          className="object-cover object-center rounded-3xl"
        />
      </div>
      <div className="mt-6">
        <h1 className="title">Dicas e informações para conquistar seu sonho</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 my-8">
          {apiData.posts?.map((item, index) => {
            return (
              <Link
                href={`./blog/${item.slug}`}
                key={index}
                className="rounded-3xl"
              >
                <div className="relative h-[180px]">
                  <Image
                    src={item.featuredImage.node.sourceUrl}
                    alt={item.title}
                    fill
                    className="object-cover object-center rounded-t-3xl"
                  />
                </div>
                <div className="bg-blue2 rounded-b-3xl px-6 py-6">
                  <h3 className="font-bold text-base text-white p-0">
                    {item.title}
                  </h3>
                  <span className="italic text-xs text-white">
                    {formatDate(item.date)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostsApp;

export const getStaticProps: GetStaticProps = async () => {
  const response = await Posts.queryExecute();

  return {
    props: {
      apiData: response,
    },
    revalidate: 30,
  };
};
