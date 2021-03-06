import React from 'react';
import aboutpic from '../Images/about.JPG';
import manishProfile from '../Images/manish_profile.jpg';
import {useInView} from 'react-intersection-observer';

export default function About() {

    const {ref: title,inView: myTitleVisible} = useInView({triggerOnce:true});
    const {ref: content,inView: myContentVisible} = useInView({triggerOnce:true});
    const {ref: imgs,inView: myImgsVisible} = useInView({triggerOnce:true});

    // let title=useRef(null);
    // let [myTitleVisible,setMyTitleVisible]=useState();
    // useEffect(()=>{
    //     const observer = new IntersectionObserver((entries)=>{
    //         const entry = entries[0];
    //         setMyTitleVisible(entry.isIntersecting)
    //     })
    //     observer.observe(title.current);
    // }, []);

    return (
        <div id='about' className=" container w-11/12 mx-auto h-fit py-20 md:py-0 md:h-screen bg-white rounded-xl ">
            <div className='max-w-7xl  mx-10 md:mx-20 flex justify-center items-center h-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full ">

                <div className='flex justify-center flex-col text-center md:text-left md:pr-10 '>
                    
                    <div>
                        <div class="flex items-center space-x-2 text-base justify-center md:justify-start">
                            <h4 class="font-semibold text-slate-900">Lines of Code</h4>
                            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">10K +</span>
                        </div>
                        <div class="mt-3 flex -space-x-12 overflow-hidden justify-center md:justify-start">
                            <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white z-10" src={manishProfile} alt=""/>
                            <img class="inline-block h-22 w-20 rounded-full ring-2 ring-white blur-[1px]" src={manishProfile} alt=""/>
                        </div>
                        <div class="mt-3 text-md font-medium">
                            <a href="https://www.linkedin.com/in/manish-parmar-codekings" class="text-blue-500">+ Check Profile</a>
                        </div>
                    </div>

                    <h1 className={`${myTitleVisible?'animate-fade-in-down':''} mt-2 font-work text-4xl tracking-tight font-extrabold md:text-5xl md:text-7xl bg-gradient-to-r from-[#db469f] to-[#2188ff] bg-clip-text text-transparent`} ref={title}>About Me.</h1>
                    <hr />
                    <h2 className={`${myContentVisible?'animate-fade-in-down':''} mt-4 text-base tracking-tight md:text-xl md:text-2xl text-justify font-semibold`} ref={content}>
                        A <span className='text-blue-700'>Developer</span> with a keen eye in Designing. <span  className='text-[#627597]' >Experienced in development with great <span className='text-blue-700'>UI designs</span>. Always ready to learn new things.</span>
                    </h2>
                </div>

                <div className='flex justify-start md:justify-center items-start flex-col text-center md:text-left md:px-10 py-10 md:py-0'>

                        <div className={`drop-shadow-5xl max-w-7xl w-fit mx-auto md:py-12 md:px-4 md:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between lg:flex-col`}>
                            <img src={aboutpic} alt='about image' className={`rounded-2xl mb-[-40%] -ml-2 md:-ml-40 opacity-40 blur-[1px] w-10/11 `}/>
                            <img src={aboutpic} alt='about image' className={`${myImgsVisible?'animate-fade-in-down':''} rounded-2xl md:ml-5  ml-6 md:ml-0 z-10 w-10/11 `}  ref={imgs}/>
                        </div>
                    

                </div>

            </div>
            </div>
        </div>
    )
}