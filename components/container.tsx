import { ReactNode } from 'react';

type Props = {
  children?: ReactNode
}

function Container({ children }: Props) {
  return <div className="mx-auto px-[8vw]">{children}</div>;
}

export default Container;
