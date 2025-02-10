import { ComboBox } from "components/combobox";
import Layout from "fragments/layout";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { MdOutlineError } from "react-icons/md";
import { Link } from "react-router-dom";
import { data, listings } from "utils/data";

export function Listing() {
  const [searchFields, setSearchFields] = useState({});
  const [searchResults, setSearchResults] = useState(listings);

  const handleSearch = () => {
    console.log("handleSearch");
    setSearchResults(null)
    const filteredListings = filterListings(searchFields, listings);
    setSearchResults(filteredListings);
  };

  const filterListings = (criteria, data) => {
    return data.filter((listing) => {
      const meetsCriteria = (key) => {
        if (criteria[key]) {
          if (key === "minPrice") {
            return (
              !criteria["maxPrice"] ||
              Number(listing.price) >= Number(criteria[key])
            );
          } else if (key === "maxPrice") {
            return (
              !criteria["minPrice"] ||
              Number(listing.price) <= Number(criteria[key])
            );
          } else if (key === "minBedrooms") {
            return Number(listing.bedrooms) >= Number(criteria[key]);
          } else if (key === "maxBedrooms") {
            return (
              !criteria["minBedrooms"] ||
              Number(listing.bedrooms) <= Number(criteria[key])
            );
          } else if (key === "type") {
            return listing[key] === criteria[key];
          } else {
            return listing[key] === criteria[key];
          }
        }
        return true; // Filter using selected properties only
      };

      return Object.keys(criteria).every(meetsCriteria);
    });
  };

  const handleChange = (field, value) => {
    setSearchFields({ ...searchFields, [field]: value });
  };

  console.log(searchResults);
  console.log(searchFields);

  return (
    <Layout title="Listings">
      <div className="bg-white">
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 max-w-7xl lg:px-8">
          <h2 className="text-4xl font-semibold py-8">Listings</h2>

          {/* search box */}
          <div className="border p-4 shadow-md rounded-lg grid grid-cols-1 md:grid-cols-12 gap-4 border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:col-span-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 sm:col-span-2 gap-2">
                <ComboBox
                  label="City/Country"
                  placeholder="Enter City/Country"
                  data={data?.places}
                  value={searchFields?.place}
                  onChange={(e) => handleChange("place", e?.target?.value)}
                />
                <ComboBox
                  label="Property Type"
                  placeholder="Select property type, appartment, etc"
                  data={data?.type}
                  value={searchFields?.propertyType}
                  onChange={(e) => handleChange("propertyType", e?.target?.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ComboBox
                  label="Min. Price"
                  placeholder="Enter min. price"
                  data={
                    searchFields?.maxPrice
                      ? data?.price.filter(
                          (p) => Number(p) < Number(searchFields?.maxPrice)
                        )
                      : data?.price
                  }
                  value={searchFields?.minPrice}
                  onChange={(e) => handleChange("minPrice", e?.target?.value)}
                />
                <ComboBox
                  label="Max. Price"
                  placeholder="Enter max. price"
                  data={
                    searchFields?.minPrice
                      ? data?.price.filter(
                          (p) => Number(p) > Number(searchFields?.minPrice)
                        )
                      : data?.price
                  }
                  value={searchFields?.maxPrice}
                  onChange={(e) => handleChange("maxPrice", e?.target?.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ComboBox
                  label="Min. bedrooms"
                  placeholder="Enter min. no. of bedrooms"
                  data={
                    searchFields?.maxBedrooms
                      ? data?.bedrooms.filter(
                          (p) => Number(p) < Number(searchFields?.maxBedrooms)
                        )
                      : data?.bedrooms
                  }
                  value={searchFields?.minBedrooms}
                  onChange={(e) =>
                    handleChange("minBedrooms", e?.target?.value)
                  }
                />
                <ComboBox
                  label="Max. bedrooms"
                  placeholder="Enter max. no. of bedrooms"
                  data={
                    searchFields?.minBedrooms
                      ? data?.bedrooms.filter(
                          (p) => Number(p) > Number(searchFields?.minBedrooms)
                        )
                      : data?.bedrooms
                  }
                  value={searchFields?.maxBedrooms}
                  onChange={(e) =>
                    handleChange("maxBedrooms", e?.target?.value)
                  }
                />
              </div>
            </div>
            <button
              onClick={() => handleSearch()}
              className="flex md:col-span-2 w-full justify-center items-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <CgSearch className="text-4xl" />
            </button>
          </div>

          {/* Items List */}
          {searchResults?.length > 0 ? (
            <div className="grid grid-cols-1 my-16 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {searchResults.map((item) => (
                <Link
                  to={`/listings/${item?.id}`}
                  key={item.id}
                  className="group relative shadow-md flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex gap-2 items-center text-gray-500">
                      <p className="text-base font-medium text-gray-900">
                        ${item.price}
                      </p>
                      •<p className="text-sm">{item.propertyType}</p>
                      •<p className="text-sm">{item.place}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center mt-32 mb-12 flex flex-col items-center w-full opacity-60">
              <MdOutlineError style={{ fontSize: "3rem", opacity: "0.4" }} />
              No Listing Found.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
