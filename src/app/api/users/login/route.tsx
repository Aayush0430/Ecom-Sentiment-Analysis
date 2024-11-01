"use server";
import bcryptjs from "bcryptjs";

import { dbconnect } from "@/helper/dbconnect";
import { User } from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import { STATUS_CODES } from "http";
dbconnect();
export async function POST(request: NextRequest) {
  //   console.log("connected");
  const reqBody = await request.json();
  const { username, password } = reqBody;

  const userCheck = await User.findOne({ username });
  if (!userCheck) {
    return NextResponse.json({ msg: "user not found" });
  }
  const hashedCorrect = await bcryptjs.compare(password, userCheck.password);
  if (!hashedCorrect) {
    return NextResponse.json({ msg: "password incorrect" });
  }
  const loggedInUser = {
    userId: userCheck._id,
    username: userCheck.username,
    userEmail: userCheck.email,
  };
  return NextResponse.json({
    msg: "Logging In",
    loggedInUser,
    statuscode: 200,
  });
}
