import { Header, Footer, MenuList } from "@/components/layouts";
import { ChildType } from "@/types";

const AppLayout = ({ children }: ChildType) => {
  return (
    <>
      <Header>
        <p className="font-bold">DCGG 댕찬가게</p>

        <MenuList />
      </Header>

      <main
        className={
          "flex min-h-screen flex-col items-center justify-between p-10"
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
