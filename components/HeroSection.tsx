import Image from 'next/image'
import heroImage from '@/public/hero.png'

function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container flex flex-col items-center px-5 py-20 mx-auto md:flex-row">
          <div className="relative w-5/6 mb-10 h-[450px] lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <Image className="object-cover" src={heroImage} alt="hero" fill />
          </div>
          <div className="flex flex-col items-center justify-start text-center lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 md:items-start md:text-left">
            <h1 className="mb-4 text-4xl font-medium text-secondary1 font-poppins md:text-6xl">
              Bring the <span className="text-hover">Store</span>
              <br className="hidden lg:inline-block" />
              to your <span className=" text-hover"> Door</span>
            </h1>
            <p className="mb-8 font-semibold leading-relaxed font-poppins">
              Best Groceries app ever Pick your desired groceries from the menu.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg font-semibold text-white border-0 rounded-full bg-secondary1 focus:outline-none hover:bg-yellow-500 hover:text-secondary1">
                How to Order
              </button>
              <button className="inline-flex px-6 py-2 text-lg font-semibold text-white border-0 rounded-full bg-secondary1 focus:outline-none hover:bg-yellow-500 hover:text-secondary1">
                Categories
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
