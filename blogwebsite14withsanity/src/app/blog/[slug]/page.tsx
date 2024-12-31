import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const query = `*[_type=='post']{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title,
    summary,
    image,
    content,
    author->{
      bio,
      image,
      name
    }
  }[0]`;

  const post = await client.fetch(query);

  // If no post was found, or if it’s missing the main fields, handle gracefully.
  if (!post) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <p>The blog post you're looking for doesn’t exist.</p>
      </div>
    );
  }

  const {
    title = "Untitled Post",
    summary = "No summary available",
    image,
    content = [],
    author = {}
  } = post;

  // Instead of destructuring `author.image` and `author.name` directly, do a fallback:
  const authorImage = author.image || null;
  const authorName = author.name || "Anonymous";
  const authorBio = author.bio || "Author info not available";

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {title}
      </h1>

      {/* Featured Image */}
      {image ? (
        <Image
          src={urlForImage(image)}
          width={500}
          height={500}
          alt={title}
          className="rounded"
        />
      ) : (
        <p>No featured image provided for this post.</p>
      )}

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {summary}
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        {authorImage ? (
          <Image
            src={urlForImage(authorImage)}
            width={200}
            height={200}
            alt={authorName}
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
        ) : (
          <div className="h-12 w-12 sm:h-24 sm:w-24 bg-gray-300 rounded-full flex items-center justify-center text-white">
            No Author Image
          </div>
        )}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{authorName}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {authorBio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section
        className="text-lg leading-normal text-dark/80 dark:text-light/80
          prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
          prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
          prose-strong:text-dark dark:prose-strong:text-white"
      >
        {content.length ? (
          <PortableText value={content} />
        ) : (
          <p>No content available for this post.</p>
        )}
      </section>
    </article>
  );
}



// import Image from "next/image";
// import { client } from "../../../../sanity/lib/client";
// import { urlForImage } from "../../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";


// export const revalidate = 60; //seconds

//  export async function generateStaticParams() {
//   const query = `*[_type=='post']{
//     "slug":slug.current
//   }`;
//   const slugs = await client.fetch(query);
//   const slugRoutes = slugs.map((item:{slug:string})=>(
//     item.slug
//   ));
//   // console.log(slugRoutes)
//   return slugRoutes.map((slug:string)=>(
//     {slug}
//   ))
  
// }

// // To create static pages for dynamic routes
// export default async function page({params:{slug}}:{params:{slug:string}}) {

//   const query = `*[_type=='post' && slug.current=="${slug}"]{
//     title,summary,image,content,
//       author->{bio,image,name}
//   }[0]`;
//   const post = await client.fetch(query);
//   // console.log(post);



//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

//       {/* Blog Title */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//         {post.title}
//       </h1>

//       {/* Featured Image */}
//       <Image
//         src={urlForImage(post.image)}
//         width={500}
//         height={500}
//         alt="AI for everyone"
//         className="rounded"
//       />

//       {/* Blog Summary Section */}
//       <section>
//       <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//         Summary
//       </h2>
//       <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//         {post.summary}
//       </p>
//       </section>

//       {/* Author Section (Image & Bio) */}
//       <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//         <Image
//           src={urlForImage(post.author.image)}
//           width={200}
//           height={200}
//           alt="author"
//           className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//         />
//         <div className="flex flex-col gap-1">
//           <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
//           <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//             {post.author.bio}
//           </p>
//         </div>
//       </section>

//       {/* Main Body of Blog */}
//       <section className="text-lg leading-normal text-dark/80 dark:text-light/80
//       prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
//       prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
//       prose-strong:text-dark dark:prose-strong:text-white
      
//       ">
//         <PortableText 
//         value={post.content} 
//         // components={components} 
//         />
        
//       </section>
//     </article>
//   );
// }
