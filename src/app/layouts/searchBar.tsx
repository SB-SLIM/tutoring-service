import { Button, Selectbox } from "app/components";

function SearchBar() {
  return (
    <div className="serach-bar container">
      <h3>Online English tutors & teachers</h3>
      <form className="serach-bar__form">
        <Selectbox
          options={["Education System", "op"]}
          name="system"
          value="Education System"
        />
        <Selectbox options={["Level", "op"]} name="system" value="Level" />
        <Selectbox options={["Subject", "op"]} name="system" value="Subject" />
        <Button type="secondary" label="Find a tutor" />
      </form>
    </div>
  );
}

export default SearchBar;
