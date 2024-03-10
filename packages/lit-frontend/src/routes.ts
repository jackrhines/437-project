import "./views/gallery-app";
import "./views/profile-page";
import "./views/gallery-page";

export default [
  // {
  //   path: "/app/profile/:userid/:edit(edit)",
  //   component: "profile-page",
  // },
  { path: "/app/profile/:userid", component: "profile-page" },
  // { path: "/app/:art([0-9a-f]+)", component: "art-page" },
  { path: "/app", component: "gallery-page" },
  { path: "(.*)", redirect: "/app" },
];