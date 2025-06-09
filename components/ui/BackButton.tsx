interface BackButtonProps {
  text: string;
  link: string;
}

import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className="text-gray-700 flex items-center text-lg hover:underline font-semibold gap-2"
    >
      <ArrowLeftCircleIcon size={24} /> {text}
    </Link>
  );
};
