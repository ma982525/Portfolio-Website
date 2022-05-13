import { PaperClipIcon } from '@heroicons/react/solid'

export default function Resume() {
    return (
        <div className='container w-11/12 mx-auto py-16'>
            <div className="max-w-7xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg rounded-md">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Manish Parmar</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Education</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">B.Tech. in Information Technology</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><a href="mailto:m.p982525@gmail.com" className='hover:text-blue-700'>m.p982525@gmail.com</a></dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Skills</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Frontend, Backend, Fullstack development, UI/UX development, Web & App Development</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                This is Manish Parmar, final year student pursuing B.Tech in Information Technology. I had done my schoolings from Kendriya Vidhyalay, CBSE Board and after that joined Dharmsinh Desai University to pursue B.Tech Degree in Information Technology. I am a good programmer, developer and designer. I developed various websites and designed it. I love to create award winning websites & applications.
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Open For Roles</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                I am open for following positions :-<br/><br/>
                                <ul className='text-blue-700'>
                                    <li>~ SDE intern</li>
                                    <li>~ FullStack Developer</li>
                                    <li>~ Frontend Developer</li> 
                                    <li>~ Backend Developer</li>                                    
                                </ul>  
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span className="ml-2 flex-1 w-0 truncate">resume_manish_parmar.pdf</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="https://drive.google.com/file/d/1-kWtIlZiKJ4xDUcHhbVjiGKabVYSqwus/view?usp=sharing" className="font-medium bg-blue-700 px-6 py-2 rounded-md text-white hover:text-blue-700 hover:bg-white hover:border-2 hover:border-blue-700">
                                                View Now
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}