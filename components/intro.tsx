import { NAME, TITLE } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col flex items-left md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-almost-black text-5xl md:text-7xl font-sans">
        { NAME }
      </h1>
      <h1 className="text-army-green text-5xl md:text-7xl font-sans">
        { TITLE }
      </h1>
    </section>
  )
}

export default Intro
