import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <div className="bg-white py-2 px-5 flex justify-between text-white">
      <Link className="flex justify-center items-center gap-2" href="/">
        <Image src={logo} alt="logo" width={40} />
        <span className="font-bold text-2xl text-black">
          Analytics Dashboard
        </span>
      </Link>
      <Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <AvatarImage src="https:github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-black">AD</AvatarFallback>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Avatar>
    </div>
  );
};
