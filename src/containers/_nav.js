import React from "react";
import CIcon from "@coreui/icons-react";

export default [
  {
    _tag: "CSidebarNavItem",
    name: "Analytics",
    to: "/analytics/dtlz2-nbi-4d",
    icon: "cil-chart",
    badge: {
      color: "info",
    },
  },
  /* {
    _tag: "CSidebarNavDropdown",
    name: "Examples",
    // route: "/base",
    icon: "cil-library-building",
    _children: [
      {
        _tag: "CSidebarNavDropdown",
        name: "C0DTLZ2",
        // to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "3D",
            to: "/analytics/c0dtlz2-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "4D",
            to: "/analytics/c0dtlz2-nbi-4d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "8D",
            to: "/analytics/c0dtlz2-nbi-8d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "C2DTLZ2",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "3D",
            to: "/analytics/c2dtlz2-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "4D",
            to: "/analytics/c2dtlz2-nbi-4d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "5D",
            to: "/analytics/c2dtlz2-nbi-5d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "8D",
            to: "/analytics/c2dtlz2-nbi-8d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "CDEBMDK",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "3D",
            to: "/analytics/cdebmdk-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "4D",
            to: "/analytics/cdebmdk-nbi-4d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "8D",
            to: "/analytics/cdebmdk-nbi-8d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "CRASH",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "CRASH-3D",
            to: "/analytics/crash-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "CRASH-C1-3D",
            to: "/analytics/crash-c1-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "CRASH-C2-3D",
            to: "/analytics/crash-c2-nbi-3d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "DEBMDK-ALL",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "3D",
            to: "/analytics/debmdk-all-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "4D",
            to: "/analytics/debmdk-all-nbi-4d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "8D",
            to: "/analytics/debmdk-all-nbi-8d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "DEBMDK",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "3D",
            to: "/analytics/debmdk-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "4D",
            to: "/analytics/debmdk-nbi-4d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "8D",
            to: "/analytics/debmdk-nbi-8d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "DTLZ2",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "3D",
            to: "/analytics/dtlz2-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "4D",
            to: "/analytics/dtlz2-nbi-4d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "8D",
            to: "/analytics/dtlz2-nbi-8d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "DTLZ8",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "3D",
            to: "/analytics/dtlz8-nbi-3d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "4D",
            to: "/analytics/dtlz8-nbi-4d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "6D",
            to: "/analytics/dtlz8-nbi-6d",
          },
          {
            _tag: "CSidebarNavItem",
            name: "8D",
            to: "/analytics/dtlz8-nbi-8d",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "GAA",
        //to: "/base/breadcrumbs",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "10D",
            to: "/analytics/gaa-nbi-10d",
          },
        ],
      },
    ],
  }, */
  {
    _tag: "CSidebarNavItem",
    name: "Decision Making",
    to: "/dm",
    icon: "cil-balance-scale",
    badge: {
      color: "info",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Spread Sheet",
    to: "/ss",
    icon: "cil-spreadsheet",
    badge: {
      color: "info",
    },
  },
  // Original nav
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Original Nav"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Theme"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Colors",
    to: "/theme/colors",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Typography",
    to: "/theme/typography",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Base",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Breadcrumb",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Cards",
        to: "/base/cards",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Carousel",
        to: "/base/carousels",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Collapse",
        to: "/base/collapses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Forms",
        to: "/base/forms",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Jumbotron",
        to: "/base/jumbotrons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List group",
        to: "/base/list-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navs",
        to: "/base/navs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Navbars",
        to: "/base/navbars",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pagination",
        to: "/base/paginations",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Popovers",
        to: "/base/popovers",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Progress",
        to: "/base/progress-bar",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Switches",
        to: "/base/switches",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tables",
        to: "/base/tables",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tabs",
        to: "/base/tabs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Tooltips",
        to: "/base/tooltips",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Buttons",
    route: "/buttons",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Buttons",
        to: "/buttons/buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Brand buttons",
        to: "/buttons/brand-buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Buttons groups",
        to: "/buttons/button-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dropdowns",
        to: "/buttons/button-dropdowns",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Charts",
    to: "/charts",
    icon: "cil-chart-pie",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Icons",
    route: "/icons",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Free",
        to: "/icons/coreui-icons",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Flags",
        to: "/icons/flags",
      },
      {
        _tag: "CSidebarNavItem",
        name: "CoreUI Brands",
        to: "/icons/brands",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Notifications",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Alerts",
        to: "/notifications/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Badges",
        to: "/notifications/badges",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Modal",
        to: "/notifications/modals",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Toaster",
        to: "/notifications/toaster",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Widgets",
    to: "/widgets",
    icon: "cil-calculator",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Disabled",
    icon: "cil-ban",
    badge: {
      color: "secondary",
      text: "NEW",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Labels"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label danger",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-danger",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label info",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-info",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label warning",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-warning",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];
