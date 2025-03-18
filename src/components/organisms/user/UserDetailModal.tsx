import { FC, memo } from "react";
import { CloseButton, Dialog, Field, Input, Stack } from "@chakra-ui/react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { open, setOpen } = props;
  return (
    <Dialog.Root
      lazyMount
      // user={selectUser}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <Dialog.Backdrop />
      <Dialog.Content pb={6}>
        <Dialog.Title>ユーザー詳細</Dialog.Title>
        <Dialog.Body mx={4}>
          <Stack gap={4}>
            <Field.Root>
              <Field.Label>名前</Field.Label>
              <Input value="hoge" readOnly />
            </Field.Root>
            <Field.Root>
              <Field.Label>フルネーム</Field.Label>
              <Input value="hoge hoge" readOnly />
            </Field.Root>
            <Field.Root>
              <Field.Label>MAIL</Field.Label>
              <Input value="example@example.com" readOnly />
            </Field.Root>
            <Field.Root>
              <Field.Label>TEL</Field.Label>
              <Input value="090-1234-5678" readOnly />
            </Field.Root>
          </Stack>
        </Dialog.Body>
        <Dialog.CloseTrigger>
          <CloseButton />
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Root>
  );
});
