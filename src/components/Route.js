// Import all components here
// import React, { Component } from 'react'
import Dashboard from './HRMS/Dashboard/Dashboard';
import Users from './HRMS/Users/Users';
import Departments from './HRMS/Departments/Departments';
import Employee from './HRMS/Employee/Employee';
import Holidays from './HRMS/Holidays/Holidays';
import Events from './HRMS/Events/Events';
import Activities from './HRMS/Activities/Activities';
import Payroll from './HRMS/Payroll/Payroll';
import Report from './HRMS/Report/Report';
import Accounts from './HRMS/Accounts/Accounts';
import ProjectDashboard from './Project/Dashboard/Dashboard';
import ProjectList from './Project/ProjectList/Projectlist';
import Taskboard from './Project/Taskboard/Taskboard';
import TicketList from './Project/TicketList/TicketList';
import TicketDetails from './Project/TicketDetails/TicketDetails';
import Clients from './Project/Clients/Clients';
import TodoList from './Project/TodoList/TodoList';
import JobPortalDashboard from './JobPortal/Dashboard/Dashboard';
import Applicants from './JobPortal/Applicants/Applicants';
import Positions from './JobPortal/Positions/Positions';
import Resumes from './JobPortal/Resumes/Resumes';
import Settings from './JobPortal/Settings/Settings';
import Icons from './Icons/icons';
import IconsFeather from './Icons/IconsFeather';
import IconsLine from './Icons/IconsLine';
import IconsFlags from './Icons/IconsFlags';
import IconsPayments from './Icons/IconsPayments';
import Charts from './Charts/Charts';
import ChartsE from './Charts/ChartsE';
import ChartsC3 from './Charts/ChartsC3';
import ChartsKnob from './Charts/ChartsKnob';
import ChartsSparkline from './Charts/ChartsSparkline';
import Forms from './Forms/Forms';
import FormAdvanced from './Forms/FormAdvanced';
import FormValidation from './Forms/FormValidation';
import FormWizard from './Forms/FormWizard';
import FormSummernote from './Forms/FormSummernote';
import Tables from './Tables/Tables';
import DataTables from './Tables/DataTables';
import TablesColor from './Tables/TablesColor';
import TablesBasic from './Tables/TablesBasic';
import Widgets from './Widgets/Widgets';
import WCard from './Widgets/WCard';
import WStatistics from './Widgets/WStatistics';
import WData from './Widgets/WData';
import WSocial from './Widgets/WSocial';
import WOther from './Widgets/WOther';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import AppCalendar from './AppPages/AppCalendar';
import AppContact from './AppPages/AppContact';
import AppChart from './AppPages/AppChart';
import AppFilemanager from './AppPages/AppFilemanager';
import AppSetting from './AppPages/AppSetting';
import Maps from './Maps/Maps';
import Gallery from './Gallery/Gallery';
import Login from './Authentication/login';
import Signup from './Authentication/signup';
import ForgotPassword from './Authentication/forgotpassword';
import NotFound from './Authentication/404';
import InternalServer from './Authentication/500';
import EmployeeDetails from './HRMS/Employee/EmployeeDetails';
import Leave from './HRMS/Leave/Leave';

const Routes = [
    {
        path: "/",
        name: 'dashboard',
        exact: true,
        pageTitle: "HR Dashboard",
        component: Dashboard
    },
    {
        path: "/hr-users",
        name: 'hr-users',
        exact: true,
        pageTitle: "Users",
        component: Users
    },
    {
        path: "/hr-department",
        name: 'department',
        exact: true,
        pageTitle: "Departments",
        component: Departments
    },
    {
        path: "/hr-employees",
        name: 'employees',
        exact: true,
        pageTitle: "Employee",
        component: Employee
    },
    {
        path: "/hr-leave",
        name: 'leave',
        exact: true,
        pageTitle: "Leave",
        component: Leave
    },
    {
        path: "/hr-employee-details",
        name: 'employee',
        exact: true,
        pageTitle: "Employee Details",
        component: EmployeeDetails
    },
    {
        path: "/hr-activities",
        name: 'activities',
        exact: true,
        pageTitle: "Activities",
        component: Activities
    },
    {
        path: "/hr-holidays",
        name: 'holidays',
        exact: true,
        pageTitle: "Holidays",
        component: Holidays
    },
    {
        path: "/hr-events",
        name: 'events',
        exact: true,
        pageTitle: "Events",
        component: Events
    },
    {
        path: "/hr-payroll",
        name: 'payroll',
        exact: true,
        pageTitle: "Payroll",
        component: Payroll
    },
    {
        path: "/hr-accounts",
        name: 'accounts',
        exact: true,
        pageTitle: "Accounts",
        component: Accounts
    },
    {
        path: "/hr-report",
        name: 'report',
        exact: true,
        pageTitle: "Report",
        component: Report
    },
    // add new routes here

    //project

    {
        path: "/project-dashboard",
        name: 'projectDashboard',
        exact: true,
        pageTitle: "'Project Dashboard",
        component: ProjectDashboard
    },
    {
        path: "/project-list",
        name: 'project-list',
        exact: true,
        pageTitle: "Project",
        component: ProjectList
    },

    {
        path: "/project-taskboard",
        name: 'project-taskboard',
        exact: true,
        pageTitle: "Taskboard",
        component: Taskboard
    },

    {
        path: "/project-ticket",
        name: 'project-ticket',
        exact: true,
        pageTitle: "Ticket List",
        component: TicketList
    },

    {
        path: "/project-ticket-details",
        name: 'project-ticket-details',
        exact: true,
        pageTitle: "Ticket Details",
        component: TicketDetails
    },
    {
        path: "/project-clients",
        name: 'project-clients',
        exact: true,
        pageTitle: "Clients",
        component: Clients
    },

    {
        path: "/project-todo",
        name: 'project-todo',
        exact: true,
        pageTitle: "Todo List",
        component: TodoList
    },

    //job portal

    {
        path: "/jobportal-dashboard",
        name: 'jobportalDashboard',
        exact: true,
        pageTitle: "Job Dashboard",
        component: JobPortalDashboard
    },
    {
        path: "/jobportal-positions",
        name: 'jobportalPositions',
        exact: true,
        pageTitle: "Job Positions",
        component: Positions
    },
    {
        path: "/jobportal-applicants",
        name: 'jobportalpplicants',
        exact: true,
        pageTitle: "Job Applicants",
        component: Applicants
    },
    {
        path: "/jobportal-resumes",
        name: 'jobportalResumes',
        exact: true,
        pageTitle: "Job Resumes",
        component: Resumes
    },
    {
        path: "/jobportal-settings",
        name: 'jobportalSettings',
        exact: true,
        pageTitle: "Job Settings",
        component: Settings
    },


    {
        path: "/login",
        name: 'login',
        exact: true,
        pageTitle: "Tables",
        component: Login
    },
    {
        path: "/signup",
        name: 'signup',
        exact: true,
        pageTitle: "Tables",
        component: Signup
    },
    {
        path: "/forgotpassword",
        name: 'forgotpassword',
        exact: true,
        pageTitle: "Tables",
        component: ForgotPassword
    },
    {
        path: "/notfound",
        name: 'notfound',
        exact: true,
        pageTitle: "Tables",
        component: NotFound
    },
    {
        path: "/internalserver",
        name: 'internalserver',
        exact: true,
        pageTitle: "Tables",
        component: InternalServer
    },
    {
        path: "/icons",
        name: 'icons',
        exact: true,
        pageTitle: "Icons",
        component: Icons
    },
    {
        path: "/icons-feather",
        name: 'icons-feather',
        exact: true,
        pageTitle: "Icons",
        component: IconsFeather
    },
    {
        path: "/icons-line",
        name: 'icons-line',
        exact: true,
        pageTitle: "Icons",
        component: IconsLine
    },
    {
        path: "/icons-flag",
        name: 'icons-flag',
        exact: true,
        pageTitle: "Icons",
        component: IconsFlags
    },
    {
        path: "/icons-payments",
        name: 'icons-payments',
        exact: true,
        pageTitle: "Icons",
        component: IconsPayments
    },
    {
        path: "/charts",
        name: 'charts',
        exact: true,
        pageTitle: "Charts",
        component: Charts
    },
    {
        path: "/charts-e",
        name: 'charts-e',
        exact: true,
        pageTitle: "Charts",
        component: ChartsE
    },
    {
        path: "/charts-c3",
        name: 'charts-c3',
        exact: true,
        pageTitle: "Charts",
        component: ChartsC3
    },
    {
        path: "/charts-knob",
        name: 'charts-knob',
        exact: true,
        pageTitle: "Charts",
        component: ChartsKnob
    },
    {
        path: "/charts-sparkline",
        name: 'charts-sparkline',
        exact: true,
        pageTitle: "Charts",
        component: ChartsSparkline
    },

    {
        path: "/forms",
        name: 'forms',
        exact: true,
        pageTitle: "Forms Elements",
        component: Forms
    },
    {
        path: "/form-advanced",
        name: 'form-advanced',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormAdvanced
    },
    {
        path: "/form-validation",
        name: 'form-validation',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormValidation
    },
    {
        path: "/form-wizard",
        name: 'form-wizard',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormWizard
    },
    {
        path: "/form-summernote",
        name: 'form-summernote',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormSummernote
    },

    {
        path: "/tables",
        name: 'tables',
        exact: true,
        pageTitle: "Tables",
        component: Tables
    },
    {
        path: "/tables-datatable",
        name: 'tables-datatable',
        exact: true,
        pageTitle: "Tables",
        component: DataTables
    },
    {
        path: "/tables-color",
        name: 'tables-color',
        exact: true,
        pageTitle: "Tables",
        component: TablesColor
    },
    {
        path: "/tables-basic",
        name: 'tables-basic',
        exact: true,
        pageTitle: "Tables",
        component: TablesBasic
    },

    {
        path: "/widgets",
        name: 'widgets',
        exact: true,
        pageTitle: "Widgets",
        component: Widgets
    },
    {
        path: "/w-card",
        name: 'w-card',
        exact: true,
        pageTitle: "Widgets",
        component: WCard
    },
    {
        path: "/w-statistics",
        name: 'w-statistics',
        exact: true,
        pageTitle: "Widgets",
        component: WStatistics
    },
    {
        path: "/w-data",
        name: 'w-data',
        exact: true,
        pageTitle: "Widgets",
        component: WData
    },
    {
        path: "/w-social",
        name: 'w-social',
        exact: true,
        pageTitle: "Widgets",
        component: WSocial
    },
    {
        path: "/w-other",
        name: 'w-other',
        exact: true,
        pageTitle: "Widgets",
        component: WOther
    },
    {
        path: "/page-search",
        name: 'page-search',
        exact: true,
        pageTitle: "Search",
        component: Search
    },
    {
        path: "/app-calendar",
        name: 'app-calendar',
        exact: true,
        pageTitle: "Calendar",
        component: AppCalendar
    },
    {
        path: "/app-contact",
        name: 'app-contact',
        exact: true,
        pageTitle: "Contact",
        component: AppContact
    },
    {
        path: "/app-chat",
        name: 'app-chat',
        exact: true,
        pageTitle: "Friends Group",
        component: AppChart
    },
    {
        path: "/app-filemanager",
        name: 'app-filemanager',
        exact: true,
        pageTitle: "File Manager",
        component: AppFilemanager
    },
    {
        path: "/app-setting",
        name: 'app-setting',
        exact: true,
        pageTitle: "App Setting",
        component: AppSetting
    },
    {
        path: "/profile",
        name: 'profile',
        exact: true,
        pageTitle: "My Profile",
        component: Profile
    },
    {
        path: "/maps",
        name: 'maps',
        exact: true,
        pageTitle: "Vector Maps",
        component: Maps
    },
    {
        path: "/gallery",
        name: 'gallery',
        exact: true,
        pageTitle: "Image Gallery",
        component: Gallery
    },
];

export default Routes;