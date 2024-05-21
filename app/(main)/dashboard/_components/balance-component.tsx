'use client'

import { useGetAccountBalance } from "@/query/queries";

const BalanceComponent = ({
  address,
}: {
  address: `0x${string}` | undefined;
}) => {
  const { data, isLoading } = useGetAccountBalance(address);

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="w-max flex flex-col items-center space-y-2">
        <h2 className="h1 p-6 border border-muted rounded">{data.result} $</h2>
        <p className="capitalize text-muted-foreground text-sm">current wallet balance</p>
    </div>
  )
};
export default BalanceComponent;
