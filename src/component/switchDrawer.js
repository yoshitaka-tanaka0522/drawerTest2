/* eslint react-hooks/exhaustive-deps:off */
import React from "react";
//drawerをflagによって出しわける
//渡ってきたflagがtrueだったらドロワー表示する
//渡ってきたflagがfalseだったらドロワーを非表示にする
const SwitchDrawer = (props) => {
  console.log(props);
  const { openFlag } = props;

  if (openFlag) {
    return (
      <>
        <p>ドロワー</p>
        {/* <DrawserComponent> */}
      </>
    );
  } else {
    return (
      <>
        <p></p>
      </>
    );
  }
};

export default SwitchDrawer;
