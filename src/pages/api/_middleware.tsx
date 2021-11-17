import type { NextRequest } from "next/server";

const ipRateLimit = async (req: NextRequest) => {
    return {} as any;
};

export const middleware = async (req: NextRequest) => {
    if (req.nextUrl.pathname === "/api") {
        const res = await ipRateLimit(req);
        if (res.status !== 200) return res;

        res.headers.set("content-type", "application/json");

        return new Response(JSON.stringify({ done: true }), {
            status: 200,
            headers: res.headers,
        });
    }
};
