import Style from "./Sections.module.css"
import { BsArrowDownCircle } from 'react-icons/bs';
import { FaPencilRuler } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import React from 'react'
function Sections() {
  return <>
    <h1 className='text-gray-500 text-center  mt-16'>Necə işləyir?</h1>

    <h1 className='font-bold text-3xl mt-6 text-center'>
      Xidmət almaq və satmağın asan yolu
    </h1>




    <div className='flex flex-wrap gap-16 justify-center mt-12 '>

      <div className={Style.box}>
        <div className={Style.icon}>

          <MdLocationOn className={Style.icons} />
        </div>
        <h1 className={Style.Lokasiyanı}>Lokasiyanı seç</h1>
        <p className={Style.Sizə}>
          Sizə daha yaxın olan ərazini seçərək,<br />
          vaxtınıza qənaət edin
        </p>
      </div><div className={Style.box}>
        <div className={Style.icon}>

          <FaPencilRuler className={Style.icons} />
        </div>
        <h1 className={Style.Lokasiyanı}>İstənilən xidməti seç</h1>
        <p className={Style.Sizə}>
          Almaq istədiyiniz və ya satmaq <br /> istədiyiniz
          xidməti seçərək davam edin
        </p>
      </div>

      <div className={Style.box}>
        <div className={Style.icon}>

          <BiCalendar className={Style.icons} />
        </div>
        <h1 className={Style.Lokasiyanı}>Tarix təyin edin</h1>
        <p className={Style.Sizə}>
          Tarix təyin edərək prosesi  <br />
          tamamlayın
        </p>
      </div>
    </div>





    <BsArrowDownCircle className={Style.arrow} />







    <div className={Style.genis}>
      <div>
        <img src={"Group 1717.png"} alt="" />
      </div>

      <div  className={Style.mainssss}>
        <h1 className={Style.rahat}>
          Ən geniş xidmət şəbəkəsi,<br />
          ən rahat servis
        </h1>



          <div className={Style.mixup}>
            <div className={Style.iconsssssparent}>
              <AiFillSetting className={Style.iconsssss} />

            </div>
            <div className={Style.conentmixup}>
              <h1 className={Style.kampaniyalar}>Xüsusi kampaniyalar</h1>
              <p className={Style.təşkili}>
                Mütəmadi olaraq müxtəlif kampaniyaların təşkili,<br />
                daha çox qazanacağınız təkliflər
              </p>
            </div>
          </div>

          <div className={Style.mixup}>
            <div className={Style.iconsssssparent}>
              <AiFillSetting className={Style.iconsssss} />

            </div>
            <div className={Style.conentmixup}>
              <h1 className={Style.kampaniyalar}>Hər zaman münasib qiymətlər</h1>
              <p className={Style.təşkili}>
                Xidmət qiymətlərinin real bazar qiymətlərinə <br />
                uyğunluğuna nəzarət
              </p>
            </div>
          </div>



          <div className={Style.mixup}>
            <div className={Style.iconsssssparent}>
              <AiFillSetting className={Style.iconsssss} />

            </div>
            <div className={Style.conentmixup}>
              <h1 className={Style.kampaniyalar}>Təhlükəsiz və sürətli xidmət</h1>
              <p className={Style.təşkili}>
                Təhlükəsiz  və sürətli xidmət, etibarlı ödəmə
              </p>
            </div>
          </div>




      </div>
    </div>





  </>
}

export default Sections
