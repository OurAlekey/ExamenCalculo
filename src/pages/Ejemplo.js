import React, {  useState } from "react";
import { TabView } from "primereact/tabview";
import { TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
export const Ejemplo = () => {
  const [ejemplo, setEjemplo] = useState(
    JSON.parse(sessionStorage.getItem("ejemplo"))
  );
  console.log(ejemplo);

  function dada() {
    switch (ejemplo.ejemplo) {
      case 1:
        return "∫1/x^3 dx";
      case 2:
        return "∫√x dx";
      case 3:
        return "∫2 sen x dx";
    }
  }

  function Reexpresar() {
    switch (ejemplo.ejemplo) {
      case 1:
        return "∫x^-3 dx";
      case 2:
        return "∫x^1/2 dx";
      case 3:
        return "2∫sen x dx";
    }
  }
  function Antiderivar() {
    switch (ejemplo.ejemplo) {
      case 1:
        return "x^-2 / -2 + C";
      case 2:
        return (
          <>
            {" "}
            <h1>x^1/2 + 1/1 / 1/2 + 1/2</h1>
            <h1>x^3/2 / 1 / 3/2 + C</h1>{" "}
          </>
        );
      case 3:
        return "2(-cosx)+C";
    }
  }
  function Simplificar() {
    switch (ejemplo.ejemplo) {
      case 1:
        return "- 1/2x^2 + C";
      case 2:
        return "-1/2x^2 + C";
      case 3:
        return "-2 cos x + c";
    }
  }
  return (
    <div className="flex justify-content-center  " >
        <div className="grid">
            <div className="col-12 flex justify-content-center">
            <div className="card p-fluid" style={{width: "800px"}}>
                <div className="grid">
                    <div className="col-9">
                    <h4>Ejemplo de derivada Numero #{ejemplo?.ejemplo}</h4>
                    </div>
                    <div className="col-3" style={{textAlign:"right", alignItems:"right"}}>
                    <Link
            to={{
              pathname: "/",
            }}>
            
            <Button 
            className="p-button-secondary"
            label="Regresar"
            icon="pi pi-arrow-left" 
            />
    
            </Link>
                    </div>
                     </div>
    

      <TabView>
        <TabPanel header="Antiderivada Dada" style={{ color: "white" }}>
          <div className="col-12 pb-0">
            <div className="grid">
              <div className="col">
                <div
                  className="card overview-box   mt-3"
                  style={{ background: "#af6930    " }}
                >
                  <div className="overview-info mt-4 mb-4">
                    <h4> Antiderivada Dada </h4>
                    <div className="flex justify-content-center ">
                      <h1>{dada()}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Reexpresar" style={{ color: "white" }}>
          <div className="col-12 pb-0">
            <div className="grid">
              <div className="col">
                <div
                  className="card overview-box mt-3"
                  style={{ background: "#4e52a9     " }}
                >
                  <div className="overview-info mt-4 mb-4">
                  <h4> Reexpresar </h4>
                    <div className="flex justify-content-center ">
                      <h1>{Reexpresar()}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Antiderivar" style={{ color: "white" }}>
          <div className="col-12 pb-0">
            <div className="grid">
              <div className="col">
                <div
                  className="card overview-box mt-3"
                  style={{ background: "#096d85 " }}
                >
                  <div className="overview-info mt-4 mb-4">
                  <h4> Antiderivar</h4>
                    <div className="flex justify-content-center ">
                      <h1>{Antiderivar()}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Simplificar" style={{ color: "white" }}>
          <div className="col-12 pb-0">
            <div className="grid">
              <div className="col">
                <div
                  className="card overview-box  mt-3"
                  style={{ background: "#c88b9d" }}
                >
                  <div className="overview-info mt-4 mb-4">
                  <h4> Simplificar </h4>
                    <div className="flex justify-content-center ">
                      <h1>{Simplificar()}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabView>
   
    </div>
            </div>
            <div className="col-12 flex justify-content-center">
            <div className="p-fluid" style={{width: "800px"}}>
     <div
                  className="card   "
             
                >
                  <div className="overview-info mt-4 mb-4">
                    <h3> Referencia </h3>
                    <h3 style={{marginLeft:"30px"}}>Ing. Racancoj</h3>
                    <div className="flex justify-content-center "    
                    style={{ fontSize:"18px"}}>
                      <a 
                   
                      href="https://www.youtube.com/watch?v=XPAZHF6jhM0">https://www.youtube.com/watch?v=XPAZHF6jhM0</a>
                    </div>
                  </div>
                </div>
     </div>
                </div>
        </div>
   
  
 
    </div>
  );
};
