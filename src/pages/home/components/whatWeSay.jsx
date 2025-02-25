const featuredTestimonial = {
  body: "Bu institut ən yaxşısıdır və Miss Zərifə Əzizova çox təcrübəli, dəstəkçi və tələbələrinə həqiqətən sadiq olan mükəmməl bir təlimçidir.",
  author: {
    name: "Rahlia Xalıova",
    handle: "Gəncədən müştəri.",
    imageUrl: "",
    logoUrl: "",
  },
};
const testimonials = [
  [
    [
      {
        body: "Bu sürücülük məktəbi mənə ən yaxşı öyrənmə təcrübəsini təmin etdi. Təlimçilər səbirli, peşəkar və çox dəstəkçidirlər. Şiddətlə tövsiyə edirəm!",
        author: {
          name: "Nigar Məmmədova",
          handle: "",
          imageUrl: "",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Sürücülükdən qorxurdum, amma peşəkar rəhbərlik və dostyana yanaşma mənə inam qazandırdı. İndi rahatlıqla avtomobil idarə edirəm. Təşəkkür edirəm!",
        author: {
          name: "Günel Şavi",
          handle: "",
          imageUrl: "",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Strukturlaşdırılmış dərslər və ətraflı izahlar öyrənməyi asanlaşdırdı. Miss Zərifə Əzizova tələbələrinə həqiqətən qayğı göstərən əla bir təlimçidir.",
        author: {
          name: "Aytan",
          handle: "Aytan",
          imageUrl: "",
        },
      },
      {
        body: "Bu institut, sürücülüyü düzgün öyrənmək istəyənlər üçün ən yaxşı seçimdir. Nəqliyyat vasitələri yaxşı vəziyyətdədir və tədris metodları çox effektivdir.",

        author: {
          name: "Sürücülük Məktəbi İnstitutu",
          handle: "Sürücülük Məktəbi İnstitutu",
          imageUrl: "",
        },
      },
    ],
    [
      {
        body: "Sürücülük imtahanını ilk cəhddə keçdim! Məktəb ətraflı təlim keçir və sizi real yol vəziyyətlərinə yaxşı hazırlayır.",
        author: {
          name: "Yağmur",
          handle: "Yağmur",
          imageUrl: "",
        },
      },
      {
        body: "Möhtəşəm bir öyrənmə təcrübəsi! Sürücülük məktəbi hər bir tələbənin sükan arxasında rahat hiss etməsini təmin edir. Dərslər aydın, təlimçilər isə çox səbirlidir.",
        author: {
          name: "Aliya Nadi",
          handle: "Aliya Nadi",
          imageUrl: "",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div
      className="relative isolate bg-white pb-16 pt-24 sm:pt-32"
      id="testimonials"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-primary"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-primary to-primary xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center justify-between border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              {/* Uncomment if image is needed */}
              {/* <img
      alt=""
      src={featuredTestimonial.author.imageUrl}
      className="size-10 flex-none rounded-full bg-gray-50"
    /> */}
              <div className="ml-auto text-right">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">
                  {featuredTestimonial.author.handle}
                </div>
              </div>
            </figcaption>
          </figure>

          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center justify-between">
                        {/* Uncomment if image is needed */}
                        {/* <img
        alt=""
        src={testimonial.author.imageUrl}
        className="size-10 rounded-full bg-gray-50"
      /> */}
                        <div className="ml-auto text-right">
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          {/* <div className="text-gray-600">{`@${testimonial.author.handle}`}</div> */}
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
