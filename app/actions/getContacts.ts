import prisma from "@/lib/prismadb";

export default async function getContacts() {
    try {        
        const contacts = await prisma.contact.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                message: true,
            }
        });

        return contacts;
    } catch (error : any) {
        throw new Error(error);
    }
}