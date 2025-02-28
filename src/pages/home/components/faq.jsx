import { Disclosure } from "@headlessui/react";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Zərifə Əzizova kimdir?",
    answer:
      "Zərifə Əzizova, sizə səmərəli və sərfəli şəkildə sürücülük öyrətməyə həsr olunmuş yüksək ixtisaslı təlimçidir. Onun dəstəyi ilə siz rahat bir mühitdə özünüzə inam qazanacaq və sürücülük bacarıqlarınızı inkişaf etdirəcəksiniz.",
  },
  {
    question: "Sürücülük dərslərinin qiymət strukturu nədir?",
    answer:
      "Sürücülük haqqı: \n Günlük: 35 AZN (1 saat dərs) \n Aylıq: 400 AZN (Həftədə 3 gün: Müştərinin istəyinə uyğun), lakin saat 18:00-dan əvvəl \n Peşəkar təlim və qanuni qaydada sürücülük vəsiqəsi almağa kömək edərək müştəri məmnuniyyətini təmin edirik.",
  },
  {
    question: "Sabiz nədir?",
    answer:
      "Biz sizə həm nəzəri, həm də praktiki təlim veririk, Azərbaycanın yol hərəkəti qaydalarını öyrədir və sürücülük vəsiqəsi imtahanına hazırlaşmağınıza kömək edirik.",
  },
  {
    question: "Siz dərsləri hansı məkanlarda keçirirsiniz?",
    answer:
      "Dərs Məkanları: Sürücülük dərslərini aşağıdakı yerlərdə təklif edirik: Azadlıq metrosu - Dərnəgül metrosu - Elmlər metrosu - Bu məkanlardan hər hansı birinə asanlıqla gələ bilərsiniz.",
  },
  {
    question: "Təlim üçün hansı avtomobillər istifadə olunur?",
    answer:
      "Təlim üçün Kia avtomobillərindən istifadə edirik, çünki onlar Azərbaycanda qadınların sürücülük öyrənməsi üçün uyğun və rahatdır.",
  },
];

export function FAQs() {
  return (
    <div className="bg-white" id="faqs">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
            Tez-tez verilən suallar
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <FiMinus className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <FiPlusSquare
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
