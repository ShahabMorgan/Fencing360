import "./Home";
import {
  useEffect,
  useRef,
  ref,
  useState,
  useSyncExternalStore,
  Suspense,
  lazy,
} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import userEvent from "@testing-library/user-event";

const Header = lazy(() => import("../../components/Header/Header"));
const Main = lazy(() => import("../../components/Main/Main"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

function Home() {
  const container = useRef();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        console.log("check");
        setloading(true);
      }, 1000);
    };
  }, []);
  useEffect(() => {
    console.log(container);
  });

  useGSAP(() => {
    gsap.fromTo(".good", {opacity: 0}, {opacity: 1, duration: 1});
  });
  return (
    <div className="flex flex-col box h-dvh good">
      {!loading && (
        <div className="flex items-center justify-center h-screen text-Font ">
          loading
        </div>
      )}
      {loading && (
        <Suspense ref={container} fallback={<div>salam</div>}>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Suspense>
      )}
    </div>
  );
}

export default Home;
