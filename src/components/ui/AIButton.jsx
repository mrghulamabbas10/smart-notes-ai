import Link from "next/link";
import { BsStars } from "react-icons/bs"; 

export function AIButton() {
  return (
    <div className="fixed z-50 md:bottom-8 bottom-20 right-8 rounded-full overflow-hidden bg-gradient-to-r from-[#16E4D9] via-[#2F5DCA] to-[#9227C9] p-1">
      <Link
        href="/ask-ai"
        className="md:px-6 md:py-3 px-3 py-3 rounded-full overflow-hidden bg-white flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
      >
        <BsStars className="text-2xl" />
        <span className="text-[15px] font-medium text-black md:block hidden">
         Ask AI Physician
        </span>
      </Link>
    </div>
  );
}
