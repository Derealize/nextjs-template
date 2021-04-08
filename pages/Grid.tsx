export default () => {
  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      <div>1</div>
      <div className="col-start-3">2</div>
      <div>3</div>
      <div>4</div>
      <div className="row-start-1 col-start-2 col-span-2">5</div>
    </div>
  );
};
