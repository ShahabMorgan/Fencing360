import "./AboutUs";
import aboutImage from "../../images/about/1.jpg";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

function AboutUs() {
  useGSAP(() => {
    gsap.fromTo(".about", {opacity: 0}, {opacity: 1, duration: 1});
  });
  return (
    <div className="flex flex-1 py-12 about xs:flex-col">
      <div className="w-1/4 h-full ">
        <img
          loading="lazy"
          src={aboutImage}
          className="object-cover rounded-l-Header"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center flex-1 h-full px-12 text-center text-Font">
        <div>
          <h1 className="text-4xl">درباره ما</h1>
          <br />
          <p>
            باشگاه شمشیر بازی آبادان یکی از مراکز ورزشی فعال در زمینه آموزش و
            تمرین شمشیر بازی در شهر آبادان است. این باشگاه با هدف ترویج و توسعه
            این ورزش در بین جوانان و علاقه‌مندان به شمشیر بازی تأسیس شده و
            امکانات و تجهیزات مناسبی برای تمرینات این ورزش فراهم می‌کند. در این
            باشگاه، افراد با سطوح مختلف مهارت، از مبتدی تا حرفه‌ای، می‌توانند
            تحت آموزش‌های مربیان مجرب قرار بگیرند. ورزش شمشیر بازی در این باشگاه
            شامل سبک‌های مختلفی از جمله فلوره (Foil)، اپه (Epee) و سابر (Sabre)
            است. هر یک از این سبک‌ها قوانین و تکنیک‌های خاص خود را دارد و افراد
            می‌توانند بسته به علاقه خود یکی از این سبک‌ها را دنبال کنند. باشگاه
            شمشیر بازی آبادان با برگزاری مسابقات و رقابت‌های داخلی و منطقه‌ای
            نیز سعی در تقویت مهارت‌های ورزشکاران و ایجاد فضایی برای رشد و پیشرفت
            آن‌ها دارد. این باشگاه همچنین به جذب نوجوانان و جوانان علاقه‌مند به
            این ورزش تلاش می‌کند تا زمینه‌های لازم برای موفقیت آن‌ها در سطح ملی
            و بین‌المللی را فراهم کند.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
