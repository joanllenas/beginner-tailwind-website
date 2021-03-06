function About() {
  return (
    <div className="lg:pb-24 lg:text-center lg:pt-12 bg-gradient-to-b from-gray-300 to-gray-200">
      <div className="container px-6 mx-auto">
        <h2 className="mb-3 text-3xl font-bold text-teal-900 lg:text-6xl">
          Some Tailwind videos I've Done
        </h2>
        <p className="mb-12 leading-loose lg:text-xl">
          Hey there! My name is{" "}
          <a className="text-blue-500 hover:underline" href="#link">
            Chris Sev
          </a>{" "}
          and I founded a web dev tutorial site{" "}
          <a className="text-blue-500 hover:underline" href="#link">
            Scotch.io
          </a>
          . We were able to grow to 4M monthly pageviews and $300,000 yearly
          revenue.{" "}
          <a className="text-blue-500 hover:underline" href="#link">
            Scotch.io
          </a>{" "}
          was acquired by{" "}
          <a className="text-blue-500 hover:underline" href="#link">
            DigitalOcean
          </a>{" "}
          in November 2019. Nowadays I'm in search of the best ways to develop
          and design a business. Hope you enjoy this course and my other one{" "}
          <a className="text-blue-500 hover:underline" href="#link">
            MakeReactApps.com
          </a>
          .
        </p>

        {/* videos */}
        <div className="space-y-8 text-left lg:space-y-0 lg:flex lg:space-x-8">
          {/* video 1 */}

          <div className="bg-white border-2 border-gray-700 rounded lg:w-1/2">
            <p className="p-4 text-gray-700 text-l">
              I have a Getting started with Tailwind article on{" "}
              <a className="text-blue-500 hover:underline" href="#link">
                scotch.io
              </a>{" "}
              and a 15 minute starter YouTube video. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.
            </p>
            <iframe
              title="Video 1"
              className="self-end w-full rounded-b"
              height="315"
              src="https://www.youtube.com/embed/sNz-4PUM0k8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* video 2 */}

          <div className="bg-white border-2 border-gray-700 rounded lg:w-1/2 lg:flex lg:flex-col">
            <p className="p-4 text-gray-700 lg:flex-grow text-l">
              I did a Build Your 1st Tailwind Site for{" "}
              <a className="text-blue-500 hover:underline" href="#link">
                Traversy Media
              </a>{" "}
              on YouTube also.
            </p>
            <iframe
              title="Video 2"
              className="w-full rounded-b"
              height="315"
              src="https://www.youtube.com/embed/_YMzLSWrNpk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
