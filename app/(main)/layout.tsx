import { ChildrenProps } from "@/types";
import Header from "@/components/shared/header";
import Navbar from "@/components/navbar";

export default function MainRootLayout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <Header />
      <main className="w-full container overflow-hidden">
        <div className="w-full px-4">{children}</div>
      </main>
    </>
  );
}
