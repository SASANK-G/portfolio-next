import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head> 

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
        </Head>
        <body className="py-2 md:flex md:flex-col md:justify-center md:h-screen dark:bg-black">
          <div>
            <Main />
            <NextScript/>
          </div>
        </body>
      </Html>
    )
  }
}


export default MyDocument
