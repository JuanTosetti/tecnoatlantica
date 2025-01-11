import React from 'react'
import Persona from "../../assets/persona.png" 
import Logo from "../../assets/logo2.png"

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr]'>

            {/* texto */}
        <div className='p-10'> 
            <img src={Logo} alt='Logo Tecnoatlantica'/>
            <p className='p-y-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit qui excepturi! Vel ipsam itaque voluptas sunt reprehenderit earum voluptatem soluta natus aliquam animi cum debitis, consequuntur, unde ea eveniet? </p>
            <div className='flex justify-content-center  gap-4'>
                <a href="wa.link" className='border border-red-900 rounded-[50px] my-10 px-3 py-2 hover:bg-red-900  hover:text-white duration-300'>
                    <i class="bi bi-chevron-compact-right"></i>
                     Contactate</a>
            </div>
        </div>

            {/* imagen */}
        <div>
            <img src={Persona} alt='Empleado de tecnoatlantica'className='hidden md:block max-w-full h-auto ' />
        </div>
      </div>
    </section>
  )
}

export default Hero
