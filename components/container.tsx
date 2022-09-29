type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto px-[8vw]">{children}</div>
}

export default Container
