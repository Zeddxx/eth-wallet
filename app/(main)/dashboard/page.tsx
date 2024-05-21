"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import BalanceComponent from "./_components/balance-component";
import Transactions from "./_components/transactions";

const Dashboard = () => {
  const { isConnected, address, isConnecting } = useAccount();
  const { tab } = useSelector((state: RootState) => state.setUtils);

  if (isConnecting) {
    return <p>Connecting...</p>;
  }

  if (!isConnected) {
    return (
      <div className="w-full px-4 flex flex-col items-center justify-center min-h-[calc(100dvh-80px)]">
        <h6 className="text-xl">Please connect your wallet to see {tab}.</h6>

        <div className="max-w-sm mt-4 text-muted-foreground space-y-3 text-start w-full">
          <ul className="text-xs space-y-3 list-disc pl-6">
            <li>
              You can simply connect your account by clicking on bottom right
              button.
            </li>
            <li>After connecting to your account you can see {tab} here.</li>
          </ul>
        </div>
      </div>
    );
  }

  if (tab === "balance") {
    return (
      <div className="w-full px-4 flex flex-col items-center justify-center min-h-[calc(100dvh-80px)]">
        <BalanceComponent address={address} />
      </div>
    );
  }

  if (tab === "transactions") {
    return (
      <div className="w-full my-5">
        {/* <Transactions address={address} /> */}
      </div>
    );
  }

  return <div>{tab}</div>;
};
export default Dashboard;
