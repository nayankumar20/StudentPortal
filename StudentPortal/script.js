function validateForm() {
  const name = document.getElementById("name").value;
  if (!name.trim()) {
    alert("Name cannot be empty!");
    return false;
  }
  return true;
}