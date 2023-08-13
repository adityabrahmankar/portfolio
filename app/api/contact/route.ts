import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request){
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new NextResponse("Missing fields", { status: 400 });
        }

        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                message
            },
        })

        return new NextResponse("Success", { status: 200 });

    } catch (error) {
        console.log("CONTACT_FORM", error);
        return new NextResponse("Internal error", { status: 500 })
    }
}