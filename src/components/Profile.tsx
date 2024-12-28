import { MapPin, Linkedin } from "lucide-react";

export default function Profile() {
  return (
    <section id='profile' className='px-4 pt-24 pb-16 bg-ceramic-100'>
      <div className='bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200'>
        <div className='max-w-none flex flex-col md:flex-row items-center gap-8'>
          <div className='w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex-shrink-0'>
            <img
              src='/DylanHeadshot.png'
              alt='Dylan Brown Headshot'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex-1 text-center md:text-left'>
            <div className='flex items-center justify-center md:justify-start gap-4 mb-2'>
              <h2 className='text-4xl font-bold text-gray-800'>Dylan Brown</h2>
              <a
                href='https://www.linkedin.com/in/dylan-brown-63a670135'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-600 transition-colors'
                aria-label='LinkedIn Profile'
              >
                <Linkedin size={32} />
              </a>
            </div>
            <h3 className='text-xl text-accent-600 mb-2'>
              Software Development Manager
            </h3>
            <div className='flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-6'>
              <MapPin size={20} />
              <span>Austin, TX</span>
            </div>
            <p className='text-gray-600 leading-relaxed'>
              Results-driven software manager with over 6 years of experience
              leading high-performing engineering teams and delivering
              large-scale, full-stack software solutions across diverse
              industries. Leveraging a strong technical foundation in software
              development and a Computer Science degree, I combine hands-on
              coding expertise with proven leadership capabilities. Known for
              driving team excellence through effective communication, strategic
              planning, and robust evaluation frameworks, I excel in aligning
              engineering initiatives with business goals to deliver measurable
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
