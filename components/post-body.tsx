import ReactMarkdown from 'react-markdown'
import remarkHtml from 'remark-html'
import markdownStyles from './markdown-styles.module.css'
import Image from 'next/image'

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
            const imageUrl = new URL(`https://${props.src}`);
            const queryParams = new URLSearchParams(imageUrl.search)
            const width = queryParams.get('width');
            const height = queryParams.get('height');

            return (
              <Image
                  src={props.src}
                  alt={props.alt}
                  layout="fill"
              />
            )
        }
    }}
>
    {content}
</ReactMarkdown>
    </div>
  )
}

export default PostBody
