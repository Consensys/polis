
const NotFound = () => {
  return (
    <div className={`w-full h-96 flex items-center justify-center flex-col`}>
      <div className={`w-full flex justify-center`}>

      <span className={`text-violet-500 text-6xl sm:text-7xl md:text-9xl font-bold`}>404</span>
      <span className={`pt-1 sm:pt-2 md:pt-4 font-semibold text-xl sm:text-2xl md:text-3xl`}>Error</span>
      </div>

      <h1 className={`font-semibold text-3xl sm:text-4xl md:text-6xl text-violet-950 font-mono mt-5 sm:mt-6 md:mt-7 text-center`}>
      There's nothing here...
      </h1>
      <span className={` text-xs mt-3 sm:mt-4 md:mt-5 text-center`}>...maybe the page you're looking for is not found or never existed.</span>
    </div>
  );
};

export default NotFound;
