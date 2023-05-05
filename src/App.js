import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { Route, useLocation } from "react-router-dom";
import AppTopbar from "./AppTopbar";
import AppFooter from "./AppFooter";
import Dashboard from "./components/Dashboard";
import { Tooltip } from "primereact/tooltip";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.scss";
import AppMenu from "./AppMenu";
//Paginas

import { AppTopBar2 } from "./AppTopBar2";
import { Ejemplo } from "./pages/Ejemplo";

const App = (props) => {
  const [resetActiveIndex, setResetActiveIndex] = useState(null);
  const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
  const [sidebarStatic, setSidebarStatic] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [menuMode, setMenuMode] = useState("sidebar");
  const [configActive, setConfigActive] = useState(false);
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [topbarUserMenuActive, setTopbarUserMenuActive] = useState(false);
  const copyTooltipRef = useRef();
  const location = useLocation();

  const menu = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      to: "/",
    },
    
  ];

  let menuClick;
  let rightPanelClick;
  let configClick;
  let searchClick;
  let topbarUserMenuClick;

  useEffect(() => {
    copyTooltipRef &&
      copyTooltipRef.current &&
      copyTooltipRef.current.updateTargetEvents();
  }, [location]);

  useEffect(() => {
    if (staticMenuMobileActive) {
      blockBodyScroll();
    } else {
      unblockBodyScroll();
    }
  }, [staticMenuMobileActive]);

  useEffect(() => {
    setResetActiveIndex(true);
    setMenuActive(false);
  }, [menuMode]);

  const onMenuItemClick = (event) => {
    if (!event.item.items) {
      setResetActiveIndex(true);
      hideOverlayMenu();
    }
    if (!event.item.items && (isSlim() || isHorizontal())) {
      setMenuActive(false);
    }
  };

  const onMenuClick = (event) => {
    if (menuActive && event.target.className === "layout-menu-container") {
      setResetActiveIndex(true);
      setMenuActive(false);
    }
    menuClick = true;
  };

  const blockBodyScroll = () => {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  };

  const unblockBodyScroll = () => {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(
        new RegExp(
          "(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
    }
  };

  const onMenuButtonClick = (event) => {
    menuClick = true;
    setTopbarUserMenuActive(false);
    setRightPanelActive(false);

    if (isMobile()) {
      setStaticMenuMobileActive(
        (prevStaticMenuMobileActive) => !prevStaticMenuMobileActive
      );
      if (staticMenuMobileActive) {
        blockBodyScroll();
      } else {
        unblockBodyScroll();
      }
    }
    event.preventDefault();
  };

  const isMobile = () => {
    return window.innerWidth <= 991;
  };

  const isHorizontal = () => {
    return menuMode === "horizontal";
  };

  const isSlim = () => {
    return menuMode === "slim";
  };

  const hideOverlayMenu = () => {
    setStaticMenuMobileActive(false);
    unblockBodyScroll();
  };

  const onDocumentClick = () => {
    if (!searchClick && searchActive) {
      setSearchActive(false);
      searchClick = false;
    }

    if (!topbarUserMenuClick && topbarUserMenuActive) {
      setTopbarUserMenuActive(false);
      topbarUserMenuClick = false;
    }

    if (!rightPanelClick && rightPanelActive) {
      setRightPanelActive(false);
    }

    if (!configClick && configActive) {
      setConfigActive(false);
    }

    if (!menuClick) {
      if (isSlim() || isHorizontal()) {
        setResetActiveIndex(true);
        setMenuActive(false);
      }

      if (staticMenuMobileActive) {
        hideOverlayMenu();
      }

      unblockBodyScroll();
    }

    searchClick = false;
    topbarUserMenuClick = false;
    rightPanelClick = false;
    configClick = false;
    menuClick = false;
  };

  const onToggleMenu = (event) => {
    menuClick = true;
    setSidebarStatic((prevState) => !prevState);

    event.preventDefault();
  };

  const onRootMenuItemClick = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  return (
    <div>
      <div className="d-flex" onClick={onDocumentClick}>
        <div
          style={{
            width: "16%",
            minHeight: "100vh",
            maxHeight: "auto",
            background: "#343638",
            borderRight: "1px solid white",
          }}
        >
          <AppTopbar
            menu={menu}
            menuActive={menuActive}
            onRootMenuItemClick={onRootMenuItemClick}
            mobileMenuActive={staticMenuMobileActive}
            onMenuItemClick={onMenuItemClick}
            menuMode={menuMode}
            onToggleMenu={onToggleMenu}
            onMenuButtonClick={onMenuButtonClick}
            resetActiveIndex={resetActiveIndex}
            onMenuClick={onMenuClick}
          />
        </div>

        <div className="content w-100">
          <AppTopBar2 />
          <div style={{ margin: "20px" }}>
            <Route path="/" exact component={Dashboard} />
            <Route path="/ejemplo" exact component={Ejemplo} />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default App;
