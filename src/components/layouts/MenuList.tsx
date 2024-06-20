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

const MenuList = () => {
  return (
    <ul className="flex flex-row font-semibold">
      {menuList.map((list) => (
        <li className="pt-3 pr-5 text-sm cursor-pointer hover:text-green-500 hover:underline">
          {list.title}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
