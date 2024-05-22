'use client'

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IUser {
    isLoggedIn: boolean;
    address?: string
}

export function useUser({ redirectTo = "/dashboard", redirectIfFount = false } = {}) {
    const { data: user, refetch: mutateUser } = useQuery<IUser>({
        queryKey: ['user'],
        queryFn: () => fetch("/api/user").then((res) => res.json())
    })

    const router = useRouter();

    useEffect(() => {
        if(!redirectTo || !user) return;

        if(
            (redirectTo && !redirectIfFount && !user?.isLoggedIn) ||
            (redirectIfFount && user.isLoggedIn)
        ) {
            router.push(redirectTo);
        }
    }, [user, redirectIfFount, redirectTo])

    return { user, mutateUser }
}