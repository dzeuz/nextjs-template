import type { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        return res.status(200).send("OK");
    }

    return res.status(405).send("Method Not Allowed");
};

export default handler;
