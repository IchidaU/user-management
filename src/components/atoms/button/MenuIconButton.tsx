import { FC, memo, Ref } from "react";
import { IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = { ref?: Ref<HTMLButtonElement> };

export const MenuIconButton: FC<Props> = memo(({ ref }) => {
  return (
    <IconButton
      ref={ref}
      aria-label="メニューボタン"
      size="sm"
      unstyled
      display={{ base: "block", md: "block" }}
    >
      <GiHamburgerMenu />
    </IconButton>
  );
});
