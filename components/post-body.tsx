import Image from 'next/image';
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
          p: (paragraph) => {
            const { node } = paragraph;

            // children is an array of ElementContent which could be an Element
            if ((node.children[0] as import('hast').Element).tagName === 'img') {
              const image = node.children[0] as import('hast').Element;
              const { src, alt } = image.properties;

              const imageUrl = new URL(`https://${src}`);
              const queryParams = new URLSearchParams(imageUrl.search);
              const width = Number(queryParams.get('w')) || 800;
              const height = Number(queryParams.get('h')) || 600;
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
          // `rehype-raw` lets Vimeo embed markup through unchanged, including
          // its `<script src="https://player.vimeo.com/api/player.js">`
          // tag. React errors on rendering <script> into the tree because
          // client-side scripts in JSX never execute, so the tag would be
          // dead weight anyway. The iframe itself plays videos without the
          // Vimeo.Player API, which this site doesn't use. Dropping the
          // component also removes the duplicate script on the second
          // embed — both Vimeo snippets in `effects.md` load the same URL.
          script: () => null,
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
