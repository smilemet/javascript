import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import { Bars } from "react-loader-spinner";

const TransLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: #0003;
  width: 100%;
  height: 100%;
`;

const Spinner = ({ visible, color, width, height }) => {
  return (
    <div>
      <>
        {visible && (
          <TransLayer>
            <Bars
              color={color}
              width={width}
              height={height}
              wrapperStyle={{
                position: "absolute",
                zIndex: 10000,
                left: "50%",
                top: "50%",
                marginLeft: -width / 2 + "px",
                marginTop: -height / 2 + "px",
              }}
            />
          </TransLayer>
        )}
      </>
    </div>
  );
};

// 기본값 정의
Spinner.defaultProps = {
  visible: false,
  color: "#06f",
  width: 100,
  height: 100,
};

// 데이터 타입 정의
Spinner.propTypes = {
  visible: Proptypes.bool.isRequired,
  color: Proptypes.string,
  width: Proptypes.number,
  height: Proptypes.number,
};

export default React.memo(Spinner);
