export function AddBookButton() {
  return (
    <div className="flex flex-row py-3">
      <a href="/add-book" className="relative inline-block text-lg group mr-1">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
          <span className="relative">Add Book</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fern rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a>
    </div>
  )
}
