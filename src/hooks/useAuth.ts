import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { User } from "@/types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", type: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", type: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", type: "error" });
          setLoading(false);
        });
    },
    [navigate, showMessage, setLoginUser]
  );

  return { login, loading };
};
