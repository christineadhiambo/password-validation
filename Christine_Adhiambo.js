function password(str) {
     // Check minimum length
     if (str.length < 8) return false;

     // Check for at least 1 uppercase letter
     if (!/[A-Z]/.test(str)) return false;

     // Check for at least 1 lowercase letter
     if (!/[a-z]/.test(str)) return false;

     // Check for at least 1 number
     if (!/[0-9]/.test(str)) return false;

     // If all conditions are met, return true
     return true;
   }