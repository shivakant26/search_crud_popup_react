import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const dashboardRoute = [
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
