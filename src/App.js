import React from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import "bootstrap"
import './App.css';
import Home from "./pages/Home";
import Training from "./pages/Training";
import LaboralExp from "./pages/LaboralExp";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PortfolioLayout from "./layouts/PortfolioLayout";
import TrampolineApp from "./pages/trampoline/TrampolineApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faUnlink } from "@fortawesome/free-solid-svg-icons";
import RutineGenerator from "./pages/trampoline/RutineGenerator";
import useGaTracker from "./components/UseGaTracker";
import Liu from "./pages/liu/Liu";
import LiuPrivacyPolicy from "./pages/liu/LiuPrivacyPolicy";


function App() {
  const location = useLocation();
  useGaTracker();

  // I have all pages information here, in one simple array
  const portfolioPages = [
    {
      name: "Home",
      component: (() => { return <Home /> }),
      route: "/"
    },
    {
      name: "Training",
      component: (() => { return <Training /> }),
      route: "/training"
    },
    {
      name: "Laboral Experience",
      component: (() => { return <LaboralExp /> }),
      route: "/laboral"
    },
    {
      name: "Projects I've worked on",
      component: (() => { return <Projects /> }),
      route: "/projects"
    },
    {
      name: "Contact",
      component: (() => { return <Contact /> }),
      route: "/contact"
    }
  ]

  const trampolinePages = [
    {
      name: "Trampoline App",
      component: (() => { return <TrampolineApp /> }),
      route: "/trampoli"
    },
    {
      name: "Generador d'exercicis",
      component: (() => { return <RutineGenerator /> }),
      route: "/trampoli/rutine-generator"
    }
  ]

  
  const lightItUpPages = [
    {
      name: "Light It Up",
      component: (() => { return <Liu /> }),
      route: "/liu"
    },
    {
      name: "Privacy policy",
      component: (() => { return <LiuPrivacyPolicy /> }),
      route: "/liu/privacy"
    }
  ]

  return (
    <div className="App" >


      <Switch>

        {/* A Route for the pages of the portoflio */}
        <Route exact path={portfolioPages.map(page => (page.route))}>
          <PortfolioLayout location={location} pages={portfolioPages}>

            <Switch>
              {/* Classic react-router route design using switch */}
              {portfolioPages.map((page, i) => (
                <Route key={i} exact path={page.route}>
                  {page.component}
                </Route>
              ))}
            </Switch>

          </PortfolioLayout>
        </Route>

        {/* Another Route for the pages of the trampoline */}
        <Route exact path={trampolinePages.map(page => (page.route))}>

          <Switch>
            {/* Classic react-router route design using switch */}
            {trampolinePages.map((page, i) => (
              <Route key={i} exact path={page.route}>
                {page.component}
              </Route>
            ))}
          </Switch>

        </Route>

        
        {/* Another Route for the pages of the trampoline */}
        <Route exact path={lightItUpPages.map(page => (page.route))}>

          <Switch>
            {/* Classic react-router route design using switch */}
            {lightItUpPages.map((page, i) => (
              <Route key={i} exact path={page.route}>
                {page.component}
              </Route>
            ))}
          </Switch>

        </Route>


        {/* Another Route for the pages not found */}
        <Route>
          <div className=" d-flex flex-column justify-content-center align-items-center " style={{ height: "100vh" }}>
            <FontAwesomeIcon icon={faUnlink} size="5x" />
            <div className="mt-5">
              <h2>PAGE NOT FOUND</h2>
            </div>
            <div className="mt-4">
              <Link to={"/"} >
                <button className="btn btn-lg btn-success">
                  Go to main page <FontAwesomeIcon icon={faExternalLinkAlt} />
                </button>
              </Link>
            </div>
            <div className="mt-4">
              <Link to={"/trampoli"} >
                <button className="btn btn-lg btn-warning">
                  Trampolí <FontAwesomeIcon icon={faExternalLinkAlt} />
                </button>
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
