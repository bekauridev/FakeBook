function convertLowerCase(string) {
  return string.toLowerCase();
}
// Function to check if a string is valid JSON
function isValidJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
}

export { convertLowerCase, isValidJSON };
