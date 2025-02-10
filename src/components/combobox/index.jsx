import { Combobox } from "@headlessui/react";
import { useState, useEffect } from "react";
import { CgCheck, CgChevronDown } from "react-icons/cg";
import { classNames } from "utils";

export function ComboBox({ data, onChange, value, label, placeholder }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (value) {
      setSelected(value);
      setQuery(value || "");
    }
  }, [value]);

  const handleSelect = (value) => {
    setSelected(value);
    setQuery(value || "");
    onChange({ target: { value } });
  };

  const filteredPeople =
    query === ""
      ? data
      : data.filter((value) => {
          return value.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selected} onChange={handleSelect}>
      <Combobox.Label className="mb-1 block text-sm font-medium text-primary focus:text-primary items-center gap-1">
        {label}
      </Combobox.Label>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border text-primary text-sm px-4 py-2 bg-white border-primary focus:outline-primary"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          placeholder={placeholder}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <CgChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((item, id) => (
              <Combobox.Option
                key={id}
                value={item}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-primary text-white" : "text-primary"
                  )
                }>
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}>
                      {item}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-primary"
                        )}>
                        <CgCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
