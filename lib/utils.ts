import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const ALLOW_LIST = process.env.ALLOW_LIST?.split(",") || [];

export const  cn= (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
  }

 export const isAllowedEditor = (address: string) => ALLOW_LIST.includes(address);