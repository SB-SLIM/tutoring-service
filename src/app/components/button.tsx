import React from "react";

 interface BtnProps {
   type?: String;
   label: String;
   handelClick?: () => void;
 }

 function Button({ type, label, handelClick }: BtnProps) {
   let style = "btn";

   if (type === "primary-outlined") {
     style = "btn btn--primary-outlined";
   }
   if (type === "secondary") {
     style = "btn btn--secondary";
   }
   if (type === "secondary-outlined") {
     style = "btn btn--secondary-outlined";
   }

   return (
     <button type="submit" className={style} onClick={handelClick}>
       {label}
     </button>
   );
 }

export default Button;
