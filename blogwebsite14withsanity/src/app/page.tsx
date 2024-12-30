import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import { client } from "../../sanity/lib/client";

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
