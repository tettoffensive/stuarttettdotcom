import Link from 'next/link'
import { NAME, TITLE } from '../lib/constants'

const Header = () => {
  return (
    <div className="text-almost-black text-2xl md:text-4xl mb-20 mt-8">
    <h2>
      <Link href="/">
        <a>{NAME}</a>
      </Link>      
    </h2>
    <h2 className="text-army-green">{TITLE}</h2>
    </div>
  )
}

export default Header
