export function MobileHeader() {
  return (
    <div className="lg:hidden flex items-center justify-between p-4 bg-white">
      <h1 className="text-base font-normal">/Smart Encounters</h1>
      <button className="bg-brand-blue text-white px-4 py-2 rounded-3xl text-sm font-medium">
        + New
      </button>
    </div>
  );
}
