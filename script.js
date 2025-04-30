
function generatePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
 
  // Function to copy password to clipboard
  function copyToClipboard(password) {
    const tempInput = document.createElement("input");
    tempInput.value = password;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  document.getElementById("generate-btn").addEventListener("click", () => {
    document.getElementById("password1").value = generatePassword();
    document.getElementById("password2").value = generatePassword();
  });



