import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LanguageSwitcher from "../../language/languageSwitcher";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  DocumentTextIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import {
  Home,
  LogIn as LoginIcon,
  UserCheck as UserCheckIcon,
} from "react-feather";
import { FcAbout, FcNews, FcServices } from "react-icons/fc";

const services = [
  { name: "Structural Design", to: "/services/structural-design" },
  { name: "Project Management", to: "/services/project-management" },
  {
    name: "Construction Supervision",
    to: "/services/construction-supervision",
  },
  { name: "Feasibility Studies", to: "/services/feasibility-studies" },
];

const navLinkClass =
  "flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-indigo-600 hover:bg-gray-100 rounded transition-colors px-2 py-1";
const navLinkActiveClass = "text-indigo-700 bg-gray-100";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${navLinkClass} ${isActive ? navLinkActiveClass : ""}`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-10 w-auto"
              src="./adyam-logo.png"
              alt="Adyam Engineering Logo"
              loading="lazy"
            />
            <span className="font-bold text-lg">{t("navbar.companyName")}</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          {user ? (
            <NavLink to="/dashboard" className={getNavLinkClass}>
              <UserCheckIcon className="h-5 w-5" />
              {t("navbar.adminDashboard")}
            </NavLink>
          ) : (
            <NavLink to="/" className={getNavLinkClass}>
              <Home size={18} /> {t("navbar.home")}
            </NavLink>
          )}

          <NavLink to="/services" className={getNavLinkClass}>
            <FcServices className="h-7 w-7" />
            {t("navbar.services")}
          </NavLink>

          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-1 text-sm font-semibold text-gray-900">
              <DocumentTextIcon className="h-5 w-5" />
              {t("navbar.services")}
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-2">
                {services.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          <NavLink
            to="/projects"
            className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:bg-gray-100 hover:border hover:border-b-blue-700"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
            {t("navbar.projects")}
          </NavLink>

          <NavLink
            to="/blog"
            className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:bg-gray-100 hover:border hover:border-b-blue-700"
          >
            <BookOpenIcon className="h-5 w-5 text-green-600" />
            {t("navbar.blogs")}
          </NavLink>

          <NavLink
            to="/news"
            className="flex items-center gap-1 text-sm font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
          >
            <FcNews className="h-5 w-5" />
            {t("navbar.news")}
          </NavLink>

          {/* <NavLink
            to="/contact"
            className="flex items-center gap-1 text-sm font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
          >
            <PhoneIcon className="h-5 w-5 text-green-600" />
            {t("navbar.contactUs")}
          </NavLink> 
          */}

          <NavLink
            to="/about"
            className="flex items-center gap-1 text-sm font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
          >
            <FcAbout className="h-5 w-5" />
            {t("navbar.aboutUs")}
          </NavLink>

          {user ? (
            <NavLink
              to="/logout"
              className="flex items-center gap-1 text-sm font-semibold text-indigo-700  hover:bg-gray-100 hover:border hover:border-b-blue-700"
            >
              {/* <UserCheckIcon className="h-5 w-5" /> */}
              {t("navbar.logout")}
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center gap-1 text-sm font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
            >
              {/* <Home size={18} />  */}
              {t("navbar.login")}
            </NavLink>
          )}
        </PopoverGroup>
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                className="h-10 w-auto"
                src="./adyam-logo.png"
                alt="Adyam Engineering Logo"
              />
              <span className="font-bold text-lg">
                {t("navbar.companyName")}
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {user ? (
              <NavLink
                to="/dashboard"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100 hover:border-b-blue-700 hover:border-indigo-600"
              >
                <UserCheckIcon className="h-5 w-5" />
                {t("navbar.adminDashboard")}
              </NavLink>
            ) : (
              <NavLink
                to="/"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100 hover:border hover:border-b-blue-700"
              >
                <Home size={18} className="inline mr-2" />
                {t("navbar.home")}
              </NavLink>
            )}

            <NavLink to="/services" className={getNavLinkClass}>
              <FcServices className="h-7 w-7" />
              {t("navbar.services")}
            </NavLink>

            {/* <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700">
                    <span>
                      <DocumentTextIcon className="h-5 w-5 inline mr-2" />
                      {t("navbar.services")}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </DisclosureButton>
                  
                  <DisclosurePanel className="pl-6">
                    {services.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure> */}
            <NavLink
              to="/projects"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
            >
              {t("navbar.projects")}
            </NavLink>
            <NavLink
              to="/blog"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
            >
              {t("navbar.blogs")}
            </NavLink>

            <NavLink
              to="/news"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
            >
              {t("navbar.news")}
            </NavLink>
            <NavLink
              to="/contact"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
            >
              {t("navbar.contactUs")}
            </NavLink>
            <NavLink
              to="/about"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900  hover:bg-gray-100 hover:border hover:border-b-blue-700"
            >
              {t("navbar.aboutUs")}
            </NavLink>
            {user ? (
              <NavLink
                to="/dashboard"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-indigo-700  hover:bg-gray-100 hover:border hover:border-b-blue-700"
              >
                {t("navbar.adminDashboard")}
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="block rounded-lg px-3 py-2 text-base font-semibold text-indigo-700  hover:bg-gray-100 hover:border hover:border-b-blue-700"
              >
                {t("navbar.login")}
              </NavLink>
            )}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
