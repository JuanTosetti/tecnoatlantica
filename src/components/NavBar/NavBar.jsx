import React,{useState} from 'react'
import Logo from '../../assets/Logo.png'



const navbarlinks = [
    {
        id:1,
        title: "inicio",
        link: "/"
    },
    {
        id:2,
        title:"Nosotros",
        link: "#"
    },
    {
        id:3,
        title:"Contacto",
        link: "#"
    },
    {
        id:4,
        title:"Soporte",
        link: "#"
    },
]

const navbarRedes = [
    {
        id:1,
        tittle:"ubicacion",
        link:"https://www.maps.com",
        icon:"bi bi-geo-alt-fill"
    },
    {
        id:2,
        tittle:"facebook",
        link:"https://www.facebook.com",
        icon:"bi bi-facebook"
    },
    {
        id:3,
        tittle:"Whatsapp",
        link:"https://wa.link",
        icon:"bi bi-whatsapp"
    },
];
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () =>{
        setIsOpen(!isOpen);
    };

  return (
    <nav className='fixed top-0 left-0 bg-gray-900 w-full bg-opacity-30 backdrop-blur-md z-index-50'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'> 

        <div>
            <img src={Logo} alt='Logo de Tecnoatlanctica' className='w-[100px]' />
        </div>
        {/* Boton de hamburguesa */}
        <button 
        onClick={toogleMenu}
        className='text-white md:hidden'>
            <svg 
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
                    {isOpen ? <path 
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    /> :
                    <path 
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    }
                   
                    
                    
                    
            </svg>
        </button>


        {/* Navegacion Desktop */}
        <div className='hidden md:block'>
            <ul className ='flex sm:space-x-8 space-x-4'>
                {navbarlinks.map((link)=>(
                    <li key={link.id}>
                        <a 
                        className='text-white sm:text-lg text-sm hover:text-red-600 transition-transform hover:scale-110 transform inline-block duration-300'
                        href={link.link}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Redes Desktop*/}
        <div className='hidden md:block'>
            <ul className ='flex space-x-4'>
                {navbarRedes.map((link)=>(
                    <li key={link.id}>
                        <a 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white sm:text-lg text-sm hover:text-red-600 transition-transform hover:scale-125 transform inline-block duration-300'
                        href={link.link}>
                            <i className={link.icon}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

      </div>
        {/* Menu mobile */}
        
      <div className={` md:hidden absolute w-full bg-red-800 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ul className ='flex flex-col px-4 py-2'>
                {navbarlinks.map((link)=>(
                    <li 
                    className='py-2 text-center'
                    key={link.id}>
                        <a 
                        className='text-white hover:text-red-300'
                        href={link.link} onClick={()=>setIsOpen(false)}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
            <ul className ='flex space-x-4 px-4 py-2 border-t border-red-900 justify-center'>
                {navbarRedes.map((link)=>(
                    <li key={link.id}>
                        <a 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block'
                        href={link.link} onClick={()=>setIsOpen(false)}>
                            <i 
                            className={`${link.icon} text-lg text-white hover:text-red-300`}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        
            

    </nav>
  )
}

export default NavBar
