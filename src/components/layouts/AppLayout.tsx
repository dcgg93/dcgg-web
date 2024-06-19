import { Header, Footer } from "@/components/layouts";
import { ChildType } from "@/types";

const AppLayout = ({ children }: ChildType) => {
  return (
    <>
      <Header>DCGG 댕찬가게</Header>
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
