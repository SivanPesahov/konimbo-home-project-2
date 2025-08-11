function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md px-4 py-6 md:px-8 md:py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-wide drop-shadow-md text-white">
            Konimbo Home Project
          </h1>
          <p className="text-sm text-indigo-200 mt-1">
            Landing Page with Airtable Integration
          </p>
        </div>
        {/* Placeholder for potential nav buttons */}
        <div></div>
      </div>
    </header>
  );
}

export default Header;
