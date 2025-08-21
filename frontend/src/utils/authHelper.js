export const handleBookNow = (navigate, onLoginClick) => {
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/booking");  
  } else {
    onLoginClick(true); 
  }
};