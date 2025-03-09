"use client";

import { Country } from "@/types/Country";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import Image from "next/image";
import ZoopText from "../components/framer-components/ZoopText";

interface CountryCardProp {
  country: Country;
}

const CountryCard: React.FC<CountryCardProp> = ({ country }) => {
  return (
    <motion.div
      initial={["initialParent", "initialFlag"]}
      whileHover={["hoverParent", "hoverFlag"]}
    >
      <motion.div
        variants={{
          initialParent: { scale: 1 },
          hoverParent: { scale: 0.95 },
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <Card>
          <div className="flex items-center space-x-4">
            <motion.div
              variants={{
                initialFlag: { scale: 1 },
                hoverFlag: { scale: 1.2 },
              }}
              style={{ position: "relative", width: "20%", height: "50px" }}
            >
              <Image
                alt={country.flags.alt || `${country.name.common} flag`}
                src={country.flags.png}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </motion.div>
            <div className="min-w-0 flex-1">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                <ZoopText>{country.name.common}</ZoopText>
                {/* {country.name.common} */}
              </h5>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {country.capital} • {country.region}
              </p>
            </div>
            <div className="inline-flex truncate items-center text-sm font-normal text-gray-900 dark:text-white">
              {/* {country.demonyms
            ? country.demonyms["eng"]
              ? country.demonyms["eng"].f
              : ""
            : ""} */}
              {country.currencies
                ? Object.keys(country.currencies)
                    .map((c) => `${c} (${country.currencies[c].symbol})`)
                    .join(", ")
                : "No currencies"}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <Image
                alt={
                  country.flags.alt === undefined
                    ? country.name.common + " flag"
                    : country.flags.alt
                }
                height="32"
                src={country.flags.png}
                width="32"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                Neil Sims
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                email@windster.com
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $320
            </div>
          </div>
          {/* <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt={
                        country.flags.alt === undefined
                          ? country.name.common + " flag"
                          : country.flags.alt
                      }
                      height="32"
                      src={country.flags.png}
                      width="32"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Neil Sims
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
              <li className="pb-0 pt-3 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <Image
                      alt="Thomas image"
                      height="32"
                      src="/images/people/profile-picture-5.jpg"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      Thomes Lean
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CountryCard;
