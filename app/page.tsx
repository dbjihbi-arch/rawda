import { BiBuildingHouse, BiSupport } from "react-icons/bi";
import { FaCheck, FaMosque, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrElevator } from "react-icons/gr";
import { IoFlashSharp, IoLogoStackoverflow } from "react-icons/io5";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { VscWorkspaceTrusted } from "react-icons/vsc";


export default function Home() {
  return (
    <div className="pt-20">
      

      <div dir="rtl" className=" fixed w-full z-50 bg-background top-0 left-0 shadow-lg">
        <div className="flex justify-between w-11/12 mx-auto py-5">

        <div>
          <h1 className="text-paragraph font-bold text-2xl">
          عمارة الروضة
          </h1>
          
        </div>

        <div className="bg-hedin flex items-center gap-1 py-1 px-2 rounded-[5px] text-background">
          <a href="" >تواصل عبر واتساب</a>
          <FaWhatsapp className="text-[20px]" />
        </div>
      </div>
        </div>

      {/* ==================== */}

      <div className="relative">
        <img src="/hero.jpg" className="w-full " alt="" />

        <div dir="rtl" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-paragraph/70 hidden lg:block absolute w-120 p-2 h-50 lg:bottom-40 lg:left-20">
          <h1 className="text-3xl text-hedin mt-8 font-bold mr-10 ">  فرصة استثمارية <span className="text-background">مميزة</span></h1>
          <p className="text-background mt-1 mb-5 mr-10">عمارة الروضة-شقق سكنيه فاخرة في حي هادي</p>
          <a href="#" className="bg-hedin py-2 px-6 mr-10 rounded-[7px] text-background ">احجز الان</a>
        </div>
      </div>

      {/* ========================   */}

        <div  className="  lg:hidden mt-8 flex justify-center">
              <div dir="rtl" className=" text-center  ">
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-3xl text-hedin mt-8 font-bold  ">  فرصة استثمارية <span className="text-hedin">مميزة</span></h1>
          <p data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-paragraph mt-1 mb-5">عمارة الروضة-شقق سكنيه فاخرة في حي هادي</p>
          <a data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" href="#" className="bg-hedin py-2 px-6  rounded-[7px] text-background ">احجز الان</a>
        </div>

        </div>
        {/* ========================= */}


        <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-center mt-20  text-paragraph font-bold text-2xl">تفاصيل العقار</h1>
      <div className=" mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-5 gap-4  w-11/12 mx-auto">
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-card text-center rounded-[8px] ">
          <h2 className="text-[23px] text-paragraph font-extrabold flex justify-center items-center  "> <span className="text-hedin text-[25px] mr-1 "> <IoLogoStackoverflow /></span>عدد الادوار</h2>
          <div className="flex justify-center">
            
          <p>ادوار</p>
          <p>8</p>
          </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-card text-center rounded-[8px] ">
          <h2 className="text-[23px] text-paragraph font-extrabold flex justify-center items-center  "> <span className="text-hedin text-[25px] mr-1 "><BiBuildingHouse /></span>عدد الشقق</h2>
          <div className="flex justify-center">
            
          <p>شقة</p>
          <p>24</p>
          </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-card text-center rounded-[8px] ">
          <h2 className="text-[23px] text-paragraph font-extrabold flex justify-center items-center  "> <span className="text-hedin text-[25px] mr-1 "><GrElevator /></span>مصعد</h2>
          
          <p className="text-gray-500">متوفر</p>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-card text-center rounded-[8px] ">
          <h2 className="text-[23px] text-paragraph font-extrabold flex justify-center items-center  "> <span className="text-hedin text-[25px] mr-1 "><LiaRulerCombinedSolid /></span>المساحة</h2>
          
          <div className="flex justify-center">
          <p>م</p>
          <p>1,200</p>
          </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-card text-center rounded-[8px] ">
          <h2 className="text-[23px] text-paragraph font-extrabold flex justify-center items-center  "> <span className="text-hedin text-[25px] mr-1 "><FaMosque /></span>مسافة عن مسجد</h2>
          
          <div className="flex justify-center">
          <p>متر</p>
          <p>300</p>
          </div>
        </div>

      </div>

      {/* ========================== */}

          <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-center mb-3 text-3xl mt-17 text-paragraph font-bold">الموقع</h1>
        <div className=" w-11/12 mx-auto flex justify-center">
          <div dir="rtl" className=" bg-hedin/60 rounded-2xl  w-full text-center  py-5">
          <div>
          
            <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-2xl font-bold text-paragraph">الموقع الجغرافي</h1>
          </div>
            <p data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-background">قريب من الخدمات الريسية</p>
            <p data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-background mb-7">و في موقع استراتيجي مميز</p>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-paragraph mx-auto flex items-center w-60 text-center justify-center text-background py-2 px-3 rounded-2xl">
            <a href="" >عرض الموقع على الخريطة</a>
              <FaLocationDot className="text-[20px] text-hedin " />
            </div>
          </div>
        </div>

        {/* ===================== */}

        <div>
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-center mb-4 text-3xl text-paragraph font-bold mt-15">معرض الصور</h1>
          <div className=" gap-7 flex flex-wrap justify-center w-11/12 mx-auto">
          <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" src="/a.jpg" className="w-80 rounded-2xl" alt="" />
          <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" src="/b.jpg" className="w-80 rounded-2xl" alt="" />
          <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" src="/c.jpg" className="w-80 rounded-2xl" alt="" />
          <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" src="/d.jpg" className="w-80 rounded-2xl" alt="" />
          </div>
        </div>

      {/* ========================== */}
      
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-center mt-15 text-2xl font-bold text-paragraph">مميزات العقار</h1>
      <div dir="rtl" className="bg-card py-7 mt-3 rounded-2xl w-11/12  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-semibold text-paragraph lg:pr-55 md:pr-30 sm:pr-25 gap-y-4 pr-10  ">
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="flex items-center gap-2">
        <FaCheck className="bg-hedin rounded-full w-5 h-5 p-1 text-background" />
          <p>تصميم معماري حديث </p>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="flex items-center gap-2">
<FaCheck className="bg-hedin rounded-full w-5 h-5 p-1 text-background" />
          <p>مصعد حديث و سريع</p>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="flex items-center gap-2">
<FaCheck className="bg-hedin rounded-full w-5 h-5 p-1 text-background" />
          <p>موقع مميز</p>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="flex items-center gap-2">
<FaCheck className="bg-hedin rounded-full w-5 h-5 p-1 text-background" />
          <p>قرب من الخدمات</p>
        </div>
      </div>

      {/* ============================ */}

      <div>
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className=" text-3xl mt-20 text-center font-bold text-paragraph">استثمارك</h1>
        <h2 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className=" text-2xl text-center font-bold text-hedin">في مكان افضل</h2>
        
        <div dir="rtl" className=" lg:flex justify-center mt-5 gap-20 ">
        <div className=" items-center text-center sm:flex justify-center text-paragraph font-bold gap-15 md:text-[20px]">

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="mt-7">
        <IoFlashSharp className="w-full text-2xl text-hedin" />
        <p>استجاية سريعة</p>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="mt-7">
        <BiSupport className="w-full text-2xl text-hedin" />
        <p>دعم مستمر</p>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="mt-7">
        <VscWorkspaceTrusted className="w-full text-2xl text-hedin" />
        <p>ثقة و احترافية</p>
        </div>

        </div>
<div className="">
        <div className=" pb-10 mx-auto w-60 text-center mt-10 lg:mt-0 ">
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-2xl text-paragraph font-bold">للاستفسار و الحجز</h1>
          <p data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="text-hedin mb-5">تواصل معنا الان عبر الواتساب</p>
          <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="bg-paragraph text-[20px] gap-1 flex items-center py-2 px-5 justify-center rounded-2xl text-background">
          <a href="" >تواصل معنا</a>
          <FaWhatsapp/>
          </div>
        </div>
        </div>
      </div>
</div>

      <div className="bg-hedin text-center text-background py-1">
        <p>جميع الحقوق محفوظة</p>
      </div>
    </div>
  );
}
