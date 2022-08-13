import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <div className='max-w-[1000px] pl-6 lg:pl-0 text-white mt-24 pb-4 mx-auto'>
      <div className='flex md:justify-items-start'>
        <a
          href='https://www.facebook.com/'
          title='facebook'
          target='_blank'
          rel='noreferrer'>
          <ImFacebook className='w-6 h-6 mr-6' />
        </a>
        <a
          href='https://www.instagram.com/'
          title='instagram'
          target='_blank'
          rel='noreferrer'>
          <FaInstagram className='w-6 h-6 mr-6' />
        </a>
        <a
          href='https://twitter.com/'
          title='twitter'
          target='_blank'
          rel='noreferrer'>
          <FaTwitter className='w-6 h-6 mr-6' />
        </a>
        <a
          href='https://www.youtube.com/'
          title='youtube'
          target='_blank'
          rel='noreferrer'>
          <FaYoutube className='w-6 h-6 mr-6' />
        </a>
      </div>
      <div>
        <ul className='text-gray-400 mt-4 text-sm grid grid-rows-3 grid-cols-2 sm:grid-cols-4 gap-4 content-between '>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Audio description
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Help Center
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Gift Cards
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Media Center
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Investor Relations
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Jobs
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Terms of Use
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Privacy
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Legal Notices
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Cookie Preferences
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Impressum
            </span>
          </li>
          <li>
            <span className='cursor-pointer hover:border-b border-gray-500'>
              Contact Us
            </span>
          </li>
        </ul>
      </div>
      <div className='mt-8'>
        <button className='border border-gray-400 p-1 text-gray-400 hover:text-white'>
          Service Code
        </button>
      </div>
      <div>
        <p className='text-gray-400 mt-4'>
          <small>© 2022, made by Jan-Niklas Reinhardt </small>
          || API from
          <a
            href='https://www.themoviedb.org/'
            title='themoviedb'
            target='_blank'
            rel='noreferrer'>
            <img
              className='h-5 w-25 inline ml-2 mb-1'
              src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
              alt='themoviedb logo'
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
