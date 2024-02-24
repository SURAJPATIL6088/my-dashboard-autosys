import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Our Dashboard
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Our dashboard is a dynamic and interactive platform designed to
          provide insightful data visualizations and metrics.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Dynamic Layout
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Our dashboard features a responsive layout that adapts to
              different screen sizes. It includes a navigation bar for easy
              access to different sections.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                State Management
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              We use React's Context API for managing application state. We
              fetch data from open-source APIs (Wheather API) to provide
              real-time information.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Charts and Widgets
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Our dashboard includes two charts using e-charts and widgets that
              display key numbers related to the dashboard.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default About;
