function GridCell({ cssSpan, title, content }) {
  const mainClassName =
    "border-2 border-gray-700 rounded-lg shadow-lg " + cssSpan;
  return (
    <div className={mainClassName}>
      <div className="flex items-center justify-between p-4 border-b-2 border-gray-700">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <p className="p-4 text-lg">{content}</p>
    </div>
  );
}

export default GridCell;
