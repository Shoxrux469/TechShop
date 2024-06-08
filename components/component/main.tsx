import { Button } from "@/components/ui/button";
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface IFooterIcons extends React.SVGProps<SVGSVGElement> {}

export function Main() {
  return (
    <div className="bg-white">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6 text-[#004643]" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent
              className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg"
            >
              <div className="grid gap-4 p-6">
                <Link className="flex items-center" href="#">
                  <MountainIcon className="h-6 w-6 text-[#004643]" />
                  <span className="ml-2 text-[#004643] font-bold">Fitness</span>
                </Link>
                <nav className="grid gap-2">
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <HomeIcon className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <LibraryIcon className="h-5 w-5" />
                    Catalog
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <InfoIcon className="h-5 w-5" />
                    About
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-[#004643] font-medium hover:text-[#00302f]"
                    href="#"
                  >
                    <ContactIcon className="h-5 w-5" />
                    Contact
                  </Link>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
          <Link className="flex items-center" href="#">
            <MountainIcon className="h-6 w-6 text-[#004643]" />
            <span className="ml-2 text-[#004643] font-bold">Fitness</span>
          </Link>
          <div className="relative w-full max-w-md">
            <Input
              className="w-full rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#004643]"
              placeholder="Search products..."
              type="text"
            />
            <Button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              size="icon"
              variant="ghost"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Link
              className="text-[#004643] font-medium hover:text-[#00302f]"
              href="#"
            >
              Contact
            </Link>
            <Button size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6 text-[#004643]" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden bg-[#004643]">
        <div className="container mx-auto px-6 py-12 text-white">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="order-2 mt-6 lg:order-1 lg:mt-0">
              <h2 className="text-5xl font-bold">Spring Collection</h2>
              <p className="mt-4 text-xl">
                Discover our brand new range of fitness equipment.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-[300px] bg-gray-300" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm mx-auto">
            <div className="bg-gray-100">
              <Image
                alt="Product"
                className="w-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold">Product Name</h4>
              <p className="text-gray-600">
                Short product description goes here.
              </p>
              <Button className="mt-3">View Product</Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#004643] text-white">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contacts</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5" />
                <span>info@fitness.com</span>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className="h-5 w-5" />
                <span>123 Main St, Anytown USA</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Catalog</h4>
            <nav className="grid gap-2">
              <Link className="hover:underline" href="#">
                Treadmills
              </Link>
              <Link className="hover:underline" href="#">
                Ellipticals
              </Link>
              <Link className="hover:underline" href="#">
                Bikes
              </Link>
              <Link className="hover:underline" href="#">
                Weights
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Company</h4>
            <nav className="grid gap-2">
              <Link className="hover:underline" href="#">
                About Us
              </Link>
              <Link className="hover:underline" href="#">
                Careers
              </Link>
              <Link className="hover:underline" href="#">
                Blog
              </Link>
              <Link className="hover:underline" href="#">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <Link className="hover:text-gray-300" href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300" href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300" href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300" href="#">
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Input
                className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="rounded-full">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="bg-[#00302f] py-4 text-center text-sm">
          © 2024 Fitness. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const ContactIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
};

const FacebookIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

const HomeIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

const InfoIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
};

const InstagramIcon: React.FC = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

const LibraryIcon: React.FC = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  );
};

const LinkedinIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

const LocateIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
};

const MailIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

const MenuIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};

const MountainIcon: React.FC = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

const PhoneIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
};

const SearchIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

const TwitterIcon: React.FC<IFooterIcons> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};
