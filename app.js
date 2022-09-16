function validateForm() {
  var x = document.form["Reg_form"]["Full_Name]".value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
