import * as crypto from "crypto";

const NUM = "0123456789";

export function createMessageId() {
  const rnd = crypto.randomBytes(11);
  const value = new Array(11);
  const charsLength = NUM.length;

  for (let i = 0; i < value.length; i++) {
    if (i === 5) {
      value[5] = "-";
    } else {
      value[i] = NUM[rnd[i] % charsLength];
    }
  }

  return value.join("");
}

export function formatPhoneNumber(input: string) {
  const digits = removeNonDigits(input);
  const digitsArray = digits.split("");
  return digitsArray
    .map((v, i) => {
      if (i === 0) return `(${v}`;
      if (i === 2) return `${v}) `;
      if (i === 5) return `${v}-`;
      return v;
    })
    .join("");
}

export function removeNonDigits(input: string) {
  return input.replace(/\D/g, "");
}

type Message = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function createEmailText({
  id,
  name,
  email,
  phone = "",
  message,
}: Message) {
  return `
  Contact Form Message \n
  Message ID: ${id}
  Name: ${name}
  Email: ${email}
  Phone: ${formatPhoneNumber(phone)} \n
  Message: ${message} \n
  *This message was sent from the contact form on seanhasenstein.com
  `;
}

export function isActivePage(pathname: string, input: string) {
  const pathArray = pathname.split("/").filter((v) => v !== "");
  const text = input.toLowerCase();
  if (pathArray.length === 0 && text === "home") return true;
  return pathArray.includes(text);
}
