import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import posts from "@/data/post";
import Link from "next/link";
import { Post } from "@/types/posts";

interface PostTableProps {
  limit?: number;
  title?: string;
}

export const PostTable = ({ limit, title }: PostTableProps) => {
  // sort the post based on the date...
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filterPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10 bg-white rounded-md">
      <h3 className="text-2xl p-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        {/* <TableCaption>A List of recent posts</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableCell className="hidden md:table-cell">View</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="text-white font-semibold text-xs bg-black py-2 px-4 rounded-md">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
