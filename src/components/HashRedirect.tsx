import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#/")) {
      navigate(hash.slice(1), { replace: true });
    }
  }, [navigate]);

  return null;
}
