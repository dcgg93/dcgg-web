import { ChildType } from "@/types";

const Header = ({ children }: ChildType) => {
  return <header className={"p-10"}>{children}</header>;
};
export default Header;
