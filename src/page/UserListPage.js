import UserTable from "../components/UserTable";
import { userData } from "../data/user";
import Pagination from "../components/Pagination";
import Filtering from "../components/Filtering";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../style/common";

const UserListPage = () => {
  const userList = userData(200);
  const totalLength = userList.length;
  // 페이지네이션 버튼 그룹당 페이지 수
  const pagesPerGroup = 5;
  const [sortedList, setSortedList] = useState(userList);
  return (
    <S.Wrapper>
      <Filtering
        sortedList={sortedList}
        setSortedList={setSortedList}
        userList={userList}
      />
      <UserTable userList={sortedList} />
      <Pagination totalLength={totalLength} pagesPerGroup={pagesPerGroup} />
    </S.Wrapper>
  );
};

export default UserListPage;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

export const S = {
  Wrapper,
};