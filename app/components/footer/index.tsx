import Link from 'next/link'
import Logo from '../ui/logo'
import { FaLinkedin, FaFacebookF, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-blue-900 flex gap-5 md:flex-row flex-col text-white px-10 md:px-20 py-5 mt-32">
            <section className="flex-1 flex-col flex gap-5">
                <Logo />
                <p className="mt-3 text-gray-300 hover:text-white transition-all">
                    So, what do you think? Ready to take the next step in your journey and bring your ideas to life? Whether it&apos;s solving complex problems, creating innovative user experiences, or simply turning your passion into reality, the opportunity is right in front of you. If you&apos;re looking for someone who&apos;s driven, skilled, and ready to make an impact, let&apos;s connect and make things happen. Together, we can build something remarkable.
                </p>
                <form className='flex flex-col md:flex-row w-full gap-2 md:gap-0'>
                    <input className='bg-white p-3 md:w-[300px] outline-none text-black' type="text" placeholder='Email address' />
                    <button className="bg-blue-300 p-3">Submit</button>
                </form>
                <em className='text-gray-300 hover:text-white transition-all'>Victor.Adeshina@ All rights Reserved</em>
            </section>

            <section className="flex-1 flex-col md:flex-row flex md:justify-center gap-10">
                <div className='flex flex-col gap-3'>
                    <h4 className='font-bold text-lg'>Quick Links</h4>
                    <p className='hover:text-white transition-all text-gray-300'>Services</p>
                    <Link href="https://v-code.vercel.app" className='hover:text-white transition-all text-gray-300' target="_blank">Blog</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <h4 className='font-bold text-lg'>Contact</h4>
                    <p className='text-gray-300 hover:text-white transition-all'>pianistpro8@gmail.com</p>
                    <p className='text-gray-300 hover:text-white transition-all'>+234 91 354 098 22</p>
                </div>
                <div className='flex gap-4 text-xl'>
                    <Link href="https://ng.linkedin.com/in/adeshina-victor-a4019304" className='hover:text-blue-500 transition-all hover:scale-110 duration-500'><FaLinkedin /></Link>
                    <Link href="" className='hover:text-blue-500 transition-all hover:scale-110 duration-500'><FaFacebookF /></Link>
                    <Link href="" className='hover:text-blue-500 transition-all hover:scale-110 duration-500'><FaSquareInstagram /></Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer