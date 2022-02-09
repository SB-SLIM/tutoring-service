import { Button, Selectebox } from "app/components";

function SearchBar() {
  return (
    <div className="serach-bar container">
      <h3>Online English tutors & teachers</h3>
      <form className="serach-bar__form">
        <Selectebox
          options={["Education System", "op"]}
          name="system"
          value="Education System"
        />
        <Selectebox options={["Level", "op"]} name="system" value="Level" />
        <Selectebox options={["Subject", "op"]} name="system" value="Subject" />
        <Button type="secondary" label="Find a tutor" />
      </form>
    </div>
  );
}

export default SearchBar;
