import Link from 'next/link'
import { NAME, TITLE } from '../lib/constants'

const Header = () => {
  return (
    <div className="text-almost-black dark:text-white text-2xl md:text-4xl mb-10 mt-8">
    <h2>
      <Link href="/">
        <a>{NAME}
        <h2 className="text-army-green dark:text-gray-200">{TITLE}</h2>
        </a>
      </Link>      
    </h2>
    </div>
  )
}

export default Header
