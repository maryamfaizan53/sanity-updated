// app/page.tsx
import { client } from "@/sanity/lib/client";
import BlogCard from "@/app/components/BlogCard";

// 1) Define your Post type
interface Post {
  title: string;
  summary: string;
  image: string; 
  slug: string;
}

export const revalidate = 60; // optional

export default async function Home() {
  const query = `*[_type == "post"] | order(_createdAt asc) {
    title,
    summary,
    image,
    "slug": slug.current
  }`;

  // 2) Fetch all posts
  const posts: Post[] = await client.fetch(query);

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl font-bold uppercase my-12 text-center">
        Health and Beauty Blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
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
