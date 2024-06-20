import { ChildType } from "@/types";

const HeaderStyle = `
  p-5
  border-b
  border-[#7f7f7f]
  font-bold
  text-2xl
`;

const Header = ({ children }: ChildType) => {
  return <header className={HeaderStyle}>{children}</header>;
};
export default Header;
