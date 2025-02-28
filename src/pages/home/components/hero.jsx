import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white" id="hero">
      <div className="relative isolate pt-14">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              {/* <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">
                  We’re hiring
                </span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href="#" className="flex items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  See open positions
                  <CgChevronDoubleUpO
                    aria-hidden="true"
                    className="-mr-2 size-5 text-gray-400"
                  />
                </a>
              </div> */}
            </div>
            <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Yolu Özünə Əminliklə FətH Et
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Bacarıqlı və inamlı sürücü olma yolunuz burada başlayır. Zərif
              Sürücülük Məktəbinə qoşulun və peşəkar təlimçilərdən mükəmməl
              tədris alın.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/contact">
                <Button variant="contained" size="large">
                  Əlaqə
                </Button>
              </Link>

              {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <Container>
              <div className="aspect-w-16 aspect- md:h-screen h-[50vh] rounded-xl overflow-hidden">
                <iframe
                  className="w-full md:h-full h-[50vh]"
                  //https://youtube.com/shorts/QYH-gCvuymg?si=wtGj5zcR_XSV0Avs
                  src={`https://www.youtube.com/embed/HCcQ39jZa4c?si=J-6UgG3yC9kb37Ce`}
                  title="Zərif Driving Intro Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <div className="my-16">
        <Container>
          <div className="aspect-w-16 aspect- md:h-screen h-[50vh] rounded-xl overflow-hidden">
            <iframe
              className="w-full md:h-full h-[50vh]"
              // https://youtube.com/shorts/Pp6AWRg_QOk?si=MUeBBxdrl1PestR9
              src={`https://www.youtube.com/embed/Pp6AWRg_QOk?si=MUeBBxdrl1PestR9`}
              title="Clevernation Intro Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
}
