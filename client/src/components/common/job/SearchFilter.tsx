import React from "react";
import { Search, Filter } from "lucide-react";

const countries = [
  "Tất cả",
  "Japan",
  "Korea",
  "Germany",
  "Australia",
  "Taiwan",
];

const workTypes = ["Tất cả", "Toàn thời gian", "Ca làm việc", "Bán thời gian"];

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedWorkType: string;
  setSelectedWorkType: (workType: string) => void;
  filteredJobsCount: number;
}

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCountry,
  setSelectedCountry,
  selectedWorkType,
  setSelectedWorkType,
  filteredJobsCount,
}: SearchFilterProps) {
  return (
    <section
      id="jobs"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Tìm Kiếm <span className="text-primary">Việc Làm</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 max-w-6xl mx-auto border dark:border-gray-700 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm kiếm việc làm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              />
            </div>

            {/* Country Filter */}
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Work Type Filter */}
            <div>
              <select
                value={selectedWorkType}
                onChange={(e) => setSelectedWorkType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              >
                {workTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setSelectedCountry("Tất cả");
                setSelectedWorkType("Tất cả");
                setSearchTerm("");
              }}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <Filter className="w-4 h-4 inline mr-2" />
              Đặt lại
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-300">
            Tìm thấy{" "}
            <span className="font-bold text-primary">{filteredJobsCount}</span>{" "}
            việc làm
          </p>
        </div>
      </div>
    </section>
  );
}
