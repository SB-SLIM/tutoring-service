import { CardTutor, Pagination } from "app/components";
import { SearchBar, SortBar } from "app/layouts";
import React from "react";

function FindTutorPage() {
  return (
    <main>
      <SearchBar />
      <div className="findTutor container">
        <SortBar />
        <CardTutor />
        <Pagination />
      </div>
    </main>
  );
}

export default FindTutorPage;
