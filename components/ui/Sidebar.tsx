import React from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  Gauge,
  StickyNote,
  ChartColumnStacked,
  CircleUser,
  CircleDollarSign,
  Cog,
} from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <Command className="mt-2 rounded-sm">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Gauge />
            <Link href="/">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <StickyNote />
            <Link href="/posts">Posts</Link>
          </CommandItem>
          <CommandItem>
            <ChartColumnStacked />
            <Link href="/categories">Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <CircleUser />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CircleDollarSign />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Cog />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
