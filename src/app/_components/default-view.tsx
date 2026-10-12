export default function DefaultView() {
  return (
    <div className="flex min-h-80 flex-col justify-center text-center">
      <h2 className="font-paprika mb-4 text-4xl font-bold">
        All Blogs Archived.
      </h2>
      <p className="font-sans text-lg">
        For latest visit{" "}
        <a
          href="https://threads.com/skywalkersam_"
          className="cursor-pointer underline underline-offset-3 visited:text-purple-800 hover:text-gray-700 focus:text-gray-700 active:text-blue-800"
        >
          Threads
        </a>
        .
      </p>
    </div>
  );
}
