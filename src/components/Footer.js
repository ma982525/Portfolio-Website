import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { MailIcon } from '@heroicons/react/solid';

export default function Footer() {
    return (<>

        <div className="container w-11/12 mx-auto h-fit pb-5">
            <div className='w-full flex justify-center items-center h-full'>
                

                    <div className='flex justify-center flex-col text-center sm:text-left sm:pr-10'>

                        <h1 className='mt-4 pb-5 text-xl tracking-tight font-bold md:text-2xl bg-gradient-to-r from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent'>Copyright © 2022 | Manish Parmar</h1>

                        <div className="flex items-center justify-center text-white">
                            
                            <a href="#" className="font-medium text-white ">
                                <FontAwesomeIcon size='xl' icon={faGithub} className='text-white mr-2 hover:text-blue-500'/>
                            </a>                            
                            <span className='mx-4'>
                            |
                            </span>                            
                            <a href="#" className="font-medium text-white hover:text-blue-500">
                                <FontAwesomeIcon size='xl' icon={faLinkedin} className='text-white mr-2 hover:text-blue-500'/>
                            </a>
                            <span className='mx-4'>
                            |
                            </span>                            
                            <a href="#" className="font-medium text-white hover:text-blue-500">
                                <FontAwesomeIcon size='xl' icon={faTwitter} className='text-white mr-2 hover:text-blue-500'/>
                            </a>
                            <span className='mx-4'>
                            |
                            </span>                            
                            <a href="#" className="font-medium">
                                <MailIcon className="h-7 w-7 text-white hover:text-blue-500" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                
            </div>
        </div>

    </>
    )
}