"use client"
import React from "react";
import {
  FaRobot,
  FaWallet,
  FaShoppingCart,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import { navItems } from "../constants/constants";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className=" flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow">
                <FaRobot className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">Rentelligence</span>
              <span className="text-[10px] text-muted-foreground -mt-1 tracking-wide">
                WORLD'S LARGEST AI MARKETPLACE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                <button
                  className={`inline-flex items-center cursor-pointer gap-2 h-9 rounded-md px-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    item.active
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      : "hover:bg-white/5 hover:text-purple-400"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              </a>
            ))}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-2 h-9 rounded-md px-3 text-sm text-muted-foreground hover:text-purple-400 hover:bg-accent transition-colors">
            <FaWallet className="w-4 h-4" />
            <span className="hidden xl:inline">Connect Wallet</span>
          </button>

          <a href="/cart" className="relative">
            <button className="h-10 w-10 rounded-md hover:bg-purple-500/10 flex items-center justify-center relative">
              <FaShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-[10px] flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </a>

          <button className="hidden md:flex items-center gap-2 h-9 rounded-md px-3 border border-white/10 hover:bg-white/5 hover:border-purple-500/30 transition-colors">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold">
              U
            </div>
            <span className="hidden xl:inline">Account</span>
            <FaChevronDown className="w-3 h-3" />
          </button>

          <button className="lg:hidden h-10 w-10 rounded-md hover:bg-purple-500/10 flex items-center justify-center">
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}