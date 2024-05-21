"use client";

import { useQuery } from "@tanstack/react-query";
import { getBalance, getTransactions } from "./api-function";

export const useGetTransactions = (address: `0x${string}` | undefined) => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: () => getTransactions(1, address),
  });
};

export const useGetAccountBalance = (address: `0x${string}` | undefined) => {
  return useQuery({
    queryKey: ["account_balance"],
    queryFn: () => getBalance(address),
  });
};
