import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
  <div className = 'grid grid-cols-12 gap-6 my-6 lg:px-32 px-5 items-center bg-red-200 '>
      <div className='lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center'>
        <Sidebar/>
      </div>
      <div className='lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center'>
        <Component {...pageProps} />
      </div>
  </div>
  
  )
  
  
}

export default MyApp
