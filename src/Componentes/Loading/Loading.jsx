import { func } from "prop-types"


export const ShowLoading = () => {
function showLoading(){
   const div = document.createElement("div");
   div.id.add("Carregar");

   setTimeout(() => hideLoading(), 2000);
}
function hideLoading() {
 alert("ola")
}


}