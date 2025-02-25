import React from "react";
import { Card } from "flowbite-react";

const blurIntensity = 7;
const borderWidth = 1;
const classNames =
  "bg-transparent p-3 rounded-xl border-solid border-slate-500";

const FeatureSection = () => {
  return (
    <div className="h-screen flex justify-evenly items-center feature-bg">
      <div
        className={`${classNames}`}
        style={{
          backdropFilter: `blur(${blurIntensity}px)`,
          borderWidth: `${borderWidth}px`,
        }}
      >
        <Card
          className="max-w-sm"
          imgAlt="Green forest in some mountain"
          imgSrc="https://picsum.photos/id/28/4928/3264"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <div
        className={`${classNames}`}
        style={{
          backdropFilter: `blur(${blurIntensity}px)`,
          borderWidth: `${borderWidth}px`,
        }}
      >
        <Card
          className="max-w-sm"
          imgAlt="Some icy mountain"
          imgSrc="https://picsum.photos/id/29/4000/2670"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <div
        className={`${classNames}`}
        style={{
          backdropFilter: `blur(${blurIntensity}px)`,
          borderWidth: `${borderWidth}px`,
        }}
      >
        <Card
          className="max-w-sm"
          imgAlt="Tree branches contrasting with the sky"
          imgSrc="https://picsum.photos/id/25/5000/3333"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default FeatureSection;
