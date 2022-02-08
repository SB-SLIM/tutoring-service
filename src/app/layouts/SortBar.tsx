import { Selectebox } from "app/components";
import { TeacherContext } from "app/context/teatcher.Context";
import { useContext } from "react";

function SortBar() {
  const { page, totalPage, nbrTeachers, sort, sortList, updateSort } =
    useContext(TeacherContext);

  const { speaks, gender, bestMatch } = sort;
  const { speaksList, genderList, matchsList } = sortList;

  return (
    <div className="sort">
      <div className="sort__left">
        <p>
          Showing {page} of {totalPage}
        </p>
        <p>{nbrTeachers} tutros available</p>
      </div>
      <div className="sort__right">
        <form>
          {/* //FIXME 3 selectBox - Fix: initialState/ value / onChange */}
          <Selectebox
            options={speaksList}
            name="speaks"
            value={speaks}
            size="sm"
            handleChange={updateSort}
          />
          <Selectebox
            options={genderList}
            name="gender"
            value={gender}
            size="sm"
            handleChange={updateSort}
          />
          <Selectebox
            options={matchsList}
            name="match"
            value={bestMatch}
            size="sm"
            handleChange={updateSort}
          />
        </form>
      </div>
    </div>
  );
}

export default SortBar;
