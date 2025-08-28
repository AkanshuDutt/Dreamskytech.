export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json({ users });
  } catch (error) {
    console.error("GET /api/users error:", error);
    return new Response("Failed to fetch users", { status: 500 });
  }
}

// POST new user
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        subject: body.subject,
        message: body.message,
      },
    });
    return Response.json(newUser);
  } catch (error) {
    console.error("POST /api/users error:", error);
    return new Response("Failed to create user", { status: 500 });
  }
}
