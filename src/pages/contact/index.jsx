import { TextField } from "components/input";
import Layout from "fragments/layout";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <Layout title="Contact">
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Let's share views
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, corporis.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <TextField label="First Name" />
                <TextField label="Last Name" />
                <div className="sm:col-span-2">
                  <TextField label="Email" />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-primary focus:text-primary flex items-center gap-1">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="border bg-white border-primary rounded-md w-full focus:outline-primary"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Let's talk
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                By submitting this form, I agree to the{" "}
                <Link className="font-semibold text-primary">
                  privacy&nbsp;policy
                </Link>
                .
              </p>
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <img
                    src="https://e7.pngegg.com/pngimages/561/941/png-clipart-mr-bean-animated-cartoon-episode-animated-series-mr-bean-television-child-thumbnail.png"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      John Doe
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      CEO of Nowhere
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
