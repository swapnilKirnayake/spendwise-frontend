const getBaseUrl = () => {
  const hostname = window.location.hostname;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:4000";
  }

  return "https://spendwise-backend-e9bp.onrender.com";
};

export const API_BASE = getBaseUrl();
