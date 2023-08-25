import React from 'react'
import Style from "./Aside.module.css"
function Aside() {
  return <>
  
  <h1 className='text-center text-gray-400 mt-10'>
  VIP xidmətlər
  </h1>
  <h2 className='text-center text-2xl   mt-10 font-bold'>
  VIP xidmət ilə məqsədinizə daha tez çatın
  </h2>

  <div className={Style.main}>
    <img   className={Style.img} src={"Group 1765.png"} alt="" />
    <img    className={Style.img}  src={"Group 1766.png"} alt="" />
    <img   className={Style.img}   src={"Group 1767.png"} alt="" />
    <img    className={Style.img}  src={"Group 1769.png"} alt="" />
    <img    className={Style.img}  src={"Group 1770.png"} alt="" />
    <img    className={Style.img}  src={"Rectangle 668.png"} alt="" />
  </div>
  


  <h1 className='text-center text-gray-400 mt-10'>
  Son əlavə edilən xidmətlər  </h1>
  <h2 className='text-center text-2xl   mt-10 font-bold'>
  Son 48 saat ərzində əlavə edilən xidmətlər  </h2>



  <div className={Style.main}>
    <img   className={Style.img} src={"Group 1772.png"} alt="" />
    <img    className={Style.img}  src={"Group 1773.png"} alt="" />
    <img   className={Style.img}   src={"Group 1774.png"} alt="" />
    <img   className={Style.img}   src={"Group 1775.png"} alt="" />
    <img   className={Style.img}   src={"Group 1776.png"} alt="" />
    <img   className={Style.img}   src={"Group 1777.png"} alt="" />
    <img   className={Style.img}   src={"Group 1778.png"} alt="" />
    <img   className={Style.img}   src={"Group 1779.png"} alt="" />
    <img   className={Style.img}   src={"Group 1780.png"} alt="" />
  </div>


  <div  className={Style.mixup}>

<div   className={Style.asside} >
  <h1  className={Style.content}>Yeniliklərdən xəbərdar olmaq üçün bildirişlərə <br/>
abunə ol!</h1>
<p  className={Style.ünvanı}>
  E-poçt ünvanı daxil et
</p>
<hr   className={Style.line}/>
</div>
  <button   className={Style.btn}>
  Abunə ol    </button>
  </div>






  {/* <div className='flex justify-center p-2 m-6 px-0    py-20'>
  <div className=' flex-row justify-between items-center flex  py-14 bg-orange-500 p-5 mx-2  rounded-3xl text-white space-x-10 w-5/6  md:w-2/4'>
  <div className=''>
  <h1 className='text-2xl font-bold'>Yeniliklərdən xəbərdar olmaq üçün bildirişlərə <br/>
abunə ol!</h1>
<p>
  E-poçt ünvanı daxil et
</p>
<div className='w-56 p-3'>

<hr />
</div>
</div>
    
<div className='bg-white text-orange-500 p-5 rounded-xl w-48 text-center'>
  <button>
  Abunə ol    </button>
  </div>
  </div>
 

  </div> */}


 
  </>
}

export default Aside
