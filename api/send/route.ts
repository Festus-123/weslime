// route for sening email to company

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
    const { email, name, message, location } = await req.json();

    try{
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "festus.succes4cruise@gmail.com",
            subject: ` New Message from ${name}`,
            html: `
                <h1> New Client Message</h1>
                <p> Hi there, My name is ${name} and contact email ${email}
                and i would like to ${message}. it's urgent an my location is ${location} </p>
            `
        })

        // if(!data) {
        //     console.log("Erorr sending message")
        // }

        return Response.json({ success: true, data})
    }catch(err){
        console.log("Error", err)
        return Response.json({ success: false, err})
    }
}