import ReactMarkdown from 'react-markdown'
import remarkHtml from 'remark-html'
import markdownStyles from './markdown-styles.module.css'
import Image from 'next/future/image'
import { placeholderBlur } from '../utils/placeholderBlur'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown
        className={markdownStyles['markdown']}
        remarkPlugins={remarkHtml}
        components={{
          img: ({ node, ...props }) => {
              const imageUrl = new URL(`https://${props.src}`)
              const queryParams = new URLSearchParams(imageUrl.search)
              const width = queryParams.get('w') ?? 800
              const height = queryParams.get('h') ?? 600

              return (
                <Image src={props.src} alt={props.alt} width={width} height={height}
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
