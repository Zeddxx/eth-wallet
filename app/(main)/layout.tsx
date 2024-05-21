import { ChildrenProps } from "@/types";
import Aside from "./dashboard/_components/aside";
import Navbar from "@/components/navbar";

export default function MainRootLayout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <Aside />
      <main className="w-full container overflow-hidden">
        <div className="w-full px-4">{children}</div>
      </main>
    </>
  );
}
