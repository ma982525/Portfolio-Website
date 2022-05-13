import {useInView} from 'react-intersection-observer';

export default function Experience() {

    const {ref: Experience,inView: myExperienceVisible} = useInView({ triggerOnce:true});
    const {ref: Experience2,inView: myExperience2Visible} = useInView({ triggerOnce:true});
    const {ref: Experience3,inView: myExperience3Visible} = useInView({ triggerOnce:true});    
    const {ref: Experience4,inView: myExperience4Visible} = useInView({ triggerOnce:true});

    return (<>

        <div className=" container w-11/12 mx-auto h-fit pb-10">
            <div className='w-full flex justify-center items-center h-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full w-screen ">

                    <div className={`flex flex-col justify-center sm:justify-center sm:text-left sm:px-10 py-10 sm:py-0`}>

                        <h2 className='pt-0 sm:pt-20 pb-2 sm:pb-0 text-left font-work text-7xl tracking-tight font-extrabold text-white'>
                            1<span className='bg-gradient-to-br from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent'>.</span>
                        </h2>
                        <div ref={Experience} className={`${myExperienceVisible?'animate-fade-in-down':''} max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white mx-auto`}>
                            <div className="px-6 py-4">
                                <div className="font-bold text-2xl bg-gradient-to-r from-[#db469f] to-[#2188ff]  bg-clip-text text-transparent">Developer Trainee</div>
                                <div className="font-semibold text-md text-[#7e8fae]">CareerKites</div>
                                <div className="text-sm font-semibold text-[#7e8fae]">Feb. 2021 to Feb. 2022</div>
                                <hr className='my-3 border-gray-300'/>
                                <p className="text-blue-700 text-base">
                                    ~ Developed & Designed Various Websites.    
                                </p>
                                <p className="text-blue-700 text-base">
                                    ~ Leading Team and dealing with clients for requirements.    
                                </p>
                                <p className="text-blue-700 text-base">
                                    ~ Worked on cPanel, hPanel, Certificate Generation, Payment Integration, etc.    
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Hostinger</span>
                                <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">cPanel</span>
                                <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">php</span>
                                <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Payment Integration</span>
                            </div>
                        </div>

                    </div>
                    <div className={` flex flex-col justify-center sm:justify-center sm:text-left sm:px-10 py-10 sm:py-0`}>

                        <h2 className='pt-0 sm:pt-20 pb-2 sm:pb-0 text-left font-work text-7xl tracking-tight font-extrabold text-white'>
                            2<span className='bg-gradient-to-br from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent'>.</span>
                        </h2>
                        <div ref={Experience2} class={`${myExperience2Visible?'animate-fade-in-down':''} max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white mx-auto`}>
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl bg-gradient-to-r from-[#db469f] to-[#2188ff]  bg-clip-text text-transparent">CodeChef Chapter Lead</div>
                                <div class="font-semibold text-md text-[#7e8fae]">CodeChef DDU</div>
                                <div class="text-sm font-semibold text-[#7e8fae]">Aug. 2020 to Present</div>
                                <hr className='my-3 border-gray-300'/>
                                <p class="text-blue-700 text-base">
                                    ~ Arranged various technical & non-technical webinars & sessions.    
                                </p>
                                <p class="text-blue-700 text-base">
                                    ~ Arranged Coding contests.    
                                </p>
                                <p class="text-blue-700 text-base">
                                    ~ Working on reach & chapter accounts.    
                                </p>
                                <p class="text-blue-700 text-base">
                                    ~ Took technical session on DataStructures.    
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">coding</span>
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">contest</span>
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">webinars</span>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>

        <div className=" container w-11/12 mx-auto h-fit pb-10">
            <div className='w-full flex justify-center items-center h-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full w-screen ">

                    <div className={`flex flex-col justify-center sm:justify-center sm:text-left sm:px-10 py-10 sm:py-0`}>

                        <h2 className='pt-0 sm:pt-20 pb-2 sm:pb-0 text-left font-work text-7xl tracking-tight font-extrabold text-white'>
                            3<span className='bg-gradient-to-br from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent'>.</span>
                        </h2>
                        <div ref={Experience3} class={`${myExperience3Visible?'animate-fade-in-down':''} max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white mx-auto`}>
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl bg-gradient-to-r from-[#db469f] to-[#2188ff]  bg-clip-text text-transparent">Graphics Designer</div>
                                <div class="font-semibold text-md text-[#7e8fae]">TedX Prahladnagar</div>
                                <div class="text-sm font-semibold text-[#7e8fae]">June 2021 to Dec. 2021</div>
                                <hr className='my-3 border-gray-300'/>
                                <p class="text-blue-700 text-base">
                                    ~ Designed multiple Ted events graphics.    
                                </p>
                                <p class="text-blue-700 text-base">
                                    ~ Briefed on website development.    
                                </p>
                                <p class="text-blue-700 text-base">
                                    ~ Worked on tasks & analytics things.    
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Figma</span>
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">UI Design</span>
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Graphics Design</span>
                            </div>
                        </div>

                    </div>
                    <div  className={` flex flex-col justify-center sm:justify-center sm:text-left sm:px-10 py-10 sm:py-0`}>

                        <h2 className='pt-0 sm:pt-20 pb-2 sm:pb-0 text-left font-work text-7xl tracking-tight font-extrabold text-white'>
                            4<span className='bg-gradient-to-br from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent'>.</span>
                        </h2>
                        <div ref={Experience4} class={`${myExperience4Visible?'animate-fade-in-down':''} max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white mx-auto`}>
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl bg-gradient-to-r from-[#db469f] to-[#2188ff]  bg-clip-text text-transparent">Senior Developer</div>
                                <div class="font-semibold text-md text-[#7e8fae]">DDU Connect</div>
                                <div class="text-sm font-semibold text-[#7e8fae]">Mar. 2021 to Present</div>
                                <hr className='my-3 border-gray-300'/>
                                <p class="text-blue-700 text-base">
                                    ~ This is our College Club.    
                                </p>
                                <p class="text-blue-700 text-base">
                                    ~ Worked on mobile app & website development.    
                                </p>
                                <p class="text-blue-700 text-base">
                                    ~ Worked on React Native, Figma, etc.    
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ReactNative</span>
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML</span>
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS</span>
                                <span class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">UI</span>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>

        
    </>
    )
}