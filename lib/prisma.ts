"use server";

import { prisma } from "./db";

export const saveApplication = async (name: string, key: Uint8Array) => {
    try {
        
        return await prisma.application.create({
          data: {
            name,
            key: JSON.stringify(Array.from(key)),
          },
        });
    } catch (error) {
        console.log("ee", error);
        
    }
};
