import { getAllCountries } from "@/lib/countries";
import { Country } from "@/types/Country";
import SearchBar from "./SearchBar";
import CountryCardParent from "./CountryCardParent";

const Countries = async () => {
  const data: Country[] = await getAllCountries();
  console.log(data.filter((country) => country.name.common === "Philippines"));

  return (
    <>
      <section className="text-center">
        <h1 className="text-3xl">Look for a country to explore!</h1>
        <p>Begin your journey on Earth</p>
        <SearchBar />
      </section>
      <section>
        <div className=" p-8 border-none rounded-xl">
          <div className="flex justify-between">
            <p className="text-3xl font-bold">Countries</p>
            <p>Some details</p>
          </div>
          <div className="grid grid-flow-row grid-cols-4 gap-2">
            {data
              .sort(() => Math.random() - 0.5) // Shuffle the array randomly
              .slice(0, 20) // Select the first 20 countries after shuffling
              .sort((a, b) => {
                const nameA = a.name.common.toLowerCase(); // Ensure case-insensitive sorting
                const nameB = b.name.common.toLowerCase();
                if (nameA < nameB) return -1; // A comes before B
                if (nameA > nameB) return 1; // A comes after B
                return 0; // Names are equal
              })
              .map((c, index) => (
                <CountryCardParent key={index} country={c} index={index} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Countries;
