
import Image from "next/image";

export default function Home() {
  return (
    //classname: react js specific, converts code into html when rendering
    // both are distinct html elements despite the same name (div and main)
    //DIV_________________________________________
    // div: container for layout and styling purposes
      //sets up pg layout grid
        //font-sans - font family sans-serif
        //grid - makes element css grid container
        // grid-rows-[20px_1fr_20px] - defines 3 rows in grid 20 px tall, flexible(remaining space), and 20 px tall 
        // items-center - vertically centers content WITHIN EACH GRID CELL
        // justify-items-center - Horixontally centers content WITHIN EACH GRID CELL
        // min-h-screen  - ensures container at least full veiwport height
          // veiwport height - the height of the visible area available(webpage size; screen size)
        // p-8 - adds 2rem(~32px)of padding on all sides
        // pb-20 - adds extra padding on bottom(5rem/80px)
            // rem = pb *4
        //  gap-16 - adds 4 rem gap between grid colums rows
        // sm:p-20 - on small screens and up(sm breakpoint >= 640 px) increase padding to 5rem
    
     //this div in conclusion with a 3 row layout(title, numbers, buttons)centered both directions with padding

    //MAIN___________________________________________-
    //main: reps dominent content of document
      //flex - turns main into flex container
        // flex container : a flexible item that aligns grows shrinks and spaces themselves based on space available
      //flex-col - stacks kids vertically
      //gap-[32px] - gap between flex items
      //row-start-2 - puts main in row 2 of parent grid. aka flexible row
      //items-center - centers kids by default
      //sm:items-start - aligns kids to left on small screens*/}
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <Image
          className="dark:invert"
        //inverts images colors only if the computer is in dark mode
          src="/next.svg" //REQUIRED
          //image source
          //files inside /public directory served from site root
          //next.svg points to prohext/public/next svg
          alt="Next.js logo" //REQUIRED
          //alt text for accesisbility. if image doesnt load, text appears instead
          width={180}//REQUIRED
          height={38}//REQUIRED
          //displayed size of logo
          priority
          //optimization flag. tells next js to preload image. use this for logos headers, etc
        />

        {/*proper comment syntax*/}
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
        {/*ol - ordered list
          font-mono - monospace font
          list-inside - puts numbers inside txt block
          list-decimal - uses decimal numbering
          text-sm/6  - font size small and line height to 1.5 rem(6*.25)
          text-center 
          sm:text-left*/}
          <li className="mb-2 tracking-[-.01em]">
          {/*first item in list
          mb-2 - adds margin of .5 rem
          tracking-[-.01em] - adjusts letter spacing slightly tighter(negative teacking = letters closer together)*/}
            Get started by editing{" "}{/* text + a space. CANT LEAVE A BLANK SPACE BEFORE A NESTED ELEMENT IN JSX */}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
            {/*code - reps code for a line
            bg-black/[.05] - light gray background at .05 opacity
            dark:bg-white/[.06] -  .06 opacity on dark mode
            font-mono 
            font-semibold - slightly bolder txt
             px-1 py-0.5  - horizontal padding .25 rem vertical padding .125 rem
             rounded - slightly rounded corners */}
              app/page.tsx
              {/*display "app/page.tsx" inside the code reqs above */}
      
            </code>
            
          </li>
          <li className="tracking-[-.01em]">  {/* no bottom margin this time*/}
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/*deploys button */}
          <a
         
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
