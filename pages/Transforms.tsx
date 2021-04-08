export default () => {
  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      <div className="transform scale-110 -rotate-6">1</div>
      <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
        2
      </div>
      <div className="transform scale-150 translate-y-11">3</div>
      <div className="transform translate-y-24">4</div>
      <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
        5
      </div>
    </div>
  );
};
