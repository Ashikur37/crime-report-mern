import nodemailer from 'nodemailer'
export const mailClient=nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "crimereportsbd24@gmail.com",
        pass: "londzxlocfuwlxth"
    }
});

export const sendMail=async (to:string,subject:string,text:string)=>{
    const info = await mailClient.sendMail({
        from: '"Crime Report" <crimereportsbd24@gmail.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        text, // plain text body
        // html: "<b>Hello world?</b>", // html body
      });
}