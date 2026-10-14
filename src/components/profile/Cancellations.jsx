export default function Cancellations() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-semibold text-red-500">My Cancellations</h1>
      <p className="text-gray-500">Orders cancelled by you will appear here.</p>
      <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
        No cancelled orders found.
      </div>
    </>
  );
}