export function InnerRing() {
  return (
    <div className="absolute top-1/2 left-1/2 size-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-20 md:size-[580px]">
      <div className="absolute top-1/2 left-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      <div className="absolute top-1/2 left-full inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white">
        <div className="size-2 rounded-full bg-white" />
      </div>
    </div>
  )
}
