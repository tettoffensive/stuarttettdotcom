import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1
     className="whitespace-nowrap text-h3 font-sans tracking-wider mt-4 mb-1 leading-tight
      text-almost-black group-hover:text-army-green-light dark:text-gray-200 hover:text-army-green-light
      transition-colors duration-300">
      {children}
    </h1>
  )
}

export default PostTitle
