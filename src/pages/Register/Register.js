import {createContext, useContext, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import Button from "../../components/Shared/Button";
const UserContext = createContext();

function Register() {
  useGSAP(() => {
    gsap.fromTo(".form", {opacity: 0}, {opacity: 1, duration: 1});
  });
  const [form, setForm] = useState(false);
  const [modal, setModal] = useState();

  return (
    <div className="flex items-center justify-center flex-1 w-full py-12 form">
      <UserContext.Provider value={{modal, setModal, form, setForm}}>
        {!form && <Argument></Argument>}
        {form && <Form></Form>}
      </UserContext.Provider>
    </div>
  );
}

function Form() {
  return (
    <iframe
      className="bg-[#ffffff] rounded-xl"
      src="https://docs.google.com/forms/d/e/1FAIpQLSevHOO9Ka0keEYA-SexTdGwz62cUJLdCi0dtkrfA-20Dj2rag/viewform?embedded=true"
      width="700"
      height="520"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  );
}

function Argument() {
  const {modal, setModal} = useContext(UserContext);
  const {setForm} = useContext(UserContext);

  return (
    <div className="z-10">
      <div className="flex flex-col gap-5 text-Font">
        <p>
          &nbsp; آیا با تمامی &nbsp;
          <span
            onClick={() => setModal(true)}
            className="text-blue-200 transition-all hover:text-blue-400 hover:cursor-pointer"
          >
            قوانین
          </span>
          &nbsp; موافقت دارید ؟ &nbsp;
        </p>

        <Button
          event={{
            callBack: () => {
              setForm(true);
            },
          }}
        >
          بله
        </Button>
      </div>
      {modal && <Modal />}
    </div>
  );
}

function Modal() {
  const {modal, setModal} = useContext(UserContext);
  const rulesEl = useRef();
  useEffect(() => {
    window.addEventListener("click", (v) => {
      removeModalBtn(setModal, v, rulesEl);
    });
  });

  useGSAP(() => {
    gsap.fromTo(
      ".rules",
      {opacity: 0, y: -100},
      {opacity: 1, y: 0, duration: 1}
    );
  });
  return (
    <div className="">
      <div className="fixed inset-0 flex bg-black modal opacity-80"></div>

      <div
        className="fixed inset-0 flex flex-col w-full h-full p-12 m-auto text-center absloute x-col rules"
        ref={rulesEl}
      >
        <div className="z-50 flex flex-col justify-center w-full p-5 m-auto overflow-auto text-black bg-white h-max text-end rounded-xl">
          <p className="text-center">
            قوانین عضویت شرایط عضویت: افراد متقاضی باید شرایط سنی، توانایی
            جسمانی یا مهارت‌های لازم را داشته باشند
          </p>
          <br />
          <h1 className="my-3 text-xl text-end">پرداخت حق عضویت</h1>
          اعضا موظف به پرداخت حق عضویت ماهانه یا سالانه در زمان مقرر هستند
          <h1 className="my-3 text-xl text-end">انصراف از عضویت</h1>
          <p>
            در صورت تمایل به انصراف از عضویت، اعضا باید اطلاع کتبی داده و
            تسویه‌حساب کنند. تمدید عضویت: عضویت در باشگاه باید به صورت دوره‌ای
            تمدید شود و اعضا باید از زمان تمدید عضویت خود مطلع باشند.
          </p>
          <h1 className="my-3 text-xl text-end">
            {" "}
            استفاده از امکانات استفاده از تجهیزات
          </h1>
          <p>
            اعضا موظفند به تجهیزات و وسایل باشگاه احترام بگذارند و از آن‌ها به
            درستی استفاده کنند
          </p>
          <h1 className="my-3 text-xl text-end"> رعایت نوبت</h1>
          <p>
            اعضا باید هنگام استفاده از تجهیزات، به نوبت احترام بگذارند و از
            اشغال بیش از حد طولانی یک وسیله خودداری کنند. بهداشت و نظافت: اعضا
            موظف به رعایت بهداشت فردی و استفاده از حوله شخصی در طول تمرین هستند.
            بعد از استفاده از وسایل، باید آن‌ها را تمیز کنند
          </p>
          <h1 className="my-3 text-xl text-end"> انضباطی رفتار مناسب</h1> اعضا
          <p>
            باید در تمام مدت حضور در باشگاه با سایرین برخورد محترمانه و دوستانه
            داشته باشند. هر گونه برخورد نامناسب منجر به اخطار یا تعلیق عضویت
            خواهد شد
          </p>
        </div>
        <div className="">
          <button
            className="w-max button"
            onClick={() => {
              removeModal(setModal);
            }}
          >
            خواندم
          </button>
        </div>
      </div>
    </div>
  );
}

function removeModalBtn(func, elment, refrence) {
  elment.target === refrence.current && removeModal(func);
}

function removeModal(func) {
  document.body.classList.add("pointer-events-none");
  gsap.fromTo(".modal", {opacity: 0.8}, {opacity: 0, duration: 1});
  gsap
    .fromTo(".rules", {opacity: 1, y: 0}, {opacity: 0, y: -100, duration: 1})
    .then(() => {
      func(false);
      document.body.classList.remove("pointer-events-none");
    });
}
export default Register;
