"use client";

// redux imports...
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

// wagmi hooks
import { useAccount } from "wagmi";

// components imports...
import BalanceComponent from "@/components/balance-component";
import Transactions from "@/components/transactions";

const Dashboard = () => {
  const { isConnected, address, isConnecting } = useAccount();
  const { tab } = useSelector((state: RootState) => state.setUtils);

  if (isConnecting) {
    return <p>Connecting...</p>;
  }

  if (!address) {
    return (
      <div className="w-full px-4 flex flex-col items-center justify-center min-h-[calc(100dvh-80px)]">
        <h6 className="text-xl">Please connect your wallet to see {tab}.</h6>
        <div className="max-w-sm mt-4 text-muted-foreground space-y-3 text-start">
          <ul className="text-xs space-y-3 list-disc pl-6">
            <li>
              You can simply connect your account by clicking on the top right button
              right button.
            </li>
            <li>After connecting to your account you can see {tab} here.</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      {tab === "balance" && (
        <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-80px)]">
          <BalanceComponent address={address} />
        </div>
      )}
      {tab === "transactions" && (
        <div className="my-5">
          <Transactions address={address} />
        </div>
      )}
      {tab === "history" && (
        <div className="my-5">
          <Transactions address="0xa83114A443dA1CecEFC50368531cACE9F37fCCcb" />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
