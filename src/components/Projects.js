import homeAutomation from '../Images/home-automation.png';
import kolor from '../Images/kolor.png';
import portis from '../Images/portis.png';
import portfolio from '../Images/portfolio.png';
import { PaperClipIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import {useInView} from 'react-intersection-observer';

export default function Projects() {

    const {ref: Project,inView: myProjectVisible} = useInView({ triggerOnce:true});
    const {ref: Project2,inView: myProject2Visible} = useInView({ triggerOnce:true});
    const {ref: Project3,inView: myProject3Visible} = useInView({ triggerOnce:true});    
    const {ref: Project4,inView: myProject4Visible} = useInView({ triggerOnce:true});

    return (<>

        <h2 className='pt-20 text-center font-work text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl text-white'>
            1.
        </h2>
        <div className=" container w-11/12 mx-auto h-fit mb-10">
            <div className='w-full flex justify-center items-center h-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full w-screen ">

                    <div className='flex justify-center sm:justify-center items-center text-center sm:text-left md:px-10 py-10 sm:py-0'>

                        <div className=" drop-shadow-5xl sm:w-max mr-auto sm:py-12 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between ">
                            <img src={homeAutomation} alt='Home Automation App' ref={Project} className={`${myProjectVisible?'animate-left-slide-in':''} rounded-2xl`} />
                        </div>


                    </div>
                    <div className='flex justify-center flex-col text-center sm:text-left md:pr-10'>

                        <div>
                            <div class="flex items-center space-x-2 text-base justify-center sm:justify-start">
                                <h4 class="font-semibold text-white">Technologies Used</h4>
                                <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">5</span>
                            </div>
                            <div class="mt-3 flex space-x-2 overflow-hidden justify-center sm:justify-start">
                                <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">ReactNative</span>
                                <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">FireBase</span>
                                <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white hidden sm:visible">FireStore</span>
                                <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">...</span>
                            </div>

                        </div>

                        <h1 className='mt-4 pb-5 font-work text-4xl tracking-tight font-extrabold md:text-5xl bg-gradient-to-r from-[#9ef4d2] to-[#1a88e8] bg-clip-text text-transparent'>Home Automation Application.</h1>

                        <div className="flex items-center justify-center sm:justify-start text-white">
                            <PaperClipIcon className="flex-shrink-0 h-5 w-5 mr-2 text-white" aria-hidden="true" />
                            <a href="https://drive.google.com/file/d/1fzQARO24e22_NFFideWVbLo_-kqVyM7Q/view?usp=sharing" className="font-medium text-white hover:text-blue-500">
                                Check Now
                            </a>
                            <span className='mx-4'>
                            |
                            </span>
                            <FontAwesomeIcon size='xl' icon={faGithub} className='text-white mr-2'/>
                            <a href="https://github.com/ma982525/ssip_app" className="font-medium text-white hover:text-blue-500">
                                Github
                            </a>
                        </div>

                        <hr className='md:mr-10 my-4' />
                        <h2 className='md:mr-10 text-base tracking-tight sm:text-xl md:text-2xl text-white text-justify font-semibold'>
                            A <span className='text-blue-400'>Home Automation</span> application created with <span className='text-blue-400'>React Native</span>, <span className='text-blue-400'>Firebase</span>, NodeRED, MQTT, etc. <span className='text-[#8ea0be]' >We can remotely <span className='text-blue-400'>turn ON/OFF</span> our appliances, also add timer on it. It show Power Consumption, Total on time, Price, etc. </span>
                        </h2>
                    </div>

                </div>
            </div>
        </div>
        
        <h2 className='text-center font-work text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl text-white'>
            2.
        </h2>

        <div className=" container w-11/12 mx-auto h-fit pb-10">
        <div className='w-full flex justify-center items-center h-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full w-screen ">

                <div className='flex justify-center sm:justify-center items-center text-center sm:text-left md:px-10 py-10 sm:py-0'>

                    <div className=" drop-shadow-5xl sm:w-max mr-auto sm:py-12 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between ">
                        <img src={kolor} alt='Kolor Pixer App' ref={Project2} className={`${myProject2Visible?'animate-left-slide-in':''} rounded-2xl`} />
                    </div>


                </div>
                <div className='flex justify-center flex-col text-center sm:text-left md:pr-10'>

                    <div>
                        <div class="flex items-center space-x-2 text-base justify-center sm:justify-start">
                            <h4 class="font-semibold text-white">Technologies Used</h4>
                            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">4</span>
                        </div>
                        <div class="mt-3 flex space-x-2 overflow-hidden justify-center sm:justify-start">
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">HTML</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">JS</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">Tiny Colors</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">...</span>
                        </div>

                    </div>

                    <h1 className='mt-4 pb-5 font-work text-4xl tracking-tight font-extrabold sm:text-5xl bg-gradient-to-r from-[#9ef4d2] to-[#1a88e8] bg-clip-text text-transparent'>Kolor Pixer Chrome Extension</h1>

                    <div className="flex items-center justify-center sm:justify-start text-white">
                            <PaperClipIcon className="flex-shrink-0 h-5 w-5 mr-2 text-white" aria-hidden="true" />
                            <a href="https://drive.google.com/file/d/1n-Xy1zFgZDQrv2aIjfRH6oEKsHyKRKeO/view?usp=drivesdk" className="font-medium text-white hover:text-blue-500">
                                Check Now
                            </a>
                            <span className='mx-4'>
                            |
                            </span>
                            <FontAwesomeIcon size='xl' icon={faGithub} className='text-white mr-2'/>
                            <a href="https://github.com/ma982525/Kolor-Pixer-Chrome-Extension-" className="font-medium text-white hover:text-blue-500">
                                Github
                            </a>
                        </div>

                    <hr className='md:mr-10 my-4' />
                    <h2 className='md:mr-10 text-base tracking-tight sm:text-xl md:text-2xl text-white text-justify font-semibold'>
                        A <span className='text-blue-400'>Kolor Pixer</span> is a color picker chrome extension built with <span className='text-blue-400'>HTML</span>, <span className='text-blue-400'>JS</span>, CSS, JSON, etc. <span className='text-[#8ea0be]' >We can use it to pick & get <span className='text-blue-400'>HEX code</span> of color at particular point where we click & also provides related shades to selected color. </span>
                    </h2>
                </div>

            </div>
        </div>
        </div>

        <h2 className='text-center font-work text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl text-white'>
            3.
        </h2>

        <div className=" container w-11/12 mx-auto h-fit pb-10">
        <div className='w-full flex justify-center items-center h-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full w-screen ">

                <div className='flex justify-center sm:justify-center items-center text-center sm:text-left md:px-10 py-10 sm:py-0'>

                    <div className=" drop-shadow-5xl sm:w-max mr-auto sm:py-12 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between ">
                        <img src={portis} alt='Portis App' ref={Project3} className={`${myProject3Visible?'animate-left-slide-in':''} rounded-2xl`} />
                    </div>


                </div>
                <div className='flex justify-center flex-col text-center sm:text-left md:pr-10'>

                    <div>
                        <div class="flex items-center space-x-2 text-base justify-center sm:justify-start">
                            <h4 class="font-semibold text-white">Technologies Used</h4>
                            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">4</span>
                        </div>
                        <div class="mt-3 flex space-x-2 overflow-hidden justify-center sm:justify-start">
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">ReactJs</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white hidden sm:visible ">Bootstrap</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">NodeJs</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">MySQL</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">...</span>
                        </div>

                    </div>

                    <h1 className='mt-4 pb-5 font-work text-4xl tracking-tight font-extrabold md:text-5xl bg-gradient-to-r from-[#9ef4d2] to-[#1a88e8] bg-clip-text text-transparent'>Portis ~ Digital<br/> Marketing portal</h1>

                    <div className="flex items-center justify-center sm:justify-start text-white">
                            <PaperClipIcon className="flex-shrink-0 h-5 w-5 mr-2 text-white" aria-hidden="true" />
                            <a href="https://portis-digital.000webhostapp.com/" className="font-medium text-white hover:text-blue-500">
                                Check Now
                            </a>
                            <span className='mx-4'>
                            |
                            </span>
                            <FontAwesomeIcon size='xl' icon={faGithub} className='text-white mr-2'/>
                            <a href="https://github.com/ma982525/Portis" className="font-medium text-white hover:text-blue-500">
                                Github
                            </a>
                        </div>

                    <hr className='md:mr-10 my-4' />
                    <h2 className='md:mr-10 text-base tracking-tight sm:text-xl md:text-2xl text-white text-justify font-semibold'>
                        A <span className='text-blue-400'>Portis Digital</span> is a digital service providing platform built with <span className='text-blue-400'>React JS</span>, <span className='text-blue-400'>BootStrap</span>, <span className='text-blue-400'>MySQL</span>, <span className='text-blue-400'>Node JS</span>, Lottie, etc. <span className='text-[#8ea0be]' >Built with a great UI/UX and motion illustration, Sending data filled by user to backend using <span className='text-blue-400'>Node JS</span> and <span className='text-blue-400'>MySQL database</span>. </span>
                    </h2>
                </div>

            </div>
        </div>
        </div>

        <h2 className='text-center font-work text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl text-white'>
            4.
        </h2>

        <div className=" container w-11/12 mx-auto h-fit pb-10">
        <div className='w-full flex justify-center items-center h-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full w-screen ">

                <div className='flex justify-center sm:justify-center items-center text-center sm:text-left md:px-10 py-10 sm:py-0'>

                    <div className=" drop-shadow-5xl sm:w-max mr-auto sm:py-12 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between ">
                        <img src={portfolio} alt='Portfolio' ref={Project4} className={`${myProject4Visible?'animate-left-slide-in':''} rounded-2xl`} />
                    </div>


                </div>
                <div className='flex justify-center flex-col text-center sm:text-left md:pr-10'>

                    <div>
                        <div class="flex items-center space-x-2 text-base justify-center sm:justify-start">
                            <h4 class="font-semibold text-white">Technologies Used</h4>
                            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">4</span>
                        </div>
                        <div class="mt-3 flex space-x-2 overflow-hidden justify-center sm:justify-start">
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">ReactJs</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white -sm-hidden sm:visible">TailwindCSS</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">JS</span>
                            <span class="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-base font-semibold text-white ">...</span>
                        </div>

                    </div>

                    <h1 className='mt-4 pb-5 font-work text-4xl tracking-tight font-extrabold md:text-5xl bg-gradient-to-r from-[#9ef4d2] to-[#1a88e8] bg-clip-text text-transparent'>My Personal<br/>Portfolio Website</h1>

                    <div className="flex items-center justify-center sm:justify-start text-white">
                            <PaperClipIcon className="flex-shrink-0 h-5 w-5 mr-2 text-white" aria-hidden="true" />
                            <a href="#" className="font-medium text-white hover:text-blue-500">
                                Check Now
                            </a>
                            <span className='mx-4'>
                            |
                            </span>
                            <FontAwesomeIcon size='xl' icon={faGithub} className='text-white mr-2'/>
                            <a href="https://github.com/ma982525/Portfolio-Website" className="font-medium text-white hover:text-blue-500">
                                Github
                            </a>
                        </div>

                    <hr className='md:mr-10 my-4' />
                    <h2 className='md:mr-10 text-base tracking-tight sm:text-xl md:text-2xl text-white text-justify font-semibold'>
                        My Personal <span className='text-blue-400'>Portfolio website</span> is a quick representation of my portfolio and work built with <span className='text-blue-400'>React JS</span>, <span className='text-blue-400'>TailwindCSS</span>, <span className='text-blue-400'>JS</span>, etc. <span className='text-[#8ea0be]' >It shows my profile data and a quick lookup of my projects. It provides my brief introduction and projects introduction and Technologies used in it. </span>
                    </h2>
                </div>

            </div>
        </div>
        </div>
    </>
    )
}