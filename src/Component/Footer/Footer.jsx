import React from 'react'
import { BiMessageCheck } from 'react-icons/bi';
import { BiPhone } from 'react-icons/bi';

function Footer() {
  return <>
  
  
<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
        <a href="https://flowbite.com/" class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-orange-500 dark:text-white">XİDMƏT.
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-950 dark:text-white">DE.</span>
      
      </span>
  </a>     
  
         <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Azərbaycanda bütün növ xidmətlər   
təklif edən onlayn platforma </a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline gap-2 flex">  <BiMessageCheck className='mt-1'/>info@xidmet.de </a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline gap-2 flex"><BiPhone  className='mt-1 font-bold'/>*0101 </a>
                </li>
               
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Saytın xəritəsi</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                
                <li class="mb-4">
                    <a href="#" class="hover:underline">Ana səhifə</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Haqqımızda</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Xidmətlər</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Bizimlə əlaqə</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Faydalı linklər</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Ümumi qaydalar</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Mashin.al</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline"> Texnika.al</a>
                </li> <li class="mb-4">
                    <a href="#" class="hover:underline"> Menzil.al</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Social Media</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Instagram</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Telegram</a>
                </li>
               
            </ul>
        </div>
    </div>
    
    </div>
</footer>




  
  </>
}

export default Footer
