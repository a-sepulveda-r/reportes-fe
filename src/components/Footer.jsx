import { MapIcon, WhatsappIcon, YoutubeIcon } from './svgComponents';

export const Footer = () => {
  return (
    <footer className='bg-gray-600 '>
      <div className='mx-auto w-full max-w-screen-xl'>
        <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
          <div>
            <img
              src='https://www.transportesnazar.cl/img/icons/Logo-Nazar-Wht.svg'
              className='h-32 w-32 me-3'
              alt='FlowBite Logo'
            />
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Contactanos
            </h2>
            <ul className=' dark:text-gray-400  text-xs'>
              <li className='mb-4 flex gap-3'>
                <MapIcon />
                <a
                  href='#'
                  className='hover:underline'
                >
                  Lo Sierra 02302, San Bernardo - Santiago
                </a>
              </li>
              <li className='mb-4 flex gap-3'>
                <WhatsappIcon />
                <a
                  href='#'
                  className='hover:underline'
                >
                  WhatsApp
                </a>
              </li>
              <li className='mb-4 flex gap-3'>
                <MapIcon />
                <a
                  href='#'
                  className='hover:underline'
                >
                  comunicaciones@nazar.cl
                </a>
              </li>
              <li className='mb-4 flex gap-3'>
                <YoutubeIcon />
                <a
                  href='#'
                  className='hover:underline'
                >
                  Nuestro Canal de YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Menú
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium text-xs'>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'
                >
                  Home
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'
                >
                  Quienes Somos
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'
                >
                  Nuestros Servicios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Nuestros Servicios
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium text-xs'>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'
                >
                  Transporte{' '}
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'
                >
                  Transporte de carga seca
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'
                >
                  Transporte para Minería
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'
                >
                  Transporte para Combustibles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
