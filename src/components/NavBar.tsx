import { cn } from "@/utils/helpers/classNames"

// NavBar
export function NavBar({ ulClassName, listClassName }: { ulClassName?: string, listClassName?: string }) {

  const navData = ["Projects", "Tech Stack", "Contact"];

  return <nav>
    <ul className={cn("flex flex-row items-center gap-7", ulClassName)}>
      {navData.map((item, i) => {
        return <li className={cn("nav-list list-none text-lg cursor-pointer hover:underline decoration-orange decoration-2 underline-offset-6", listClassName)} key={i}>{item}</li>
      })}
    </ul>
  </nav>
}
