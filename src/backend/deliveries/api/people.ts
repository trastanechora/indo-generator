import { NextRequest, NextResponse } from 'next/server';
import getRandomPerson from '@/backend/usecases/create-random-person';
 
export async function GET(_: NextRequest) {
  return NextResponse.json({ data: getRandomPerson({}) });
}