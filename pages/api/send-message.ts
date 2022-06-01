import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/mailgun";
import { createEmailText, createMessageId, removeNonDigits } from "../../utils";

type Data = {
  success: true;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = createMessageId();

  const message = {
    id,
    name: req.body.name.trim(),
    email: req.body.email.trim().toLowerCase(),
    phone: removeNonDigits(req.body.phone),
    message: req.body.message.trim(),
  };

  const text = createEmailText(message);

  await sendEmail({
    to: "seanhasenstein@gmail.com",
    from: "seanhasenstein.com<contact@seanhasenstein.com>",
    subject: `Contact form message [#${id}]`,
    replyTo: message.email,
    bcc: "seanhasenstein@gmail",
    text,
  });

  res.status(200).json({ success: true });
}
