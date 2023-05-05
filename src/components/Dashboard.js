import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex justify-content-center login">
      <div className="card p-fluid">
        <div className="grid p-fluid ">
          <div className="field col">
            <Link
            to={{
              pathname: "/ejemplo",
            }}>
            
            <Button className="card overview-box blue" style={{width:"500px"}}
            
            onClick={() =>
              sessionStorage.setItem("ejemplo", JSON.stringify({ejemplo: 1}))
            }
            >
              <div className="overview-info">
                <h3>
                  Ejemplo <i className="pi pi-book ml-3" />
                </h3>
                <h1>1</h1>
              </div>
            </Button>
            </Link>
          </div>
        </div>
        <div className="grid ">
          <div className="field col">
          <Link
            to={{
              pathname: "/ejemplo",
            }}>
            
            <Button 
               onClick={() =>
                sessionStorage.setItem("ejemplo", JSON.stringify({ejemplo: 2}))
              }
            className="card overview-box gray p-button-secondary" severity="secondary">
              <div className="overview-info">
                <h3>
                  Ejemplo <i className="pi pi-book ml-3" />
                </h3>
                <h1>2</h1>
              </div>
            </Button>
            </Link>
          </div>
        </div>
        <div className="grid ">
          <div className="field col">
          <Link
            to={{
              pathname: "/ejemplo",
            }}>
            
            <Button 
                 onClick={() =>
                  sessionStorage.setItem("ejemplo", JSON.stringify({ejemplo: 3}))
                }
            className="card overview-box orange p-button-warning">
              <div className="overview-info">
                <h3>
                  Ejemplo <i className="pi pi-book ml-3" />
                </h3>
                <h1>3</h1>
              </div>
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const comparisonFn = function (prevProps, nextProps) {
  return (
    prevProps.location.pathname === nextProps.location.pathname &&
    prevProps.colorMode === nextProps.colorMode
  );
};

export default React.memo(Dashboard, comparisonFn);
