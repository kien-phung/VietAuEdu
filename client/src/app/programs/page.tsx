"use client";

import React, { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, MapPin, DollarSign } from "lucide-react";
import ProgramCard from "@/components/common/ProgramCard";
import { mockData } from "@/utils/services/mockData";
// import { useSystemStore } from "@/utils/stores/systemStore";

const countries = [
  { value: "", label: "Tất cả quốc gia" },
  { value: "Hàn Quốc", label: "Hàn Quốc" },
  { value: "Nhật Bản", label: "Nhật Bản" },
  { value: "Đài Loan", label: "Đài Loan" },
  { value: "Đức", label: "Đức" },
  { value: "Úc", label: "Úc" },
  { value: "Mỹ", label: "Mỹ" },
];

const tuitionRanges = [
  { value: "", label: "Tất cả mức học phí" },
  { value: "0-10000", label: "Dưới 10,000 USD" },
  { value: "10000-20000", label: "10,000 - 20,000 USD" },
  { value: "20000-30000", label: "20,000 - 30,000 USD" },
  { value: "30000+", label: "Trên 30,000 USD" },
];

interface ProgramsPageProps {
  searchParams: Promise<{ country?: string }>;
}

export default function ProgramsPage({ searchParams }: ProgramsPageProps) {
  const resolvedSearchParams = use(searchParams);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    resolvedSearchParams.country || ""
  );
  const [selectedTuition, setSelectedTuition] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState<IProgram[]>([]);
  // const { programs, handleSetUser } = useSystemStore();

  // Sync selectedCountry with URL parameters when they change
  useEffect(() => {
    setSelectedCountry(resolvedSearchParams.country || "");
  }, [resolvedSearchParams.country]);

  useEffect(() => {
    if (mockData.programs.length === 0) {
      // handleSetUser(mockData.programs);
    }
  }, []);

  useEffect(() => {
    let filtered = mockData.programs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (program) =>
          program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          program.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          program.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by country
    if (selectedCountry) {
      filtered = filtered.filter(
        (program) => program.country === selectedCountry
      );
    }

    // Filter by tuition range
    if (selectedTuition && selectedTuition !== "") {
      filtered = filtered.filter((program) => {
        const tuition = program.tuition.toLowerCase();
        if (selectedTuition === "0-10000") {
          return (
            tuition.includes("0") ||
            tuition.includes("3,000") ||
            tuition.includes("8,000")
          );
        } else if (selectedTuition === "10000-20000") {
          return tuition.includes("15,000") || tuition.includes("8,000");
        } else if (selectedTuition === "20000-30000") {
          return tuition.includes("25,000");
        } else if (selectedTuition === "30000+") {
          return (
            tuition.includes("30,000") ||
            tuition.includes("45,000") ||
            tuition.includes("70,000")
          );
        }
        return true;
      });
    }

    setFilteredPrograms(filtered);
  }, [searchTerm, selectedCountry, selectedTuition]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCountry("");
    setSelectedTuition("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Chương Trình Du Học
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Khám phá các cơ hội du học tại các quốc gia phát triển với chất
              lượng giáo dục hàng đầu thế giới
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm chương trình..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Country Filter */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white"
                  >
                    {countries.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tuition Filter */}
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={selectedTuition}
                    onChange={(e) => setSelectedTuition(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white"
                  >
                    {tuitionRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="flex items-center justify-center"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Xóa bộ lọc
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Tìm thấy{" "}
              <span className="font-semibold text-primary">
                {filteredPrograms.length}
              </span>{" "}
              chương trình
            </p>
          </div>

          {/* Programs */}
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Không tìm thấy chương trình nào
              </h3>
              <p className="text-gray-600 mb-6">
                Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
              </p>
              <Button onClick={clearFilters}>Xóa tất cả bộ lọc</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
