import {Header,Hero,Features} from "./components/index"

function App() {


  return (
    <main className=' w-[375px] m-auto'>
      <section className='bg-gray-500 p-6 h-[420px] relative' >
         <Header />
         <img 
          className="relative z-10 mt-12"
          src="public/images/illustration-intro.png" 
          alt="intro"/>
         <img className='absolute bottom-0 left-0'
          src="public/images/bg-curvy-mobile.svg" 
          alt="curva"/>
      </section>

      <section className="bg-navy-900 p-6">
        <Hero/>
        <Features/>
      </section>
      
    </main>
  )
}

export default App
