import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
import { NextResponse } from 'next/server';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://ge-authkit-dev.ngrok.app',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

const handler = toNextJsHandler(auth);

export const POST = async (request: Request) => {
  const response = await handler.POST(request);
  response.headers.set('Access-Control-Allow-Origin', 'https://ge-authkit-dev.ngrok.app');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  return response;
};

export const GET = async (request: Request) => {
  const response = await handler.GET(request);
  response.headers.set('Access-Control-Allow-Origin', 'https://ge-authkit-dev.ngrok.app');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  return response;
};