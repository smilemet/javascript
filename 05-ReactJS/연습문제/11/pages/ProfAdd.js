import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";
import Table from "../components/Table";

const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .filed {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }

    label {
      margin-left: 7px;
      margin-right: 10px;

      input {
        margin-right: 10px;
      }
    }
  }
`;

const ProfAdd = () => {
  const goToBack = useNavigate();

  const [{ loading }, refetch] = useAxios(
    {
      url: "http://localhost:3001/professor",
      method: "POST",
    },
    { manual: true }
  );

  const [{ data, loading2, error }, refetch2] = useAxios({
    url: "http://localhost:3001/department",
  });

  const [deptno, setDeptno] = useState([]);

  useEffect(() => {
    setDeptno(data);
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();

    const current = e.target;

    const name = current.name.value;
    const userid = current.userid.value;
    const position = current.position.value;
    const sal = current.sal.value;
    const hiredate = current.hiredate.value;
    const comm = current.comm.value;
    const deptno = current.deptno.value;

    // console.log(name, userid, position, sal, hiredate, comm, deptno);

    let json = null;
    (async () => {
      try {
        const res = await refetch({
          data: {
            name: name,
            userid: userid,
            position: position,
            sal: parseInt(sal),
            hiredate: new Date(hiredate),
            comm: parseInt(comm),
            deptno: parseInt(deptno),
          },
        });

        json = res.data;
      } catch (e) {
        console.error(e);
        window.alert(
          `[${e.response.status}] ${e.response.statusText}\n${e.message}`
        );
      }

      if (json !== null) {
        window.alert("?????????????????????");
        goToBack("/");
      }
    })();
  };
  return (
    <>
      <Spinner visible={loading} />
      <form onSubmit={onSubmit}>
        <TableEx>
          <colgroup>
            <col width="120"></col>
          </colgroup>
          <tbody>
            <tr>
              <th>??????</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="text"
                  name="name"
                  required="true"
                />
              </td>
            </tr>
            <tr>
              <th>?????????</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="text"
                  name="userid"
                  required="true"
                />
              </td>
            </tr>
            <tr>
              <th>??????</th>
              <td className="inputWrapper">
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="??????"
                    required="true"
                  />
                  ??????
                </label>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="?????????"
                    required="true"
                  />
                  ?????????
                </label>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="?????????"
                    required="true"
                  />
                  ?????????
                </label>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="????????????"
                    required="true"
                  />
                  ????????????
                </label>
              </td>
            </tr>
            <tr>
              <th>??????(??????)</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="number"
                  name="sal"
                  required="true"
                  placeholder="????????? ??????"
                />
              </td>
            </tr>
            <tr>
              <th>?????????</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="text"
                  name="hiredate"
                  required="true"
                  placeholder="??????. ???. ???"
                />
              </td>
            </tr>
            <tr>
              <th>????????????(??????)</th>
              <td className="inputWrapper">
                <input
                  className="field"
                  type="number"
                  name="comm"
                  required="true"
                  placeholder="????????? ??????"
                />
              </td>
            </tr>
            <tr>
              <th>????????????</th>
              <td className="inputWrapper">
                <select name="deptno" className="field">
                  <option value="">---- ??????????????? ----</option>
                  {deptno &&
                    deptno.map((v, i) => {
                      return (
                        <option key={i} value={v.id}>
                          {v.dname}
                        </option>
                      );
                    })}
                </select>
              </td>
            </tr>
          </tbody>
        </TableEx>
        <div style={{ textAlign: "center" }}>
          <button type="submit">????????????</button>
        </div>
      </form>
    </>
  );
};

export default ProfAdd;
