"use client";

import Link from "next/link";
import { ModeToggle } from "../components/ModeToggle";
import Image from "next/image";
import Logo from "@/assets/13.png";
export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background border-b shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          {/* Logo Component */}
          <Image
            src={Logo}
            alt="Wealth Radar Logo"
            width={60}
            height={60}
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-foreground">Wealth Radar</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
            Home
          </Link>
          <Link href="/finance" className="text-sm font-medium text-foreground hover:text-primary transition">
            Finance
          </Link>
          <Link href="/expenses" className="text-sm font-medium text-foreground hover:text-primary transition">
            Expenses
          </Link>
          <Link href="/investments" className="text-sm font-medium text-foreground hover:text-primary transition">
            Investments
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
            About
          </Link>
        </nav>

        {/* Right-Side Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <button className="bg-primary text-white text-sm font-medium px-6 py-2 rounded hover:bg-primary-dark transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
