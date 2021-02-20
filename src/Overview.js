function Overview() {
  return (
    <div className="relative pt-12 pb-24 bg-purple-700">
      {/* gray square at the bottom */}
      <div className="absolute bottom-0 w-full h-64 bg-gray-300"></div>

      {/* overview */}

      <div className="container relative px-6 mx-auto lg:px-0">
        <h2 className="mb-10 text-6xl font-bold text-purple-100">
          Writing CSS is tough stuff!
        </h2>
        <div className="flex space-x-16">
          {/* left column */}

          <div className="w-2/3 p-16 space-y-8 text-lg leading-relaxed text-gray-800 bg-white rounded shadow-xl">
            <p>
              Tailwind makes writing CSS easier and lets us customize our
              designs faster than any other CSS framework. If you want a CSS
              framework that has pre-built components, then Tailwind may not be
              for you. If you want a CSS framework that lets you design quickly
              and customize your site, then
              <strong className="font-bold text-teal-500">
                Tailwind is gonna be a lot of fun
              </strong>
              .
            </p>
            <p>
              After using Bulma to build{" "}
              <a
                href="https://scotch.io"
                className="text-blue-500 hover:underline"
              >
                Scotch.io
              </a>
              , my CSS files became littered with my own{" "}
              <code className="inline-block px-1 font-mono text-xs text-red-700 bg-gray-200 rounded">
                !important
              </code>
              classes to override the framework's styles. Tailwind doesn't have
              the
              <code className="inline-block px-1 font-mono text-xs text-red-700 bg-gray-200 rounded">
                !important
              </code>
              problem since all our elements are designed on the fly.
            </p>
            <p>
              <strong className="font-bold">Important Note</strong>: Tailwind
              lets us design quickly, but this doesn't mean that you don't need
              CSS knowledge however. To use Tailwind, you need to have a good
              understanding of CSS properties. In this course, we will learn
              Tailwind and we'll also learn CSS conceptsto create good looking
              designs.{" "}
              <strong className="font-bold">
                Tailwind is the ultimate CSS shorthand
              </strong>
              , but we still need to learn the CSS, which we'll do in this
              course.
            </p>
            <p className="relative text-3xl italic">
              <span className="absolute top-0 left-0 text-6xl text-purple-600 transform scale-150 -translate-x-6 -translate-y-4 opacity-50">
                "
              </span>
              This isn't just a Tailwind course. This is also a "learn how to
              design with CSS" course.
            </p>
            <p>
              The hardest things about learning Tailwind is memorizing the
              classes and also knowing which classes go well together. We'll be
              writing a lot of Tailwind in this course so that the repetition
              will help us commit Tailwind classes to memory.
            </p>
          </div>

          {/* right column */}

          <div className="flex-grow space-y-4 text-lg italic text-purple-200">
            <div className="p-10 bg-purple-800 rounded-lg">
              What classes should I use?
            </div>
            <div className="p-10 bg-purple-800 rounded-lg">
              How do I make things look good?
            </div>
            <div className="p-10 bg-purple-800 rounded-lg">
              My design looks basic?
            </div>
            <div className="p-10 bg-purple-800 rounded-lg">
              How do I do responsive?
            </div>
            <div className="p-10 bg-purple-800 rounded-lg">
              Why does my typography look so bad?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
