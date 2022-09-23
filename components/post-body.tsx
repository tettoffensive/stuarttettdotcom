import Image from 'next/future/image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkHtml from 'remark-html'
import remarkImages from 'remark-images'
import remarkSectionize from 'remark-sectionize'
import { placeholderBlur } from '../utils/placeholderBlur'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  slug: string;
  content: string
  imagesOnly?: boolean
}

const PostBody = ({ slug, content, imagesOnly = false }: Props) => {
  return (
    <div className="mx-auto max-w-3xl">
      <ReactMarkdown
        className={markdownStyles[imagesOnly ? 'markdownImages' : 'markdown']}
        remarkPlugins={[remarkHtml,remarkImages,remarkSectionize]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: paragraph => {
            const { node } = paragraph
            
            // children is an array of ElementContent which could be an Element
            if ((node.children[0] as import('hast').Element).tagName === 'img') {
              const image = node.children[0] as import('hast').Element
              const props = image.properties;

              const imageUrl = new URL(`https://${props.src}`)
              const queryParams = new URLSearchParams(imageUrl.search)
              const width = queryParams.get('w') ?? 800
              const height = queryParams.get('h') ?? 600
              const span = queryParams.get('span') === 'all' ? 'col-span-all' : '';

              return (
                <Image className={`max-w-[${width}px] ${span}`} 
                  src={`${props.src}`}
                  alt={`${props.alt}`}
                  width={width} 
                  height={height}
                  placeholder="blur"
                  blurDataURL={placeholderBlur(235, 235, 228)}
                />
              )
            }
            return <p>{paragraph.children}</p>
          }}}>
          {content}
      </ReactMarkdown>
    </div>
  )
}

export default PostBody
