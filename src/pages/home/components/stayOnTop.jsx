import { Button } from "@mui/material";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import { FaCar, FaClock, FaInbox, FaPerson, FaSchool } from "react-icons/fa6";
import { Link } from "react-router-dom";

const features = [
  {
    name: "Esnek dərs cədvəli",
    description:
      "Tədris cədvəlimiz sizin gününüzə uyğunlaşdırılmışdır. Tələbə, işçi və ya məşğul valideyn olmağınızdan asılı olmayaraq, sizə uyğun dərs saatlarımız var.",
    href: "#",
    icon: FaCar,
  },
  {
    name: "Peşəkar təlimçilər",
    description:
      "İnstruktorlarımız yüksək səviyyədə təlim görmüş, səbirli və tədris prosesinizi rahat və effektiv etmək üçün çalışırlar.",
    href: "#",
    icon: FaSchool,
  },
  {
    name: "Müdafiə sürücülük texnikaları",
    description:
      "Biz sizi təhlükəsiz sürücülük bacarıqları ilə tanış edirik ki, yolda özünüzü inamlı hiss edəsiniz, qəzaların qarşısını alasınız və müxtəlif şəraitlərdə rahat sürə biləsiniz.",
    href: "#",
    icon: FaClock,
  },
];

export default function StayOnTop() {
  return (
    <div className="bg-white py-24 sm:pt-40 sm:pb-24 " id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Sürücülük təhsilinizə nəzarət edin
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Sürücülük öyrənmək asan və stresssiz olmalıdır. Zərif Sürücülük
            Məktəbi sizə inamlı və məsuliyyətli sürücü olmağınız üçün ən yaxşı
            resursları təqdim edir.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link to="/contact">
                      <Button className="text-sm/6 font-semibold text-primary">
                        Contact <span aria-hidden="true">→</span>
                      </Button>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
