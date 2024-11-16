import { NavLink } from "react-router-dom"
const Navbar = () => {
    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Pets',
            path: '/pets'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        { 
            title: 'About',
            path:'/About'
        }
    ]
    return (
        <>
            <div className='w-screen h-14 shadow-green-500 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[50%] flex justify-start items-center font-bold text-2xl text-green-500'>
                    Pet Store
                </div>
                <div className='w-[30%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-green-500 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar