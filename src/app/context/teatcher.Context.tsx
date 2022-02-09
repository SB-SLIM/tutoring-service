import useTeachers from "app/hooks/teachers.hook";

import { ChangeEvent, createContext, useEffect } from "react";

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
  sorted_teachers: TTeacher[];
  isLoading: boolean;
  nbrTeachers: number;
  page: number;
  totalPage: number;
  sort: {
    speaks: string;
    gender: string;
    bestMatch: string;
  };
  sortList: {
    speaksList: any[];
    genderList: any[];
    matchsList: any[];
  };
  updateSort: (e: ChangeEvent<any>) => void;
};
const TeacherContext = createContext<TTeacherContext>({
  sorted_teachers: [],
  isLoading: false,
  nbrTeachers: 0,
  page: 1,
  totalPage: 1,
  sort: {
    speaks: "all",
    gender: "all",
    bestMatch: "",
  },
  sortList: {
    speaksList: [],
    genderList: [],
    matchsList: [],
  },
  updateSort: () => {},
});

const TeacherProvider = ({ children }: any) => {
  const {
    getTeatchers,
    isLoading,
    nbrTeachers,
    page,
    totalPage,
    sort,
    sortList,
    updateSort,
    sortTeachers,
    sorted_teachers,
  } = useTeachers();

  useEffect(() => {
    getTeatchers();
  }, []);

  useEffect(() => {
    sortTeachers();
    console.log(sorted_teachers);
  }, [sort]);

  return (
    <TeacherContext.Provider
      value={{
        sorted_teachers,
        isLoading,
        nbrTeachers,
        page,
        totalPage,
        sort,
        sortList,
        updateSort,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export { TeacherProvider, TeacherContext };
