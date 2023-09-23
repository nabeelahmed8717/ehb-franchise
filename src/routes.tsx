import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import loadingGif from "./assets/loading/boxes-loader.gif"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={
    <div
    className="d-flex justify-center align-center" 
    style={{ 
      height: "100vh", 
      // backgroundColor:"#fff",
      width:"100%",
      position:'fixed',
      left:"0",
      top:"0", 
    }}
    >
      {/* <Spin indicator={antIcon} /> */}
      <img src={loadingGif} width={60}  alt="" />
    </div>
  }>
    <Component {...props} />
  </Suspense>
);
const MainLayout = Loadable(lazy(() => import("./layout/mainLayout")));
const LandingPage = Loadable(lazy(() => import("./pages/dashboard")));
const SignIn = Loadable(lazy(() => import("./pages/signIn")));
const SignUp = Loadable(lazy(() => import("./pages/signUp")));
const Chat = Loadable(lazy(() => import("./pages/chat")));



const ManageFranchise = Loadable(lazy(() => import("./pages/manageFranchise")));
const Packages = Loadable(lazy(() => import("./pages/sqPackages")));
const ManageUsers = Loadable(lazy(() => import("./pages/manageUsers")));
const UsersQuries = Loadable(lazy(() => import("./pages/usersQuries")));

const Marketing = Loadable(lazy(() => import("./pages/marketing")));


export const routes: any = [
  { path: "/", element: <Navigate to="home" /> },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "manage-franchise",
        element: <ManageFranchise />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "users-quries",
        element: <UsersQuries />,
      },
      {
        path: "marketing",
        element: <Marketing />,
      }
    ],
  },
];
