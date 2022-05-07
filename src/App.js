import './App.css';
import Header from './components/Header';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className='mytheme-bg h-screen'>
      <Header />
      <div className="max-w-7xl mx-auto h-5/6">
      <div className="grid grid-cols-2 gap-1 text-white h-full">
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
            <img src={logo} />
          </div>
        </div>
        <div className='flex justify-center flex-col'>
          <h2 className='text-l font-bold sm:text-xl md:text-3xl'>Hello!  I am </h2>
          <h1 className='text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl'>Manish Parmar 👋</h1>
          <h3>Right</h3>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
