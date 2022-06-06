import React, { Fragment, useEffect, useState } from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Spinner from "../components/Spinner";
import Table from "../components/Table";
import dayjs from "dayjs";

const LinkContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  padding: 10px 0;
`;

const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  background-color: #fff;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #06f2;
  }
`;

const ProfList = () => {
  const [list, setList] = useState([]);
  const [{ data, loading1, error }, refetch] = useAxios(
    "http://localhost:3001/professor",
    { useCache: false }
  );

  useEffect(() => {
    setList(data);
  }, [data]);

  // 백엔드에서 삭제
  const [{ loading2 }, sendDelete] = useAxios(
    { method: "DELETE" },
    { useCache: false, manual: true }
  );

  // 삭제 버튼 클릭 이벤트
  const onDeleteClick = (e) => {
    e.preventDefault();

    const current = e.target;
    const id = parseInt(current.dataset.id);
    const name = current.dataset.name;

    if (window.confirm(`정말 ${name} 교수의 성적을 삭제하시겠습니까?`)) {
      (async () => {
        let json = null;

        try {
          const res = await sendDelete({
            method: "DELETE",
            url: `http://localhost:3001/professor/${id}`,
          });
          json = res.data;
        } catch (e) {
          console.error(e);
          window.alert(
            `[${e.response.status}] ${e.response.statusText}\n${e.message}`
          );

          if (json !== null) {
            setList((professor) => {
              professor.filter((v) => v.id !== id);
            });
          }
        }
      })();
    }
  };

  return (
    <div>
      <Spinner visible={loading1 || loading2} />
      <LinkContainer>
        <TopLink to="add">교수 등록하기</TopLink>
      </LinkContainer>

      {error ? (
        <div>
          <h1>{error.code} 오류 발생</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>이름</th>
              <th>아이디</th>
              <th>직급</th>
              <th>급여</th>
              <th>입사일</th>
              <th>보직수당</th>
              <th>소속학과번호</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map(
                (
                  { id, name, userid, position, sal, hiredate, comm, deptno },
                  i
                ) => {
                  return (
                    <tr>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{userid}</td>
                      <td>{position}</td>
                      <td>{sal}</td>
                      <td>{dayjs(hiredate).format("YYYY/MM/DD")}</td>
                      <td>{comm}</td>
                      <td>{deptno}</td>
                      <td>
                        <NavLink to={`edit/${id}`}>수정하기</NavLink>
                      </td>
                      <td>
                        <a
                          href="#!"
                          data-id={id}
                          data-name={name}
                          onClick={onDeleteClick}
                        >
                          삭제하기
                        </a>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ProfList;
