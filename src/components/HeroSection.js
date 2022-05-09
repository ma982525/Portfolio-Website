import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto h-5/6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-white h-full ">
        <div className="grid grid-cols-6 gap-1 text-white">
          <div className='col-span-1 flex justify-center items-end'>
            <div className='grid grid-rows-4 mb-16 pb-9 border-white border-b-2 text-cyan-300'>
              <div className='my-4'>
                <FontAwesomeIcon size='xl' icon={faGithub} />
              </div>
              <div className='my-4'>
                <FontAwesomeIcon size='xl' icon={faLinkedin} />
              </div>
              <div className='my-4'>
                <FontAwesomeIcon size='xl' icon={faGithub} />
              </div>
              <div className='my-4'>
                <FontAwesomeIcon size='xl' icon={faLinkedin} />
              </div>
            </div>
          </div>
          <div className='col-span-5 flex justify-center items-center'>
            <img src={logo} alt='logo'/>
          </div>
        </div>
        <div className='flex justify-center flex-col text-center sm:text-left'>
          <h2 className='text-l font-bold sm:text-xl md:text-3xl text-[#bbcdeb]'>Hello!  I am </h2>
          <h1 className='mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl'>Manish Parmar 👋</h1>
          <h2 className='mt-4 text-4xl tracking-tight sm:text-5xl md:text-4xl'>
            I am a{' '}
            <Typical className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'
              steps={[
                'FullStack Developer', 4000,
                'Great Designer', 4000,
                'Problem Solver',4000,
                'Tech Enthusiast',4000
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
        </div>
      </div>
      </div>
  )
}