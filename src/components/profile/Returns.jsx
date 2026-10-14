export default function Returns() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-semibold text-red-500">My Returns</h1>
      <p className="text-gray-500">Your returned orders will appear here.</p>
      <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
        No returns found.
      </div>
    </>
  );
}