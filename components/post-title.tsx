import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1
     className="text-h3 font-sans tracking-wide my-4 leading-7
      text-army-green group-hover:text-army-green-light hover:text-army-green-light
      transition-colors duration-300">
      {children}
    </h1>
  )
}

export default PostTitle
