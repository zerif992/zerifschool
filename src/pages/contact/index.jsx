import { CgPhone } from "react-icons/cg";
import { FaBuilding, FaEnvelope } from "react-icons/fa6";
import Layout from "../../fragments/layout/index";
import { TextField } from "components/input";
import { Button } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export function Contact() {
  // const { toggleAlert } = useAlertsContext();
  const [form, setForm] = useState({});
  const [sending, setSending] = useState();

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log(e);
    if (
      form.firstname &&
      form.email &&
      form.phone &&
      form.subject &&
      form.message
    ) {
      setSending(true);
      emailjs
        .send(
          "service_7i2jtfb",
          "template_09hciqe",
          { ...form },
          "rE_QmumriaORnYta3"
        )
        .then((res) => {
          // console.log(res);
          toast?.success(
            "Inquiry sent successfully, We will call you for further processing."
          );
          // toggleAlert({
          //   heading: "Inquiry sent successfully",
          //   message: "I will reach back to you shortly.",
          //   type: "success",
          // });
          setSending(false);
          setForm({
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
          // toggleAlert({
          //   heading: "Something went wrong.",
          //   message: "Please write an email instead.",
          //   type: "error",
          // });
          toast?.error("Something went wrong, Inquiry not sent.");
          setSending(false);
        });
    } else {
      // toggleAlert({
      //   message: "Something went wrong.",
      //   heading: "Kindly fill the form.",
      //   type: "error",
      // });
      toast?.error("Kindly fill the complete Form.");
    }
  };

  const handleChange = (e, fieldName) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  return (
    <Layout title="Contact">
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    fill="white"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Bizimlə Əlaqə Saxlayın 📩
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Suallarınız var? Daha çox məlumat lazımdır? Biz kömək etməyə
                hazırıq! Zərif Sürücülük Məktəbi ilə bu gün əlaqə saxlayın və
                inamlı sürücü olmaq üçün ilk addımı atın.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <FaBuilding
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    Ünvan-Azadllq metrosu, Dərnəgül metrosu, Elmlər metrosu,
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <CgPhone
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a href="tel:+994503316092" className="hover:text-gray-900">
                      +994 50 331 60 92
                    </a>
                    {/* <a href="tel:+994503316092" className="hover:text-gray-900">
                      +994 50 331 60 92
                    </a> */}
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <FaEnvelope
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="Zərifeazizova76@gmail.com"
                      className="hover:text-gray-900"
                    >
                      Zərifeazizova76@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-6 py-10 my-24 sm:px-10">
            <form
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    value={form?.firstname}
                    onChange={(e) => handleChange(e, "firstname")}
                    type="text"
                    required
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-xl border-2 border-primary/30 focus:border-primary focus:ring-primary focus:ring-opacity-50 px-4 py-3 text-gray-900 shadow-sm focus:shadow-2xl focus:outline-none "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    value={form?.lastname}
                    onChange={(e) => handleChange(e, "lastname")}
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="last-name"
                    className="block w-full rounded-xl border-2 border-primary/30 focus:border-primary focus:ring-primary focus:ring-opacity-50 px-4 py-3 text-gray-900 shadow-sm focus:shadow-2xl focus:outline-none "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    value={form?.email}
                    onChange={(e) => handleChange(e, "email")}
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-xl border-2 border-primary/30 focus:border-primary focus:ring-primary focus:ring-opacity-50 px-4 py-3 text-gray-900 shadow-sm focus:shadow-2xl focus:outline-none "
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Phone
                  </label>
                  <span id="phone-optional" className="text-sm text-gray-500">
                    with country-code
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    value={form?.phone}
                    onChange={(e) => handleChange(e, "phone")}
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-xl border-2 border-primary/30 focus:border-primary focus:ring-primary focus:ring-opacity-50 px-4 py-3 text-gray-900 shadow-sm focus:shadow-2xl focus:outline-none "
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    value={form?.subject}
                    onChange={(e) => handleChange(e, "subject")}
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    className="block w-full rounded-xl border-2 border-primary/30 focus:border-primary focus:ring-primary focus:ring-opacity-50 px-4 py-3 text-gray-900 shadow-sm focus:shadow-2xl focus:outline-none "
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    How can I help you?
                  </label>
                  {/* <span id="message-max" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span> */}
                </div>
                <div className="mt-1">
                  <textarea
                    value={form?.message}
                    onChange={(e) => handleChange(e, "message")}
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-xl border-2 border-primary/30 focus:border-primary focus:ring-primary focus:ring-opacity-50 px-4 py-3 text-gray-900 shadow-sm focus:shadow-2xl focus:outline-none "
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end mt-4">
                <Button type="submit" loading={sending} variant="contained">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
