import { IResults } from "@/types";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getTransactions({
  pageParam = 1,
  address,
}: {
  pageParam: number;
  address: `0x${string}` | undefined;
}) {
  try {
    if (!address) return;

    const { data } = await axios.get(`https://api.etherscan.io/api`, {
      params: {
        module: "account",
        action: "txlist",
        address: address,
        startblock: 0,
        endblock: 99999999,
        page: pageParam,
        offset: 12,
        sort: "asc",
        apiKey: API_KEY,
      },
    });

    return data.result as IResults[];
  } catch (error) {
    console.log(error);
    throw Error;
  }
}

export async function getBalance(address: `0x${string}` | undefined) {
  try {
    if (!address) return;
    const { data } = await axios.get(`https://api.etherscan.io/api`, {
      params: {
        module: "account",
        action: "balance",
        address: address,
        tag: "latest",
        apikey: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw Error;
  }
}
