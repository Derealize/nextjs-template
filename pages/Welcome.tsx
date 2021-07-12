export default () => {
  return (
    <div className="ground">
      <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img
          className="object-cover w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto shadow shadow-md shadow-lg shadow-xl shadow-2xl shadow-inner shadow-2xl shadow-sm shadow shadow-md shadow-lg shadow-xl shadow-2xl shadow-xl shadow-lg shadow-md shadow shadow-sm "
          src="/sarah-dayan.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 bg-chat">
          <blockquote>
            <p className="text-lg font-semibold ">
              “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to
              customize, adapts to any design, and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">Sarah Dayan</div>
            <div className="text-gray-500">Staff Engineer, Algolia ~~</div>
          </figcaption>
        </div>
      </div>
    </div>
  );
};
