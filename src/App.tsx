import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import StudentDashboard from "./pages/Student/StudentDashboard";
import UploadLesson from "./pages/Teacher/UploadLesson";
import AccessibilityReport from "./pages/Teacher/AccessibilityReport";
import LessonView from "./pages/Student/LessonView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/upload" element={<UploadLesson />} />
        <Route path="/teacher/report" element={<AccessibilityReport />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/lesson" element={<LessonView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
