import React from 'react'

function Navbar() {
  return <>
  
  
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center gap-2 sm:gap-20 justify-center mx-auto p-4    ">
  <a href="https://flowbite.com/" class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-orange-500 dark:text-white">XİDMƏT.
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-950 dark:text-white">DE.</span>
      
      </span>
  </a>
  <div class="flex  md:order-2 ">
      <button type="button" class="text-white pr-6 bg-orange-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Daxil ol</button>
<img class="w-12   h-6 ml-2 sm:ml-12 mt-2"  src={"logo.png"} alt="logo.png" />
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ana səhifə</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Haqqımızda</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Xidmətlər</a>
      </li>

      <li>
        <a href="#" class="block py-2 pl-3 pr-4  text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent   md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Bizimlə əlaqə</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 ml-0 pr-4      md:ml-16  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Xidmət əlavə et +</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  
  </>
}

export default Navbar
