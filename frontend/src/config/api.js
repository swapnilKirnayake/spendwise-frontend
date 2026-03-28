const getBaseUrl = () => {
  const hostname = window.location.hostname;

  // If running on localhost (laptop)
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:4000";
  }

  // If accessed from mobile or other device
  return "https://spendwise-backend-1cf6.onrender.com";
};

export const API_BASE = getBaseUrl();
