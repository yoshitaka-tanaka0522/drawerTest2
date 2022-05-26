import { useEffect, useState } from "react";
import "./styles.css";
import "react";
import SwitchDrawer from "./component/switchDrawer";
/* eslint no-unused-expressions: "off" */

export default function App() {
  const [openFlag, setOpenFlag] = useState(false);
  // const [persent], setpersent] = useState("aaa");
  // const [errors], seterrors] = useState("aaa");
  //drawerをflagによって出しわける
  //渡ってきたflagがtrueだったらドロワー表示する
  //渡ってきたflagがfalseだったらドロワーを非表示にする
  //alert(openFlag);
  //クリックしたら、useStateでtrue,falseが切り替わる
  //drawerが起動する
  // const obj = {
  //   title: "title",
  //   name: "name"
  // }
  // console.dir(obj)
  // console.log(JSON.stringify({ x: 5, y: 6 }));
  // const json = '{"result":true, "count":42}';
  // const obj = JSON.parse(json);
  // console.log(obj)

  //openFlag(props)を受け取って何か処理をする場所
  const onclickDrawer = () => {
    setOpenFlag(!openFlag);
  };
  const menu = {
    backgroundColor: "red"
  };

  useEffect(() => {
    // drawerを表示する
    //<SwitchDrawer>
  }, [openFlag]);

  return (
    <div className="App">
      <header onClick={onclickDrawer} style={menu}>
        バーガーメニュー
      </header>
      {/* const errors = "エラーですやり直してください" */}
      {/* const persent = 0.135 */}
      {/* // 1つの情報を渡すときは=の前にキー名、その後の波()のなかに値 */}
      <SwitchDrawer openFlag={openFlag} />;
      {/* //複数の値をコンポーネントに渡す場合 */}
      {/* <SwitchDrawer {...{openFlag, errors, percent, getValues, token}} />; */}
    </div>
  );

  //props→ {openFlag: true, errors: "エラーですやり直してください", percent: 0.135}
}
