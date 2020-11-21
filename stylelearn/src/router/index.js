import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/Home";
import HomeTutor from "../views/Tutor/HomeTutor";
import TestTutor from "../views/Tutor/TestTutor";
import MyVideoTutor from "../views/Tutor/MyVideoTutor";
import ProfileTutor from "../views/Tutor/ProfileTutor";
import UploadVideoTutor from "../views/Tutor/UploadVideoTutor";
import BasicUse from "../views/BasicUse";
import About from "../views/About";
import ForgetPassword from "../views/ForgetPassword";
import ForgetPasswordPop from "../views/ForgetPasswordPop";
import SignUpSec from "../views/SignUpSuc";
import NewPassword from "../views/NewPassword";
import CoursesPage from "../views/CoursesPage";
import LessonPage from "../views/LessonPage";
import AdminHome from "../views/Admin/Adminhome";
import AdminEditvideo from "../views/Admin/Admineditvideo";
import AdminclickvideoPop from "../views/Admin/AdminclickvideoPop";
import Adminclickvideo from "../views/Admin/Adminclickvideo";
import MyCourse from "../views/MyCourse.vue";
import LearnCourse from "../views/LearnCourse.vue";
import LearnCourseTutorPage from "../views/LearnCourseTutorPage.vue";
import VideoStudent from "../views/VideoStudent.vue";
import SelectedItemInvoice from "../views/SelectedItemInvoice.vue";
import SelectItem from "../views/SelectItem.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/hometutor",
    name: "HomeTutor",
    component: HomeTutor
  },
  {
    path: "/testtutor",
    name: "TestTutor",
    component: TestTutor
  },
  {
    path: "/myvideotutor",
    name: "MyVideoTutor",
    component: MyVideoTutor
  },
  {
    path: "/profiletutor",
    name: "ProfileTutor",
    component: ProfileTutor
  },
  {
    path: "/uploadvideotutor",
    name: "UploadVideoTutor",
    component: UploadVideoTutor
  },
  {
    path: "/basicuse",
    name: "BasicUse",
    component: BasicUse
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/forgetpassword",
    name: "ForgetPassword",
    component: ForgetPassword
  },
  {
    path: "/forgetpasswordpop",
    name: "ForgetPasswordPop",
    component: ForgetPasswordPop
  },
  {
    path: "/signupsuccessfully",
    name: "SignUpSec",
    component: SignUpSec
  },
  {
    path: "/newpassword",
    name: "NewPassword",
    component: NewPassword
  },
  {
    path: "/coursespage",
    name: "CoursesPage",
    component: CoursesPage
  },
  {
    path: "/lessonpage",
    name: "LessonPage",
    component: LessonPage
  },
  {
    path: "/mycourse",
    name: "MyCourse",
    component: MyCourse
  },
  {
    path: "/learncourse",
    name: "LearnCourse",
    component: LearnCourse
  },
  {
    path: "/learncoursetutorpage",
    name: "LearnCourseTutorPage",
    component: LearnCourseTutorPage
  },
  {
    path: "/adminhome",
    name: "AdminHome",
    component: AdminHome
  },
  {
    path: "/admineditvideo",
    name: "Admineditvideo",
    component: AdminEditvideo
  },
  {
    path: "/adminclickvideopop",
    name: "adminclickvideoPop",
    component: AdminclickvideoPop
  },
  {
    path: "/adminclickvideo",
    name: "adminclickvideo",
    component: Adminclickvideo
  },
  {
    path: "/video",
    name: "VideoStudent",
    component: VideoStudent
  },
  {
    path: "/invoice",
    name: "SelectedItemInvoice",
    component: SelectedItemInvoice
  },
  {
    path: "/selectitem",
    name: "SelectItem",
    component: SelectItem
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
