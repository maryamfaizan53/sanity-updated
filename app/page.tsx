/* eslint-disable @typescript-eslint/no-unused-vars */
import BlogCard from "./components/BlogCard";
import Image from "next/image";
import { client } from "../sanity/lib/client";

export const revalidate = 60; //seconds





// export default async function Home() {
//   const query = `*[_type=='post'] | order(_createdAt asc){
  
//     summary,title,image,
//       "slug":slug.current
//   }`;

//   const posts:Post[] = await client.fetch(query)
//   // console.log(posts)

//   return (
//     <main className="flex min-h-screen flex-col ">
//       <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
//         Most Recent blogs
//       </h1>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {
//           posts.map((post:Post)=>(
//             <BlogCard post={post} key={post.slug} />
//           ))
//         }

//       </section>
//     </main>
//   );
// }


export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
    summary, title, 
    "image": image.asset->url,
    "slug": slug.current
  }`;

  let posts: Post[] = [];
  try {
    posts = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent Blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.length > 0 ? (
          posts.map((post: Post) => (
            <BlogCard post={post} key={post.slug || post.title} />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </section>
    </main>
  );
}



// import { client } from "@/sanity/lib/client";
// import BlogCard from "@/app/components/BlogCard";

// // 1) Define your Post interface
// // interface Post {
// //   title: string;
// //   summary: string;
// //   image: string; // Adjust if your image is an object
// //   slug: string;
// // }

// export const revalidate = 60; // Optional: Revalidate every 60 seconds

// export default async function Home() {
//   const query = `*[_type == 'post'] | order(_createdAt asc) {
//     title,
//     summary,
//     image,
//     "slug": slug.current
//   }`;

//   // 2) Fetch all posts from Sanity
//   const posts: Post[] = await client.fetch(query);

//   return (
//     <main className="flex min-h-screen flex-col">
//       <h1 className="text-2xl font-bold uppercase my-12 text-center text-black dark:text-white sm:text-3xl lg:text-5xl">
//         Health and Beauty Blogs
//       </h1>

//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {posts.map((post) => (
//           <BlogCard post={post} key={post.slug} />
//         ))}
//       </section>
//     </main>
//   );
// }
// //types ki alag file hai yahan interface nhi banega


// // // Remove "use client" if not needed for client-side interactivity
// // import BlogCard from "@/app/components/BlogCard";
// // import {client} from '@/sanity/lib/client';

// // // Removed incorrect import

// // // Ensure TypeScript interface for Post is defined
// // // interface Post {
// // //   title: string;
// // //   summary: string;
// // //   image: string; // Adjust type based on your image handling
// // //   slug: string;
// // // } sanity pe titl  blog hi tha shayd

// // export default async function Home() {
// //   const query = `*[_type == 'post'] | order(_createdAt asc) {
// //     title,
// //     summary,
// //     image,
// //     "slug": slug.current
// //   }`;

// //   // Fetch posts as an array of Post
// //   const posts: Post[] = await client.fetch(query);

// //   return (
// //     <main className="flex min-h-screen flex-col ">
// //       <h1 className="text-2xl font-bold uppercase my-12 text-center text-black dark:text-white sm:text-3xl lg:text-5xl ">
// //         Health and Beauty Blogs
// //       </h1>
// //       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
// //         {posts.map((post: Post) => (
// //           <BlogCard post={post} key={post.slug} />
// //         ))}
// //       </section>
// //     </main>
// //   );
// // }
