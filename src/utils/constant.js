import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import DashBoard from "../pages/Dashboard";
import TableData from "../component/dashboard/Table";
import Post from "../component/dashboard/Posts";
import Logout from "../component/Logout";

export const dashSidebarMenu = [
  {
    slug: "",
    linkName: "Dashboard",
  },
  {
    slug: "",
    linkName: "Profile",
  },
  {
    slug: "/dashboard/table-data",
    linkName: "Create/Update/Delete",
  },
  {
    slug: "",
    linkName: "Apps",
  },
  {
    slug: "",
    linkName: "Settings",
  },
  {
    slug: "/dashboard/posts",
    linkName: "Post",
  },
  {
    slug: "/dashboard/logout",
    linkName: "Logout",
  },
];

export const socialIconArray = [
  {
    icon: <FaFacebookF />,
    totalFollowers: 21.1,
    extraClass: "f_bg",
    footerbgClass:"ft_fb"
  },
  {
    icon: <FaTwitter />,
    totalFollowers: 10.1,
    extraClass: "tw_bg",
    footerbgClass:"ft_twr"

  },
  {
    icon: <FaGooglePlusG />,
    totalFollowers: 5,
    extraClass: "gplus_bg",
    footerbgClass:"ft_gplus"

  },
  {
    icon: <FaInstagram />,
    footerbgClass:"ft_insta"
  },
];
export const SiteMenu = [
  {
    label: "home",
    endPoint: "/",
    forMobile: true,
  },
  {
    label: "lifestyle",
    endPoint: "/lifestyle",
    category: 230,
    forMobile: true,
  },
  {
    label: "fashion",
    endPoint: "/fashion",
    category: 95,
    forMobile: true,
  },
  {
    label: "technology",
    endPoint: "/technology",
    category: 55,
    forMobile: true,
  },
  {
    label: "login",
    endPoint: "/login",
    forMobile: true,
  },
  {
    label: "travel",
    endPoint: "/travel",
    category: 38,
  },
  {
    label: "health",
    endPoint: "/health",
    category: 25,
  },
];

export const tagsList = [
  "social",
  "lifestyle",
  "blog",
  "travels",
  "technology",
  "fashion",
  "life",
  "news",
  "magazine",
  "health",
];

export const dashRouteArray = [
  {
    path:"/dashboard/",
    component:<DashBoard/>,
      subRoute:[
        {
          path:"table-data",
          component:<TableData/>
        },
        {
          path:"posts",
          component:<Post/>
        },
        {
          path:"logout",
          component:<Logout />
        },
      ]
  },
]
