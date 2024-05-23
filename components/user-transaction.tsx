"use client";

import { useInfiniteTransactions } from "@/query/queries";

import Card from "@/components/shared/card";
import LoadMore from "@/components/load-more";

import MotionDiv from "@/components/animation/motion-div";

const UserTransaction = ({ address }: { address: `0x${string}` | undefined }) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteTransactions({
      address: address!,
    });

  if (error) return <div>Error loading transactions</div>;
  if (isLoading) return <div>Loading...</div>;

  /**
   * i was getting the nested array so i did flattened the array.
   */
  const transactions = data?.pages.flat() || [];

  return (
    <>
      {transactions.length === 0 ? (
        <MotionDiv>
          <h1>No Transactions Yet!</h1>
        </MotionDiv>
      ) : (
        <div className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 h-full">
          {transactions.map((transaction) => (
            <Card key={transaction!.hash} item={transaction} />
          ))}
        </div>
      )}
      {hasNextPage && <LoadMore fetchNextPage={fetchNextPage} />}
    </>
  );
};

export default UserTransaction;