import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { user } from "@/types/api/user";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<user>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            navigate("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => {
          alert("ログインできません");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate]
  );

  return { login, loading };
};
