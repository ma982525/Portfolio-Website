import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';
import aboutpic from '../about.JPG';
import manishProfile from '../manish_profile.jpg';

export default function About() {
    return (
        <div className=" container w-11/12 mx-auto h-fit py-20 sm:py-0 sm:h-screen bg-white rounded-xl">
            <div className='max-w-7xl  mx-10 sm:mx-20 flex justify-center items-center h-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full ">

                <div className='flex justify-center flex-col text-center sm:text-left sm:pr-10'>
                    
                    <div>
                        <div class="flex items-center space-x-2 text-base justify-center sm:justify-start">
                            <h4 class="font-semibold text-slate-900">Contributions</h4>
                            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
                        </div>
                        <div class="mt-3 flex -space-x-12 overflow-hidden justify-center sm:justify-start">
                            <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white z-10" src={manishProfile} alt=""/>
                            <img class="inline-block h-22 w-20 rounded-full ring-2 ring-white blur-[1px]" src={manishProfile} alt=""/>
                        </div>
                        <div class="mt-3 text-sm font-medium">
                            <a href="https://www.linkedin.com/in/manish-parmar-codekings" class="text-blue-500">+ Check Profile</a>
                        </div>
                    </div>

                    <h1 className='mt-2 font-work text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl bg-gradient-to-r from-[#db469f] to-[#2188ff] bg-clip-text text-transparent'>About Me.</h1>
                    <hr />
                    <h2 className='mt-4 text-sm tracking-tight sm:text-xl md:text-2xl text-justify font-semibold'>
                        A <span className='text-blue-700'>Developer</span> with a keen eye in Designing. <span  className='text-[#627597]' >Experienced in development with great <span className='text-blue-700'>UI designs</span>. Always ready to learn new things.</span>
                    </h2>
                </div>

                <div className='flex justify-start sm:justify-center items-start flex-col text-center sm:text-left sm:px-10 py-10 sm:py-0'>

                        <div className="drop-shadow-5xl max-w-7xl w-screen sm:w-max mx-auto sm:py-12 sm:px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between lg:flex-col">
                            <img src={aboutpic} alt='about image' className='rounded-2xl mb-[-40%] -ml-2 sm:-ml-40 opacity-40 blur-[1px] w-2/3 '/>
                            <img src={aboutpic} alt='about image' className='rounded-2xl sm:ml-5  ml-6 sm:ml-0 z-10 w-2/3'/>
                        </div>
                    

                </div>

            </div>
            </div>
        </div>
    )
}