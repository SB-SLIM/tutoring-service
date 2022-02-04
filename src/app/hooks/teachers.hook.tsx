import { useReducer } from "react";
import { teachersData } from "../Data/users";

const GET_TEATCHERS = "GET_TEATCHERS";
const IS_LOADING = "IS_LOADING";

type State = {
  teachers: Array<TTeacher> | [];
  isLoading: boolean;
  error: string;
};
type Action = { type: string; payload?: string | object | any };
type TTeacher = {
  id: string;
  price: string;
  speaks: Array<{ langue: string; level: string }>;
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
      const tmp = action.payload.map((t: { [key: string]: any }) => {
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
      return { ...state, teachers: tmp, isLoading: false };
    default:
      throw new Error(`${action.type} does't existe`);
  }
};

const initialState = {
  teachers: [],
  isLoading: false,
  error: "",
};

const useTeachers = () => {
  const [state, dispatche] = useReducer(reducer, initialState);

  return {
    teachers: state.teachers,
    isLoading: state.isLoading,
    getTeatchers: () => {
      dispatche({ type: IS_LOADING });
      const data = teachersData;
      dispatche({ type: GET_TEATCHERS, payload: data });
    },
  };
};

export default useTeachers;
