import Image from 'next/future/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkHtml from 'remark-html';
import remarkImages from 'remark-images';
import remarkSectionize from 'remark-sectionize';
import placeholderBlur from '../utils/placeholder-blur';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string
  imagesOnly?: boolean
}

function PostBody({ content, imagesOnly = false }: Props) {
  return (
    <div className="mx-auto max-w-3xl">
      <ReactMarkdown
        className={markdownStyles[imagesOnly ? 'markdownImages' : 'markdown']}
        components={{
          // eslint-disable-next-line react/no-unstable-nested-components
          p: (paragraph) => {
            const { node } = paragraph;

            // children is an array of ElementContent which could be an Element
            if ((node.children[0] as import('hast').Element).tagName === 'img') {
              const image = node.children[0] as import('hast').Element;
              const { src, alt } = image.properties;

              const imageUrl = new URL(`https://${src}`);
              const queryParams = new URLSearchParams(imageUrl.search);
              const width = queryParams.get('w') ?? 800;
              const height = queryParams.get('h') ?? 600;
              const span = queryParams.get('span') === 'all' ? 'col-span-all' : '';

              return (
                <Image
                  alt={`${alt}`}
                  blurDataURL={placeholderBlur(235, 235, 228)}
                  className={`max-w-[${width}px] ${span}`}
                  height={height}
                  placeholder="blur"
                  src={`${src}`}
                  width={width}
                />
              );
            }
            return <p>{paragraph.children}</p>;
          },
        }}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkHtml, remarkImages, remarkSectionize]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default PostBody;
