import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const res = await fetch(process.env.API_URL + "/destination/" + params.id);

  if (!res.ok)
    return NextResponse.json({
      status: "fail",
      message: "Failed to fetch data",
    });

  return NextResponse.json({
    status: "success",
    message: "data has been successfully retrieved",
    data: res.json(),
  });
}
