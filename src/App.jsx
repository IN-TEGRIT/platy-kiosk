import { useEffect, useRef } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate
} from "react-router-dom";
import Frame from "./pages/Frame";
import Sub from "./pages/Sub";
import Main from "./pages/Main";
import PayMethod from "./pages/PayMethod";
import Paying from "./pages/Paying";
import PayingEnd from "./pages/PayingEnd";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigate('/');
    }, 15000); // 15초 후에 루트 경로로 네비게이트

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [navigate]);

 /*  // 사용자 입력을 감지하면 타임아웃을 초기화
  const handleUserInput = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      navigate('/');
    }, 10000); // 5초 후에 루트 경로로 네비게이트
  };

  // 페이지가 활성화될 때 이벤트 리스너 등록
  useEffect(() => {
    const body = document.querySelector('body');
    body.addEventListener('click', handleUserInput);

    return () => {
      body.removeEventListener('click', handleUserInput);
    };
  }, []); */

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sub1":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/main" element={<Main />} />
        <Route path="/payMethod" element={<PayMethod />} />
        <Route path="/paying" element={<Paying />} />
        <Route path="/payMethod" element={<PayMethod />} />
        <Route path="/payingEnd" element={<PayingEnd />} />
      </Routes>
  );
}
export default App;
