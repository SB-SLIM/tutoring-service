import { ChangeEvent, useReducer } from "react";
import { teachersData } from "../Data/users";

const GET_TEATCHERS = "GET_TEATCHERS";
const IS_LOADING = "IS_LOADING";
const UPDATE_SORT = "UPDATE_SORT";
const SORT_TEACHERS = "SORT_TEACHERS";

type State = {
  all_teachers: Array<TTeacher> | undefined;
  sorted_teachers: Array<TTeacher> | undefined;
  isLoading: boolean;
  error: string;
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
};
type Action = {
  type: string;
  payload?: string | Array<TTeacher> | number | boolean | any;
};
type TTeacher = {
  id: string;
  price: string;
  speaks: Array<{ langage: string; level: string }>;
  teaches: string;
  rate: number;
  desc: string;
  gender: string;
  name: string;
  picture: { large: string; medium: string; thumbnail: string };
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true };
    case GET_TEATCHERS:
      const tmp = action.payload?.map((t: { [key: string]: any }) => {
        const {
          id: { value, name: nameID },
          price,
          speaks,
          teaches,
          rate,
          desc,
          gender,
          name: { first, last },
          picture,
        } = t;

        let tmp = {
          id: `${nameID}${value.replace(/-| /g, "")}`,
          price,
          speaks,
          teaches,
          rate,
          desc,
          gender,
          name: `${last} ${first}`,
          picture,
        };
        return tmp;
      });

      return {
        ...state,
        all_teachers: tmp,
        sorted_teachers: tmp,
        sort: { speaks: "all", gender: "all", bestMatch: "best match" },
        sortList: {
          genderList: ["all", ...new Set(tmp.map((t: TTeacher) => t.gender))],
          speaksList: [
            "all",
            ...new Set(
              tmp
                .map((t: TTeacher) => {
                  return t.speaks.map((l) => l.langage);
                })
                .flat()
            ),
          ],
          matchsList: ["less match", "best match"],
        },
        isLoading: false,
      };
    case UPDATE_SORT:
      if (action.payload.name === "speaks") {
        return {
          ...state,
          sort: {
            speaks: action.payload.value,
            gender: "all",
            bestMatch: "best match",
          },
        };
      }
      if (action.payload.name === "gender") {
        return {
          ...state,
          sort: {
            speaks: "all",
            gender: action.payload.value,
            bestMatch: "best match",
          },
        };
      }
      if (action.payload.name === "match") {
        return {
          ...state,
          sort: {
            speaks: "all",
            gender: "all",
            bestMatch: action.payload.value,
          },
        };
      } else {
        return { ...state };
      }
    case SORT_TEACHERS:
      //const { all_teachers } = state;
      //TODO: fix sort
      return { ...state };
    default:
      throw new Error(`${action.type} does't existe`);
  }
};

const initialState = {
  all_teachers: undefined,
  sorted_teachers: undefined,
  isLoading: false,
  error: "",
  page: 1,
  totalPage: 1,
  nbrTeachers: 0,
  sort: { speaks: "", gender: "", bestMatch: "" },
  sortList: { speaksList: [], genderList: [], matchsList: [] },
};

const useTeachers = () => {
  const [state, dispatche] = useReducer(reducer, initialState);

  return {
    all_teachers: state.all_teachers,
    isLoading: state.isLoading,
    page: state.page,
    nbrTeachers: state.nbrTeachers,
    totalPage: state.totalPage,
    sort: state.sort,
    sortList: state.sortList,
    sorted_teachers: state.sorted_teachers,
    getTeatchers: () => {
      dispatche({ type: IS_LOADING });
      const data = teachersData;
      if (data) {
        dispatche({ type: GET_TEATCHERS, payload: data });
      }
    },
    updateSort: (e: ChangeEvent<any>) => {
      const targetName = e.target.name;
      const targetValue = e.target.value;

      dispatche({
        type: UPDATE_SORT,
        payload: { name: targetName, value: targetValue },
      });
    },
    sortTeachers: () => {
      dispatche({ type: SORT_TEACHERS });
    },
  };
};

export default useTeachers;
