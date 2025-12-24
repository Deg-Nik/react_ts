import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "components/Layout/Layout";
import About from "pages/EmployeeApp/About/About";
import Home from "pages/EmployeeApp/Home/Home";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";


import Lesson_06 from "lessons/lesson_06/Lesson_06";
import Homework_06 from "./homeworks/homework_06/Homework_06";
import Homework_06_lesson from "./homeworks/homework_06_lesson/Homework_06_lesson";
import Lesson_07 from "lessons/lesson_07/Lesson_07";
import Homework_07 from "homeworks/homework_07/Homework_07";
import Lesson_08 from "lessons/lesson_08/Lesson_08";
import Homework_08 from "homeworks/homework_08/Homework_08";
import Consultation_05 from "consultations/consultation_05/Consultation_05";
import Lesson_09 from "lessons/lesson_09/Lesson_09";
import Homework_09 from "homeworks/homework_09/Homework_09";
import Lesson_10 from "lessons/lesson_10/Lesson_10";
import Homework_10 from "homeworks/homework_10/Homework_10";
import Playground from "consultations/consultation_06/Playground";
import Lesson_11 from "lessons/lesson_11/Lesson_11";
import Lesson_12 from "lessons/lesson_12/Lesson_12";
import Homework_12 from "homeworks/homework_12/Homework_12";
import Consultation_07 from "consultations/consultation_07/Consultation_07";
import Lesson_13 from "lessons/lesson_13/Lesson_13";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* <Lesson_06/> */}
      {/* <Homework_06/> */}
      {/* <Homework_06_lesson/> */}
      {/* <Lesson_07/> */}
      {/* <Homework_07/> */}
      {/* <Lesson_08 /> */}
      {/* <Homework_08/> */}
      {/* <Consultation_05/> */}
      {/* <Lesson_09/> */}
      {/* <Homework_09/> */}
      {/* <Lesson_10/> */}
      {/* <Homework_10/> */}
      {/* <Playground/> */}
      {/* <Lesson_11/> */}
      {/* <Lesson_12/> */}
      {/* <Homework_12/> */}
      {/* <Consultation_07/> */}
      {/* <Lesson_13/> */}
    </BrowserRouter>
  );
}

export default App;
