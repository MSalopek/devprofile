export function StickySideBar() {
  return <aside
    className="sticky inset-0 overflow-hidden">
    <div className="inset-0 overflow-hidden">
      <div className="fixed inset-1/3 left-0 flex">
        <div className="pointer-events-auto h-fit w-24">
          <div className="flex h-full flex-col rounded-tr-sm rounded-br-sm border bg-white py-6 shadow">
            <div className="flex flex-col items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10 rounded-full bg-green-500 p-2 text-white" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10 rounded-full bg-green-500 p-2 text-white" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10 rounded-full bg-green-500 p-2 text-white" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10 rounded-full bg-green-500 p-2 text-white" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
}

export function TopBar() {
  return <header className="body-font sticky inset-0 top-0 text-gray-600 shadow -mb-28">
    <nav className="flex flex-col flex-wrap items-center p-5 md:flex-row">
      <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10 rounded-full bg-green-500 p-2 text-white" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
        <a className="mr-5 hover:text-gray-900">First Link</a>
        <a className="mr-5 hover:text-gray-900">Second Link</a>
        <a className="mr-5 hover:text-gray-900">Third Link</a>
        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
      <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">Button</button>
    </nav>
  </header>
}
