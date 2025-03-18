/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback, useEffect, useState } from "react";
import {
  Center,
  Dialog,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "@/hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const [open, setOpen] = useState(false);
  const { getUsers, users, loading } = useAllUsers();
  // const { onSelectUser, selectUser } = useSelectUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => {
    // onSelectUser({ id, users });
    setOpen(true);
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://picsum.photos/300"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Dialog.Root
        // user={selectUser}
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Dialog.Backdrop />
        <Dialog.Content>
          <Dialog.Body>
            <Text>test</Text>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
});
