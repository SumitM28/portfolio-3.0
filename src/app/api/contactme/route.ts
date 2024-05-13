import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { userInfoType } from "../../../../utils/types";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sumitmahour24@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});



async function SendMail(userInfo:userInfoType) {
  const mailOptions = {
    to: "sumitmahour24@gmail.com",
    subject: "Query at portfolio", // Subject line
    text: "New Query!", // plain text body
    html: `
        <p>Name: ${userInfo?.name}</p>
        <p>Phone: ${userInfo?.phone}</p>
        <p>Email: ${userInfo?.email}</p>
        <p>Message: ${userInfo?.message}</p>
      `, // html body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
export async function POST(req: NextRequest) {
  try {
    const userInfo = await req.json();
    await SendMail(userInfo);
    return NextResponse.json({success:true, message: "Thank you! I will connect with you shortly." }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({success:false, message: error.message }, { status: error.status,});
  }
}
