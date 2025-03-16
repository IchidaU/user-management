/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Flex, Heading } from "@chakra-ui/react";

import { MenuDrawer } from "@/components/molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home"), []);
  const onClickUserManagement = useCallback(
    () => navigate("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => navigate("/home/setting"), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link to="/home/user_management">ユーザー一覧</Link>
          </Box>
          <Link to="/home/setting">設定</Link>
        </Flex>
        <MenuDrawer
          open={open}
          setOpen={setOpen}
          onClickHome={onClickHome}
          onClickUserManagement={onClickUserManagement}
          onClickSetting={onClickSetting}
        />
      </Flex>
    </>
  );
});
