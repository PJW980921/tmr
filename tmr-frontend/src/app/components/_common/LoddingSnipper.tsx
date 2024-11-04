const LoadingSpinner = () => (
  <div className="flex items-center gap-2">
    <svg
      className="animate-spin h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <span className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]">
      로딩중...
    </span>
  </div>
);

export default LoadingSpinner;
