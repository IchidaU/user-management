import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { CloseButton, Dialog, Field, Input, Stack } from "@chakra-ui/react";
import { User } from "@/types/api/user";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  open: boolean;
  isAdmin?: boolean;
  setOpen: (open: boolean) => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, open, isAdmin = false, setOpen } = props;

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const onClickUpdate = () => {
    alert("更新");
  };

  return (
    <Dialog.Root
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <Dialog.Backdrop />
      <Dialog.Content
        pb={2}
        style={{
          position: "fixed",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Dialog.CloseTrigger asChild>
          <CloseButton
            style={{ alignSelf: "flex-end", width: "auto" }}
            variant="outline"
            size="sm"
          />
        </Dialog.CloseTrigger>
        <Dialog.Title m={4}>ユーザー詳細</Dialog.Title>
        <Dialog.Body mx={4}>
          <Stack gap={4}>
            <Field.Root>
              <Field.Label>名前</Field.Label>
              <Input
                value={userName}
                onChange={onChangeUserName}
                readOnly={!isAdmin}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>フルネーム</Field.Label>
              <Input value={name} onChange={onChangeName} readOnly={!isAdmin} />
            </Field.Root>
            <Field.Root>
              <Field.Label>MAIL</Field.Label>
              <Input
                value={email}
                onChange={onChangeEmail}
                readOnly={!isAdmin}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>TEL</Field.Label>
              <Input
                value={phone}
                onChange={onChangePhone}
                readOnly={!isAdmin}
              />
            </Field.Root>
          </Stack>
        </Dialog.Body>
        {isAdmin && (
          <Dialog.Footer>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </Dialog.Footer>
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
});
