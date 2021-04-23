export default () => {
  return (
    <div className="ground">
      <article className="text-gray-600 leading-6">
        <h2 className="transition-opacity duration-1500 delay-500 text-xl sm:text-2xl font-semibold text-black px-4 py-6 sm:px-6 pb-1 opacity-25">
          Weekly one-on-one
        </h2>
        <dl className="transition-opacity duration-1500 delay-500 flex flex-wrap divide-y divide-gray-200 border-b border-gray-200 opacity-25">
          <div className="px-4 sm:px-6 pb-6">
            <dt className="sr-only">Date and time</dt>
            <dd className="text-sm sm:text-base">
              <time dateTime="2020-11-15T10:00:00-05:00">Thu Nov 15, 2020 10:00am</time> -{" "}
              <time dateTime="2020-11-15T11:00:00-05:00">
                11:00am<span className="sr-only sm:not-sr-only"> EST</span>
              </time>
            </dd>
          </div>
          <div className="w-full flex-none flex items-baseline px-4 sm:px-6 py-4">
            <dt className="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
              Location
            </dt>
            <dd className="text-black text-sm sm:text-base">
              Kitchener, <abbr title="Ontario">ON</abbr>
            </dd>
          </div>
          <div className="w-full flex-none flex items-baseline px-4 sm:px-6 py-4">
            <dt className="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
              Description
            </dt>
            <dd className="italic text-sm sm:text-base">No meeting description</dd>
          </div>
          <div className="w-full flex-none flex items-center px-4 sm:px-6 py-4">
            <dt className="w-2/5 sm:w-1/3 flex-none uppercase text-xs sm:text-sm font-semibold tracking-wide">
              Attendees
            </dt>
            <dd className="text-sm sm:text-base font-medium text-gray-700 bg-gray-100 rounded-full py-1 pl-2 pr-4 flex items-center">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="hidden sm:block text-gray-500 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                ></path>
              </svg>
              Andrew Parsons
            </dd>
          </div>
        </dl>
        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 px-4 sm:px-6 py-4">
          <div className="btn btn--secondary">Decline</div>
          <div className="btn btn--primary">Accept</div>
        </div>
      </article>
    </div>
  );
};
