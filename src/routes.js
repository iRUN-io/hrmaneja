import departments from "./view/hr-departments/departments";
import user from "./view/user/user";

const dashboardRoutes = [
  {
    path: "/user",
    name: "User Profile",
    component: user,
    layout: "/admin"
  },
  {
    path: "/department",
    name: "Department",
    component: departments,
    layout: "/admin"
  }

];

export default dashboardRoutes;
