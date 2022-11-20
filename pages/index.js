import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Toni Ismail</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>
      <div className="flex w-screen h-screen text-gray-700">

            {/* logo dan sidebar */}
            <div className="lg:flex lg:flex-col lg:w-56 border-gray-300 hidden md:block">

                {/* logo */}
                <div className="relative text-sm shadow-md">
                    <div className="flex items-center justify-between w-full h-16 px-4 border-gray-300">
                        <span className="font-medium">
                            Logo / App 
                        </span> 
                    </div>
                </div>
                {/* end logo */}

                {/* sidebar */}
                <div className="flex flex-col flex-grow p-4 overflow-auto border-r">

                    <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 bg-gray-300" href="#">
                        <span className="leading-none">menu 1</span>
                    </a>

                    <button className="relative text-sm focus:outline-none group">
                        <div className="flex items-center justify-between w-full h-10 px-2 hover:bg-gray-300 rounded">
                            <span className="font-medium">
                                menu 2
                            </span> 
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="relative z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex rounded-lg border">
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                        </div>
                    </button>

                    <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span className="leading-none">menu 3</span>
                    </a>

                    <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span className="leading-none">menu 4</span>
                    </a>

                    <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                        <span className="leading-none">menu 5</span>
                    </a>

                    <a className="flex text-white items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-red-700 rounded-full hover:bg-red-800" href="#">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                        
                        <span className="ml-3 leading-none">Log Out</span>
                    </a>

                </div>
                {/* end sidebar */}

            </div>
            {/*end logo dan sidebar */}

            <div className="flex flex-col flex-grow">

                {/* header */}
                <div className="flex items-center flex-shrink-0 h-16 px-8 border-gray-300 shadow-md">
                    
                    {/* <h1 className="text-lg font-medium">Title</h1> */}
                    
                    <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium hover:bg-gray-300 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                    </button>

                    <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium rounded-full hover:bg-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
                    </button>

                    <button className="relative ml-2 text-sm focus:outline-none group lg:hidden">
                        <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div className="absolute right-0 flex-col items-center hidden w-56 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu 1</a>
                            <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu 1</a>
                            
                        </div>
                    </button>

                </div>
                {/* end header */}

                {/* main body */}
                <div className="flex-grow p-6 overflow-auto ">

                    {/* breadcumb */}
                    <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 w-full mb-5">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                          <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 ">
                              
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>

                              Dashboard
                            </a>
                          </li>
                          <li>
                            <div className="flex items-center">
                              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>

                              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 ">Home</a>
                            </div>
                          </li>
                          
                        </ol>
                    </nav>
                    {/*end breadcumb */}

                    {/* content */}
                    <div className="grid grid-cols-3 gap-6">

                        <div className="h-24 col-span-3 bg-white border border-gray-300"></div>

                        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                        
                    </div>
                    {/* end content */}

                </div>
                {/* end main body */}

            </div>
            
      </div>

      {/* tombol bawah kanan overlay */}
      <a className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600" href="#" target="_top">
        <div className="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full">
          {/* teks */}
        </div>
      {/* <span className="text-sm ml-1 leading-none">UP</span> */}
      </a>
      {/* end tombol bawah kanan overlay */}
    </div>
  )
}
