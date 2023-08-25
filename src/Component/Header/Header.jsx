import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { RiSettings5Fill } from 'react-icons/ri';
import React from 'react'
import Style from "./Header.module.css"
function Header() {
  return <>
  <div className='flex justify-center flex-wrap gap-x-28 mt-20'>

  <div className='px-4'>

<h1 class="font-bold my-4  text-4xl ">İstədiyin xidməti asan <br/>
<h1 className='mt-4'>
və sürətli <span class="text-orange-500">
 əldə et!
    </span></h1></h1>
  <p className='mt-10 text-gray-950'>
  Bütün növ xidmətləri ən rahat şəkildə əldə et və ya xidmət təklif <br/>
edərək qısa müddətdə satışını həyata keçir.
  </p>
  




<div className={Style.main}>
<div  className={Style.icons}>
  <CiLocationOn className='mt-1  '/>
  Lokasiyanı seç

  <AiOutlineArrowDown  className='mt-1 font-bold'/>
</div>
<div  className={Style.iconsone}>
<RiSettings5Fill className='mt-1 gap-10 font-bold'/>

Lokasiyanı seç


<AiOutlineArrowDown  className='mt-1 font-bold'/>

</div>
<div>

<button   className={Style.btn}>Axtar</button>
</div>
</div>

  </div>
  
<img className='w-auto px-4  mt-3  h-auto'  src={"Mask Group.jpg"} alt="" />
  </div>
  
  </>
}

export default Header
