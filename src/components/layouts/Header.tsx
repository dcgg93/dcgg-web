import { ChildType } from "@/types";

const Header = ({ children }: ChildType) => {
  return (
    <header className="p-5 text-2xl bg-black text-white border-b border-[#7f7f7f]">
      {children}
    </header>
  );
};
export default Header;
