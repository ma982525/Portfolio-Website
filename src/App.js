import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Resume from './components/Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='mytheme-bg h-full'>
      <div className='h-screen'>
      <Header />
      <Hero />
      </div>
      <About />
      <div className='bg-[#040d21]'>
        <div className='max-w-7xl mx-auto'>

          <div className='flex justify-center items-center sm:items-start flex-col text-center sm:text-left pr-0 sm:pr-10'>
            <h1 className="mt-32 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl font-work bg-gradient-to-br from-[#9ef4d2] to-[#1a88e8]  bg-clip-text text-transparent">Want to know<br/>more about me?</h1>
            <div class="animate-bounce my-10 bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600 shadow-xl shadow-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>              
            </div>
          </div>

        </div>
        <Resume />
      </div>
    </div>
  );
}

export default App;
