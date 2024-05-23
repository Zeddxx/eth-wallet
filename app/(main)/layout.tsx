import { ChildrenProps } from "@/types";
import Navbar from "@/components/navbar";

export default function MainRootLayout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <main className="w-full container overflow-hidden">
        <div className="w-full px-4">{children}</div>
      </main>
    </>
  );
}
