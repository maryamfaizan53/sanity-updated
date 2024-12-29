// app/blog/[slug]/page.tsx

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { components } from "@/app/components/customComponents";

export const revalidate = 60; //seconds

 export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item:{slug:string})=>(
    item.slug
  ));
  // console.log(slugRoutes)
  return slugRoutes.map((slug:string)=>(
    {slug}
  ))
  
}

// To create static pages for dynamic routes
export default async function page({params:{slug}}:{params:{slug:string}}) {

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title,summary,image,content,
      author->{bio,image,name}
  }[0]`;
  const post = await client.fetch(query);
  // console.log(post);



// export const revalidate = 60; // optional

// // 1) Just define your own type, avoiding "extends PageProps" or similar
// type BlogPageProps = {
//   params: {
//     slug: string;
//   };
// };

// // 2) Make sure generateStaticParams() returns an array of plain objects
// export async function generateStaticParams() {
//   const query = `*[_type == "post"]{ "slug": slug.current }`;
//   const slugs = await client.fetch(query);

//   return slugs.map((item: { slug: string }) => ({
//     slug: item.slug,
//   }));
// }

// // 3) Page component receives `params.slug`
// export default async function Page({ params: { slug } }: BlogPageProps) {
//   // Use a parameterized query
//   const query = `
//     *[_type=="post" && slug.current == $slug]{
//       title,
//       summary,
//       image,
//       content,
//       author->{
//         bio,
//         image,
//         name
//       }
//     }[0]
//   `;

//   // fetch the matching post
//   const post = await client.fetch(query, { slug });

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold">
        {post.title}
      </h1>
      <Image
        src={post.image}
        width={500}
        height={500}
        alt="Post Cover"
        className="rounded"
      />
      {/* etc... */}
      <section className="text-lg leading-normal">
        <PortableText value={post.content} components={components} />
      </section>
    </article>
  );
}


// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// import { components } from "@/app/components/customComponents";

// // How often to revalidate (if you use ISR)
// export const revalidate = 60;

// // 1) Define the shape of the props your page expects.
// interface BlogPageProps {
//   params: {
//     slug: string;
//   };
// }

// // 2) Fix generateStaticParams to match the new App Router shape.
// export async function generateStaticParams() {
//   const query = `*[_type=="post"]{ "slug": slug.current }`;
//   const slugs = await client.fetch(query);

//   // Return objects matching the dynamic route param name `[slug]`.
//   // Note that we do NOT wrap 'slug' under 'params' for App Router.
//   return slugs.map((item: { slug: string }) => ({
//     slug: item.slug,
//   }));
// }

// // 3) Page component matches the above BlogPageProps shape
// export default async function Page({ params: { slug } }: BlogPageProps) {
//   // Optionally, use a parameterized query for better practice
//   const query = `
//     [_type=="post" && slug.current == $slug]{
//       title,
//       summary,
//       image,
//       content,
//       author->{
//         bio,
//         image,
//         name
//       }
//     }[0]
//   `;

//   // 4) Fetch the post based on the slug
//   const post = await client.fetch(query, { slug });

//   // 5) Return JSX
//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-white">
//         {post.title}
//       </h1>

//       <Image
//         src={urlFor(post.image)}
//         width={500}
//         height={500}
//         alt="Post Cover Image"
//         className="rounded"
//       />

//       <section>
//         <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-black">
//           Summary
//         </h2>
//         <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//           {post.summary}
//         </p>
//       </section>

//       <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//         <Image
//           src={urlFor(post.author.image)}
//           width={200}
//           height={200}
//           alt="Author Avatar"
//           className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//         />
//         <div className="flex flex-col gap-1">
//           <h3 className="text-xl font-bold text-black dark:text-white">
//             {post.author.name}
//           </h3>
//           <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//             {post.author.bio}
//           </p>
//         </div>
//       </section>

//       <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-black prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-black dark:prose-strong:text-white">
//         <PortableText value={post.content} components={components} />
//       </section>
//     </article>
//   );
// }


// // import Image from "next/image";
// // import { client } from "@/sanity/lib/client";
// // import { urlFor } from "@/sanity/lib/image";
// // import { PortableText } from "@portabletext/react";
// // import { components } from "@/app/components/customComponents";

// // export const revalidate = 60; // seconds

// // export async function generateStaticParams() {
// //   const query = `*[_type=='post']{
// //     "slug":slug.current
// //   }`;
// //   const slugs = await client.fetch(query);
// //   return slugs.map((item: { slug: string }) => ({
// //     params: { slug: item.slug },
// //   }));
// // }

// // // To create static pages for dynamic routes
// // export default async function page({ params: { slug } }: { params: { slug: string } }) {
// //   const query = `*[_type=='post' && slug.current=="${slug}"]{
// //     title,summary,image,content,
// //     author->{bio,image,name}
// //   }[0]`;
// //   const post = await client.fetch(query);

// //   return (
// //     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
// //       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-white">
// //         {post.title}
// //       </h1>
// //       <Image
// //         src={urlFor(post.image)}
// //         width={500}
// //         height={500}
// //         alt="beauty images"
// //         className="rounded"
// //       />
// //       <section>
// //         <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-black">
// //           Summary
// //         </h2>
// //         <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
// //           {post.summary}
// //         </p>
// //       </section>
// //       <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
// //         <Image
// //           src={urlFor(post.author.image)}
// //           width={200}
// //           height={200}
// //           alt="author"
// //           className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
// //         />
// //         <div className="flex flex-col gap-1">
// //           <h3 className="text-xl font-bold text-black dark:text-white">
// //             {post.author.name}
// //           </h3>
// //           <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
// //             {post.author.bio}
// //           </p>
// //         </div>
// //       </section>
// //       <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-black prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-black dark:prose-strong:text-white">
// //         <PortableText value={post.content} components={components} />
// //       </section>
// //     </article>
// //   );
// // }


