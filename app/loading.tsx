
export default function Loading() {
  return (
    <main className="px-16 self-center flex flex-col absolute top-1/2 items-center">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </main>
  )
}
