import GridCell from "./GridCell";

const cells = [
  {
    cssSpan: "col-span-2",
    title: "How to use Tailwind classes",
    content: `We'll dive into the most important Tailwind classes and use them a TON. There are a lot of useful classes like spacing, backgrounds, borders, shadows, and typography. We'll type the Tailwind classes many times over to ensure that repeitition is our greatest learning tool.`,
  },
  {
    cssSpan: "col-span-2",
    title: "Make good looking designs",
    content: `There's a certain process to designing with Tailwind that we'll take to make our designs look good. Some easy to remember rules are all it takes to get a good design. We'll also talk about ideas and action items to take a good design and make it great.`,
  },
  {
    cssSpan: "col-span-2",
    title: "Why Tailwind is different/better",
    content: `To be completely honest, I didn't like Tailwind at first. It felt like inline styles to me (and maybe still does). After using it more and more though, I've come to absolutely love it. I dread jumping into a project without Tailwind now.`,
  },

  {
    cssSpan: "col-span-3",
    title: "How to build this site (site-ception!)",
    content: `The site you're on (BeginnerTailwind.com) is built with Tailwind and has 0 custom css. You can take all of the code from this site and use it for your own landing pages or sites! All the code is available to you with course purchase.`,
  },
  {
    cssSpan: "col-span-3",
    title: "A fun and methodical design process",
    content: `I struggle with making things look good and don't consider myself a designer. What I try to do is have a formula for making things look good. I focus on design in this order: spacing, box properties, typography, fun element to pop. We'll talk about this all throughout the course.`,
  },
];

function WhatYouWillLearn() {
  return (
    <div className="py-32 text-gray-700 bg-gray-200">
      <div className="container px-6 mx-auto">
        <div className="relative mb-16 lg:mb-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 lg:text-6xl">
            What You'll Learn In This Course
          </h2>

          <div className="absolute top-0 left-0 w-1/3 h-2 transform -translate-y-4 rounded bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-2 transform translate-y-4 rounded bg-gradient-to-r from-purple-400 to-blue-400"></div>
        </div>

        <div className="grid-cols-6 gap-10 space-y-6 lg:grid lg:space-y-0">
          {cells.map((cell, index) => (
            <GridCell {...cell} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatYouWillLearn;
