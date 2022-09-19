import ReactMarkdown from 'react-markdown'
import remarkHtml from 'remark-html'
import markdownStyles from './markdown-styles.module.css'
import Image from 'next/future/image'
import { placeholderBlur } from '../utils/placeholderBlur'
import remarkImages from 'remark-images'
import rehypeRaw from 'rehype-raw';

type Props = {
  slug: string;
  content: string
  imagesOnly?: boolean
}

const PostBody = ({ slug, content, imagesOnly = false }: Props) => {
  return (
    <div className="mx-auto">
      <ReactMarkdown
        className={markdownStyles[imagesOnly ? 'markdownImages' : 'markdown']}
        remarkPlugins={[remarkHtml,remarkImages]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ node, ...props }) => {
              const imageUrl = new URL(`https://${props.src}`)
              const queryParams = new URLSearchParams(imageUrl.search)
              const width = queryParams.get('w') ?? 800
              const height = queryParams.get('h') ?? 600

              return (
                <Image className={`max-w-[${width}px]`} src={props.src} alt={props.alt} width={width} height={height}
                  placeholder="blur"
                  blurDataURL={placeholderBlur(235, 235, 228)}
                />
              )
          }}}>
          {content}
      </ReactMarkdown>
    </div>
  )
}

export default PostBody
