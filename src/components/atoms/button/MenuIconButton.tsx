import { FC, memo } from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export const MenuIconButton: FC<IconButtonProps> = memo((props) => {
  return (
    <IconButton
      {...props}
      aria-label="メニューボタン"
      size="sm"
      unstyled
      display={{ base: "block", md: "none" }}
    >
      <GiHamburgerMenu />
    </IconButton>
  );
});
