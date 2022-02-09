import { CardTutor, Pagination } from "app/components/index";
import { TeacherContext } from "app/context/teatcher.Context";
import { SearchBar, SortBar } from "app/layouts";
import { useContext } from "react";

function FindTutorPage() {
  const { sorted_teachers } = useContext(TeacherContext);
  return (
    <main>
      <SearchBar />
      <div className="findTutor container">
        <SortBar />
        {sorted_teachers?.map((teacher) => {
          const { id } = teacher;
          return <CardTutor key={id} {...teacher} />;
        })}

        <Pagination />
      </div>
    </main>
  );
}

export default FindTutorPage;
