import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
  <div className = 'grid grid-cols-12 gap-6 px-5 my-6 lg:px-32'>
      <div className='col-span-12 p-4 text-center bg-white shadow-xxl lg:col-span-3 rounded-2xl'>
        <Sidebar/>
      </div>
      <div className='flex flex-col col-span-12 p-4 bg-white shadow-xxl lg:col-span-9 rounded-2xl'>
        <Navbar/>
        <Component {...pageProps} />
      </div>
  </div>
  
  )
  
  
}

export default MyApp
