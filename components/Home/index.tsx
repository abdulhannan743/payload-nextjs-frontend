import Image from "next/image";
import Link from "next/link";
import React from "react";

type HomeProps = {
  heading: string;
  text: string;
  link: { page: { slug: string }; label: string }[];
  slides: {
    id: string;
    media: { url: string; alt: string; width: number; height: number };
  }[];
};

export default function Home({ heading, text, link, slides }: HomeProps) {
  return (
    <div className="flex bg-white justify-between items-center pl-64 pr-64">
      <div className="w-1/2 pl-24 pr-48 mb-4">
        <h2 className="font-bold text-3xl mb-4 text-blue-500">{heading}</h2>
        <p className="text-lg text-black mb-4">{text}</p>
        {link[0] && (
          <Link href={link[0]?.page.slug}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {link[0]?.label}
            </button>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex flex-wrap justify-center items-center">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative transform transition-transform hover:scale-105 hover:shadow-lg m-2"
            style={{
              width: `${slide.media.width}px`,
              height: `${slide.media.height}px`,
              margin: "10px",
            }}
          >
            <Image
              src={slide.media.url}
              alt={slide.media.alt}
              width={slide.media.width}
              height={slide.media.height}
              layout="fixed"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// type HomeProps = {
//   heading: string;
//   text: string;
//   link: { page: { slug: string }; label: string }[];
//   slides: {
//     id: string;
//     media: { url: string; alt: string; width: number; height: number };
//   }[];
// };

// export default function Home({ heading, text, link, slides }: HomeProps) {
//   return (
//     <div className="flex bg-white justify-between px-8 items-center max-w-screen-xl mx-auto">
//       <div className="w-1/2 pr-8">
//         <h2 className="font-bold text-3xl mb-4 text-blue-500">{heading}</h2>
//         <p className="text-lg text-black mb-4">{text}</p>
//         {link[0] && (
//           <Link href={link[0]?.page.slug}>
//             <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
//               {link[0]?.label}
//             </button>
//           </Link>
//         )}
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-center items-center">
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="relative transform transition-transform hover:scale-105 hover:shadow-lg m-2"
//             style={{
//               width: `calc(50% - 16px)`,
//               height: "auto",
//             }}
//           >
//             <Image
//               src={slide.media.url}
//               alt={slide.media.alt}
//               width={slide.media.width}
//               height={slide.media.height}
//               layout="responsive"
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
