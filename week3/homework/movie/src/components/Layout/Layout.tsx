import { Outlet } from "react-router";
import * as S from "./Layout.styles";

const Layout = () => {
  return (
    <>
      <S.Header>
        <S.Logo to="/">
          <S.LogoAccent>AIR</S.LogoAccent>MOVIE
        </S.Logo>
      </S.Header>

      <S.Main>
        <Outlet />
      </S.Main>
    </>
  );
};

export default Layout;
