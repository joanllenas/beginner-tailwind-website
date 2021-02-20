function Item({ title, nVids, min, i, total }) {
  const baseCss = "flex items-center justify-between p-6 bg-gray-800";
  let css =
    i === 0
      ? baseCss + " rounded-t"
      : i === total - 1
      ? baseCss + " rounded-b"
      : baseCss;
  css = i % 2 === 0 ? css + " opacity-75" : css;
  return (
    <div className="max-w-3xl mx-auto">
      <div className={css}>
        <h4 className="text-3xl">{title}</h4>
        <div className="flex space-x-8 text-xl font-bold text-center">
          <div>
            {nVids} <span className="block text-sm font-normal">videos</span>
          </div>
          <div>
            {min} <span className="block text-sm font-normal">minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const items = [
  { title: "Getting Started", nVids: 6, min: 33 },
  { title: "Main Concepts", nVids: 9, min: 46 },
  { title: "Layout", nVids: 5, min: 27 },
  { title: "Card Components", nVids: 3, min: 13 },
  { title: "Button Components", nVids: 4, min: 17 },
  { title: "Form Components", nVids: 5, min: 18 },
];

function Videos() {
  return (
    <div className="py-32 text-gray-400 bg-gradient-to-b to-gray-800 from-gray-700">
      <div className="container px-6 mx-auto">
        <div className="mb-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-transparent lg:text-6xl bg-clip-text bg-gradient-to-br from-white to-purple-200">
            The Modules/Videos
          </h2>
          <p className="text-2xl text-gray-100">
            9 hours of Tailwind learning in 18 modules.
          </p>
        </div>

        {items.map((item, index) => (
          <Item {...item} i={index} total={items.length} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Videos;
