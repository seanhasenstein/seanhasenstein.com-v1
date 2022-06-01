import React from "react";
import Link from "next/link";
import { removeNonDigits } from "../utils";
import Layout from "../components/Layout";

type Status = "idle" | "error" | "success";

export default function Contact() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const elements = e.currentTarget;

    // honeypot triggered
    if (elements.honey.value) return;

    const newMessage = {
      name: elements.fullname.value.trim(),
      email: elements.email.value.trim().toLowerCase(),
      phone: removeNonDigits(elements.phone.value),
      message: elements.message.value.trim(),
    };

    const response = await fetch("/api/send-message", {
      method: "post",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // server error
    if (!response.ok) {
      setStatus("error");
      setIsLoading(false);
      return;
    }

    // success
    setStatus("success");
    setIsLoading(false);
  };

  const handleResetClick = () => {
    setStatus("idle");
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="mt-6 mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-center">
          {status === "success" ? (
            <div className="pt-9 pb-10 px-6 max-w-lg w-full bg-white shadow-lg border rounded-sm">
              <div className="flex justify-center">
                <div className="h-9 w-9 inline-flex justify-center items-center bg-emerald-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-center text-2xl font-semibold text-gray-900 tracking-tight">
                Message sent
              </p>
              <p className="mt-3 mx-auto max-w-sm text-center text-gray-600">
                Thanks for reaching out. I will be with you as soon as I can.
                Have a great day!
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-x-3">
                <Link href="/">
                  <a className="inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-transparent text-sm font-medium text-center rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
                    Back to home
                  </a>
                </Link>
                <button
                  type="button"
                  onClick={handleResetClick}
                  className="mt-3 sm:mt-0 inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-gray-400/50 shadow-sm text-sm font-medium text-center rounded-md text-gray-700 bg-white hover:border-gray-400/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reset form
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="inline-flex text-center text-2xl font-medium text-gray-900 tracking-tight">
                Contact
              </h3>
              <p className="mt-4 mx-auto max-w-sm text-center text-gray-600">
                I'm currently available for{" "}
                <span className="underline">client work</span>, and also open to{" "}
                <span className="underline">full time job</span> opportunities.
                Feel free to use this form or{" "}
                <a
                  href="mailto:seanhasenstein@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-indigo-600"
                >
                  send me an email
                </a>
                .
              </p>
              <form
                method="post"
                onSubmit={handleSubmit}
                className="mt-8 max-w-md w-full"
              >
                <div>
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Your name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border  border-gray-300 rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-col-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border  border-gray-300 rounded"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border  border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-gray-700"
                    >
                      How can I help you?
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        className="py-2 px-3 min-h-fit shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border  border-gray-300 rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="sr-only">
                    <label htmlFor="honey">Please leave this field empty</label>
                    <div>
                      <input
                        type="text"
                        name="honey"
                        id="honey"
                        tabIndex={-1}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      className="relative inline-flex justify-center items-center h-10 w-full sm:w-48 text-center border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner" />
                          <span className="sr-only">Loading</span>
                        </>
                      ) : (
                        "Send your message"
                      )}
                    </button>
                  </div>
                  {status === "error" && (
                    <div className="mt-3 py-2 flex justify-center text-red-700 text-xs font-medium">
                      Server error. Please try sending again.
                    </div>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
