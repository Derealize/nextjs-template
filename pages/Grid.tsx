export default () => {
  return (
    <div className="ground">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 bg-gray-300 p-4 rounded-xl">
        <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-32">1</div>
        <div className="col-start-3 bg-white rounded-xl shadow-lg flex items-center justify-center h-32">
          2
        </div>
        <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-32">3</div>
        <div className="bg-white rounded-xl shadow-lg flex items-center justify-center h-32">4</div>
        <div className="row-start-1 col-start-2 col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center h-32">
          5
        </div>
      </div>
    </div>
  );
};
