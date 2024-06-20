import {
  HoverCardTrigger,
  HoverCard,
  HoverCardContent,
} from "@radix-ui/react-hover-card";

type MenuType = {
  title: string;
  router?: string;
};

const menuList: Array<MenuType> = [
  {
    title: "DCGG 소개",
    router: "/",
  },
  {
    title: "상품 소개",
    router: "/products",
  },
  {
    title: "급여방법",
    router: "/feed-guide",
  },
  {
    title: "맞춤 관리식 제조",
    router: "/customize",
  },
  {
    title: "스토어",
    router: "/store",
  },
];

const MenuListStyle = `
  flex
  flex-row
`;

const ListStyle = `
  pt-3
  text-md
  hover:text-green-500
  hover:underline
  cursor-pointer
  pr-5

`;
const MenuList = () => {
  return (
    <ul className={MenuListStyle}>
      {menuList.map((list) => (
        <li className={ListStyle}>{list.title}</li>
      ))}
    </ul>
  );
};

export default MenuList;
