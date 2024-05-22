import { HERO } from '@/constants';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <div className='hero flex min-h-screen justify-center items-center'>
      <div className='flex flex-col max-w-4xl items-center gap-6 pb-10'>
        <div className='space-y-4'>
          <h1 className='text-white text-4xl text-center m-4 lg:text-6xl md:text-5xl'>
            {HERO.title}
          </h1>
          <p className='p-4 text-center text-slate-300'>{HERO.description}</p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
