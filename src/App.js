import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import {useInView} from 'react-intersection-observer';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function App() {  
  
  const {ref: title,inView: myTitleVisible} = useInView({triggerOnce:true});
  const {ref: title2,inView: myTitle2Visible} = useInView({triggerOnce:true});
  const {ref: title3,inView: myTitle3Visible} = useInView({triggerOnce:true});

  return (
    <div className='mytheme-bg h-full'>
      <div className='h-screen'>
        <Header />
        <Hero />
      </div>
      <About />
      <div className='bg-[#040d21]' id='projects'>
        <div className='max-w-7xl mx-auto'>

          <div className='flex justify-center items-center sm:items-start flex-col text-center sm:text-left pr-0 sm:pr-10'>
            <h1 ref={title} className={`${myTitleVisible?'animate-fade-in-down':''} border-l-2 sm:border-slate-400  px-2 sm:pl-12 mt-32 text-5xl tracking-tight font-extrabold md:text-7xl font-work bg-gradient-to-r from-[#9ef4d2] to-[#1a88e8]  bg-clip-text text-transparent`}><span className='text-white'>Let's Checkout</span><br />some selected projects.</h1>
          </div>

        </div>
        <Projects />
      </div>

      <div className='bg-[#040d21]' id='experience'>
        <div className='max-w-7xl mx-auto'>

          <div className='flex justify-center items-center sm:items-start flex-col text-center sm:text-left pr-0 sm:pr-10'>
            <h1 ref={title2} className={`${myTitle2Visible?'animate-fade-in-down':''} border-l-2 sm:border-slate-400  px-2 sm:pl-12 mt-32 text-5xl tracking-tight font-extrabold md:text-7xl font-work bg-gradient-to-br from-[#ff7170] to-[#ffe57f]  bg-clip-text text-transparent`}><span className='text-white'>Let's see some</span><br />Industrial work I had done..</h1>
          </div>

        </div>
        <Experience />
      </div>


      
      

      <div className='bg-[#040d21]' id='resume'>
        <div className='max-w-7xl mx-auto'>

          <div className='flex justify-center items-center sm:items-start flex-col text-center sm:text-left pr-0 sm:pr-10 sm:pl-12'>
            <h1 ref={title3} className={`${myTitle3Visible?'animate-fade-in-down':''}  px-2 mt-32 text-5xl tracking-tight font-extrabold md:text-7xl font-work bg-gradient-to-r from-[#9ef4d2] to-[#1a88e8]  bg-clip-text text-transparent`}><span className='text-white'>Want to know</span><br />more about me?</h1>
          </div>

        </div>
        <Resume />
      </div>
      <div className='bg-[#01040a]' id='contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
