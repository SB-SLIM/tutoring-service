import useTeachers from "app/hooks/teachers.hook";
import { createContext, useEffect } from "react";

type TTeacher = {
  id: string;
  speaks: [{ [key: string]: string }];
  price: number;
  teaches: string;
  rate: number;
  desc: string;
  gender: string;
  name: string;
};
type TTeacherContext = {
  teachers: TTeacher[];
  isLoading: boolean;
};
const TeacherContext = createContext<TTeacherContext>({
  teachers: [],
  isLoading: false,
});

const TeacherProvider = ({ children }: any) => {
  const { getTeatchers, isLoading, teachers } = useTeachers();

  useEffect(() => {
    getTeatchers();
  }, []);

  return (
    <TeacherContext.Provider value={{ teachers, isLoading }}>
      {children}
    </TeacherContext.Provider>
  );
};

export { TeacherProvider, TeacherContext };
