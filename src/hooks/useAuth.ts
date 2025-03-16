import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { User } from "@/types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", type: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", type: "error" });
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", type: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, showMessage]
  );

  return { login, loading };
};
