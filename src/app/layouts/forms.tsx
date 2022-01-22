import Button from "app/components/button";
import TextField from "app/components/forms/TextField";
import React from "react";

function Forms() {
  return (
    <form>
      <TextField id="{1}" label="What's your email address?" type="email" />
      <TextField
        id="{2}"
        label="What subject(s) would you like to teach?"
        type="text"
      />
      <TextField
        id="{3}"
        label="What's the highest degree you have received?"
        type="email"
      />
      <div className="text-align--end">
        <Button>Start</Button>
      </div>
    </form>
  );
}

export default Forms;
