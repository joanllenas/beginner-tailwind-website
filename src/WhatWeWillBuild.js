function GridCell({ color, text }) {
  return (
    <div className="flex bg-white rounded shadow">
      <div
        className={
          "flex items-center justify-center w-1/3 text-3xl rounded-l " + color
        }
      >
        😍
      </div>
      <div className="p-4">{text}</div>
    </div>
  );
}

const cells = [
  { color: "bg-red-500", text: "Buttons" },
  { color: "bg-blue-500", text: "Cards" },
  { color: "bg-green-500", text: "Forms" },
  { color: "bg-orange-500", text: "Header" },
  { color: "bg-orange-500", text: "Navigation" },
  { color: "bg-purple-500", text: "Hero" },
  { color: "bg-teal-500", text: "Grids" },
  { color: "bg-yellow-500", text: "Newsletter" },
];

function WhatWeWillBuild() {
  return (
    <div className="py-24 bg-gray-300">
      <div className="container px-6 mx-auto text-gray-600">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-5xl text-gray-800">
            What we'll build in this course
          </h2>
          <p className="text-lg text-gray-800">
            These components are things you'll have to create in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cells.map((cell, index) => (
            <GridCell {...cell} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeWillBuild;
