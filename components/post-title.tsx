import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-army-green text-h3 font-sans tracking-wide my-4 leading-7">
      {children}
    </h1>
  )
}

export default PostTitle
