export type ChildrenProps = {
    children: React.ReactNode
}

export type IResults = {
    blockNumber: string
    timeStamp: string
    hash: string
    nonce: string
    blockHash: string
    transactionIndex: string
    from: string
    to: string
    value: string
    gas: string
    gasPrice: string
    isError: string
    txreceipt_status: string
    input: string
    contractAddress: string
}

export type ITransactions = {
    status: string
    message: string
    result: IResults[]
}

export type IAuthStatus = "loading" | "unauthenticated" | "authenticated"
