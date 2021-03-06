import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
   <ThemeProvider attribute="class"> 
      <div className = 'grid grid-cols-12 gap-8 px-5 lg:px-20' >
          <div className='col-span-12 px-4 py-5 text-center bg-white shadow-2xl lg:col-span-3 rounded-2xl dark:bg-gray-900'>
            <Sidebar/>
          </div>
          <div className='col-span-12 p-4 bg-white shadow-2xl lg:col-span-9 rounded-2xl dark:bg-gray-900'>
            <Navbar/>
            <Component {...pageProps} />
          </div>
      </div>
  </ThemeProvider>
  
  )
  
  
}

export default MyApp
