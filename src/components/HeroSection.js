import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import hero from '../Images/hero.png'
import codechef from '../Images/codechef.png'
import hackerrank from '../Images/hackerrank-logo.jpg'
import leetcode from '../Images/leetcode.png'
import TypeAnimation from 'react-type-animation';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto h-5/6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-white h-full ">
        <div className="grid grid-cols-6 gap-1 text-white">
          <div className='col-span-1 flex justify-center items-end'>
            <div className='grid grid-rows-4 mb-16 pb-9 border-white border-b-2 text-[#00E3BF] '>
              <div className='my-4 mx-auto'>
                <a href='https://www.codechef.com/users/mp982525' target='blank'>
                  <img src={codechef} alt="" className='w-8 hover:scale-150 transition-all '/>
                </a>
              </div>
              <div className='my-4 mx-auto'>
                <a href='https://leetcode.com/developer_manish/' target='blank' >
                  <img src={leetcode} alt="" className='w-8 hover:scale-150 transition-all'/>
                </a>
              </div>
              <div className='my-4 mx-auto'>
                <a href='https://leetcode.com/developer_manish/' target='blank' >
                  <img src={hackerrank} alt="" className='w-8 hover:scale-150 transition-all'/>
                </a>
              </div>
              <div className='my-4 mx-auto'>
                <a href='https://github.com/ma982525' target='blank' >
                  <FontAwesomeIcon size='xl' icon={faGithub} className="hover:scale-150 transition-all"/>
                </a>
              </div>
              <div className='my-4 mx-auto'>
                <a href='https://www.linkedin.com/in/manish-parmar-codekings' target='blank' >
                  <FontAwesomeIcon size='xl' icon={faLinkedin} className="hover:scale-150 transition-all"/>
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-5 flex justify-center items-center pr-20 pl-5 '>
            <img src={hero} alt='logo'/>
          </div>
        </div>
        <div className='flex justify-center flex-col text-center md:text-left'>
          <h2 className='text-l font-bold sm:text-xl md:text-3xl text-[#bbcdeb]'>Hello!  I am </h2>
          <h1 className='mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl'>Manish Parmar 👋</h1>
          <h2 className='hidden sm:block sm:block mt-4 text-4xl tracking-tight sm:text-5xl md:text-4xl'>
            I am a{' '}
            <TypeAnimation className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent px-10 sm:px-0'
              cursor={true}
              sequence={[
                'FullStack Developer', 4000,
                'Great Designer', 4000,
                'Problem Solver',4000,
                'Tech Enthusiast',4000
              ]}
              wrapper="span"
              repeat="infinity"
            />
          </h2>
          <h2 className='block sm:hidden mt-4 text-4xl tracking-tight sm:text-5xl md:text-4xl text-center'>
            I am a
            <TypeAnimation className='font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent px-10 sm:px-0'
              cursor={true}
              sequence={[
                'FullStack Developer', 4000,
                'Great Designer', 4000,
                'Problem Solver',4000,
                'Tech Enthusiast',4000
              ]}
              wrapper="p"
              repeat="infinity"
            />
          </h2>
        </div>
      </div>
      </div>
  )
}