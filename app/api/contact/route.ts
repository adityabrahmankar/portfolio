import { NextResponse } from "next/server";
// import { table } from "@/lib/utils";

export async function POST(req: Request){
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new NextResponse("Missing fields", { status: 400 });
        }

        return NextResponse.json(body);

    } catch (error) {
        console.log("CONTACT_FORM", error);
        return new NextResponse("Internal error", { status: 500 })
    }
}