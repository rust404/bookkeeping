import React, {useEffect, useState} from "react";
import {
  HashRouter as Router,
} from "react-router-dom";
import Routes from './routes'
import GlobalStyle from "./style/globalStyle";
import Animation from "./style/animation";
import MoneyRecordsStore from "./store/moneyRecordsStore";
import CategoriesStore from "./store/categoriesStore";
import PopUp from "./components/PopUp";
import qrcode from './assets/qrcode.png';

function App() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (window.innerWidth > 500) {
      setShow(true)
    }
  }, [])
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Animation/>
      <MoneyRecordsStore>
        <CategoriesStore>
          <Router>
            <Routes />
          </Router>
        </CategoriesStore>
        <PopUp show={show} onCancel={() => setShow(false)}  position="center">
          <img src={qrcode} alt="qrcode"/>
          <p style={{textAlign: 'center'}}>为了最佳用户体验，请用手机扫码查看</p>
        </PopUp>
      </MoneyRecordsStore>
    </React.Fragment>
  );
}

export default App;
