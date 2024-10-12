import {useEffect, useRef, useState} from "react";
import gsap from "gsap";

function News() {
  const [name, setName] = useState("Your Name");
  const input = useRef();
  const nameHolder = useRef();

  useEffect(() => {
    gsap.from(".news", {color: "red", opacity: 0.5});
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full h-full gap-12 text-Font">
      <div className="flex flex-col gap-3">
        <input ref={input} className="text-black w-52 " type="text" />
        <button
          onClick={() => {
            nameHolder.current.innerText = input.current.value;
          }}
        >
          submit
        </button>
      </div>

      <div>
        Hello{" "}
        <span ref={nameHolder} className="news">
          {name}
        </span>
      </div>
    </div>
  );
}

export default News;
