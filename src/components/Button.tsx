import { cn } from "@/utils/helpers/classNames";

// Resume Button
export function Button({ className, text }: { className?: string, text?: string }) {
  return <button
    className={cn("text-base w-30 h-12 bg-prussian-blue font-bold cursor-pointer border hover:bg-black hover:text-orange hover:border hover:border-white text-center rounded-lg", className)}
    type="button"
  >
    {text || 'resume'}
  </button>
}
