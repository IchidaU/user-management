import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerContent,
  DrawerBody,
} from "../ui/drawer";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { open, setOpen, onClickHome, onClickUserManagement, onClickSetting } =
    props;
  return (
    <DrawerRoot
      placement="start"
      size="xs"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <MenuIconButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button
            w="100%"
            unstyled
            _hover={{ cursor: "pointer" }}
            onClick={onClickHome}
          >
            TOP
          </Button>
          <Button
            w="100%"
            unstyled
            _hover={{ cursor: "pointer" }}
            onClick={onClickUserManagement}
          >
            ユーザー一覧
          </Button>
          <Button
            w="100%"
            unstyled
            _hover={{ cursor: "pointer" }}
            onClick={onClickSetting}
          >
            設定
          </Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
});
