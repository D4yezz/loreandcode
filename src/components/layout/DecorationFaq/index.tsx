import Image from "next/image";

function LeftDecoration() {
  return (
    <>
      <div className="absolute z-0 flex items-center justify-center rotate-45 w-50 h-50 lg:w-60 lg:h-60 lg:-top-20 -top-24 -right-22 lg:-right-30">
        <div className="w-full h-full bg-main shadow-shadow rotate-90 rounded-[50%] border-2"></div>
        <div className="lg:w-30 lg:h-30 w-25 h-25 absolute bg-pink-400 rounded-[50%] border-3"></div>
      </div>
      <div className="absolute -top-8 -left-8 rotate-45 flex flex-col gap-2 z-0 w-50 h-fit">
        <div className="w-[60%] h-8 bg-main border-2"></div>
        <div className="w-[90%] h-8 bg-main border-2"></div>
        <div className="w-[50%] h-8 bg-main border-2"></div>
        <div className="w-[70%] h-8 bg-main border-2"></div>
      </div>
      <div className="absolute z-0 top-18 lg:left-1/3 right-0 w-30 h-30 -rotate-12">
        <Image
          src={"/home/star3.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="star-element-2"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 flex flex-col bg-white border-2 h-45 w-25 bottom-7 left-10 shadow-shadow rotate-50">
        <div className="w-full h-full px-2 pt-2 ">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={
                "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Mzllcm82MTd2b2x1eW5zOWgzOHlpcmhsNG42ZHFkd2wxaTBobDB4eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iMlxBLNcvorRCMyNoi/giphy.gif"
              }
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="wallpaper"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="object-cover object-center pointer-events-none select-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full px-2 py-1 h-fit">
          <span className="text-[9px] font-semibold">Lore & Code</span>
        </div>
      </div>
      <div className="absolute bottom-4 -right-16 z-0 bg-main w-100 h-10 border-3 -rotate-25 flex items-center gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="font-bold text-xl select-none font-archivo text-nowrap whitespace-nowrap uppercase"
          >
            Lore & Code
          </span>
        ))}
      </div>
    </>
  );
}
function RightDecoration() {
  return (
    <>
      <div className="absolute z-10 flex items-center gap-6 top-5 -right-5 w-[120%] h-10 bg-third border-y-2 rotate-12">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="font-bold text-2xl select-none font-archivo text-nowrap whitespace-nowrap uppercase"
          >
            Lore & Code
          </span>
        ))}
      </div>
      <div className="absolute z-0 flex items-center gap-8 top-40 -right-5 w-[120%] h-10 bg-pink-400 border-y-2 -rotate-12">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="font-bold text-2xl select-none font-archivo text-nowrap whitespace-nowrap uppercase"
          >
            Lore & Code
          </span>
        ))}
      </div>
      <div className="absolute z-0 flex items-center gap-8 bottom-1/3 -right-15 w-[120%] h-10 bg-main border-y-2 rotate-22">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="font-bold text-2xl select-none font-archivo text-nowrap whitespace-nowrap uppercase"
          >
            Lore & Code
          </span>
        ))}
      </div>
      <div
        className={`absolute lg:z-0 z-10 w-14 h-14 -right-2 lg:bottom-10 lg:left-20 -rotate-28`}
      >
        <Image
          src={`/home/eye-right.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="eye-image"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
          className="object-contain pointer-events-none select-none"
        />
      </div>
      <div className="absolute z-0 flex flex-col h-32 bg-white border-2 w-46 bottom-2 right-30 shadow-shadow -rotate-18">
        <div className="flex items-center justify-between w-full h-5 px-2 border-b-2">
          <span className="text-[10px] font-semibold">Lore & Code</span>
          <div className="flex items-center gap-1 w-fit">
            <div className="bg-red-500 rounded-full size-2 border"></div>
            <div className="bg-yellow-400 rounded-full size-2 border"></div>
            <div className="bg-green-500 rounded-full size-2 border"></div>
          </div>
        </div>
        <div className="w-full h-full p-1">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <Image
              src={
                "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXR5Ymw1bGh1c210OHI4bGNwaTE3YnR3enA3ZjgxZnk5bXlwcmplNyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/3OBdqJBogq1HB2812z/giphy.gif"
              }
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="wallpaper"
              draggable={false}
              onDragStart={(event) => event.preventDefault()}
              className="object-cover pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { LeftDecoration, RightDecoration };
