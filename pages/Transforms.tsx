export default () => {
  return (
    <div className="ground">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 bg-gray-300 p-4 rounded-xl">
        <div className="transform scale-110 -rotate-6 bg-white rounded-xl shadow-lg flex items-center justify-center h-32">
          1
        </div>
        <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15 bg-white rounded-xl shadow-lg flex items-center justify-center h-32">
          2
        </div>
        <div className="transform scale-150 translate-y-11 bg-white rounded-xl shadow-lg flex items-center justify-center h-32">
          3
        </div>
        <div className="transform translate-y-24 bg-white rounded-xl shadow-lg flex items-center justify-center h-32">
          4
        </div>
        <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4 bg-white rounded-xl shadow-lg flex items-center justify-center h-32">
          5
        </div>
      </div>
    </div>
  );
};
