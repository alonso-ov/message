import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";
import { connect } from "http2";

interface DecodedToken {
  email: string;
}

type Secret = string | Buffer;

export async function POST(req: Request) {
  const auth = await req.headers.get("authorization");

  if (!auth) {
    return new Response("No Auth Provided", { status: 401 });
  }

  const token = auth.split(" ")[1];

  // Check if auth is valid...
  try {
    const secret: Secret = Buffer.from("lamePassword123", "base64")
    const decoded = jwt.verify(token, secret) as DecodedToken;

    // Do something with the decoded token...
    const { email } = decoded;

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD
    });

    await connection.execute("INSERT INTO users (email) VALUES (?)", [email]);

    await connection.end();

    return new NextResponse("OK", { status: 200 });
  } catch (err) {
    return new NextResponse("Invalid Token", { status: 401 });
  }
}