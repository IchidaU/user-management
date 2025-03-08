import { ComponentPropsWithRef, FC, memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = ComponentPropsWithRef<HTMLButtonElement>;

export const MenuIconButton: FC<Props> = memo(({ ...props }) => {
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
