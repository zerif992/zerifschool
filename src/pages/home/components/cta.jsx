export default function CTA() {
  return (
    <div className="relative bg-white py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-primary/40 lg:block"
      />
      <div className="mx-auto max-w-7xl bg-primary lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
            />
            <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
              <img
                alt=""
                src="/images/img_cta.jpg"
                className="relative aspect-[10/6] w-full rounded-3xl object-cover shadow-2xl sm:aspect-[2/1] lg:aspect-square"
              />
            </div>
          </div>

          <div className="relative bg-primary lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
            >
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-white"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
              <svg
                fill="none"
                width={404}
                height={384}
                viewBox="0 0 404 384"
                aria-hidden="true"
                className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      fill="currentColor"
                      width={4}
                      height={4}
                      className="text-primary"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  width={404}
                  height={384}
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2
                id="join-heading"
                className="text-3xl font-bold tracking-tight text-white"
              >
                Daha Yaxşı Sürücülük Bacarıqları Üçün Qeydiyyatdan Keçin
              </h2>
              <p className="text-lg text-white">
                Zərif Sürücülük Məktəbinə qoşulun və inamlı, peşəkar sürücü
                olun! Təcrübəli müəllimlərimiz sizi təhlükəsiz və məsuliyyətli
                sürməyi öyrənmək üçün addım-addım yönləndirəcək.
              </p>
              <p className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-primary shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">
                Qeydiyyatdan keç →
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
