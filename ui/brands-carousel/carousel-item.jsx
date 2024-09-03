import * as React from "react";
import Image from "next/image";

function CarouselLink({ href, children }) {
  return (
    <a
      href={href ?? "#"}
      className="inline-block p-8 h-36 flex justify-center items-center bg-green-700"
      draggable="false"
      target="_blank"
    >
      {children}
    </a>
  );
}


function CarouselItem({
  imgSrc,
  imgTitle,
  imgWidth,
  imgHeight,
  href,
}) {
  return href !== null ? (
    <CarouselLink href={href}>
      <Image
        src={imgSrc}
        alt={imgTitle}
        width={imgWidth}
        height={imgHeight}
        draggable="false"
      />
    </CarouselLink>
  ) : (
    <div className="inline-block p-8 h-36 flex justify-center items-center">
      <Image
        src={imgSrc}
        alt={imgTitle}
        width={imgWidth}
        height={imgHeight}
        draggable="false"
      />
    </div>
  );
}

export default CarouselItem;