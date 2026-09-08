// app/dashboard/loading.tsx
export default function Loading() {
  // You can render a skeleton loader, spinner, or custom message
  return <>
  <div className="flex animate-pulse space-x-4 max-w-sm p-4 bg-white rounded-xl shadow-sm border border-gray-100">
  {/* <!-- Avatar Placeholder --> */}
  <div className="size-12 bg-gray-200 rounded-full"></div>
  
  {/* <!-- Text Placeholders --> */}
  <div className="flex-1 space-y-3 py-1">
    <div className="h-3 bg-gray-200 rounded-md w-2/5"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded-md w-full"></div>
      <div className="h-3 bg-gray-200 rounded-md w-4/5"></div>
    </div>
  </div>
</div>

  </>;
}
