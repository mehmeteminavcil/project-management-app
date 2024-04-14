import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";
import Analytics from "./pages/Analytics";
import Activity from "./pages/Activity";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Login from "./pages/SignIn";
import Home from "./pages/Home";
import { useAppContext } from "./contexts/AppContext";

const App = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        {isLoggedIn && (
          <>
            <Route
              path="/overview"
              element={
                <Layout>
                  <Overview />
                </Layout>
              }
            />
            <Route
              path="/calendar"
              element={
                <Layout>
                  <Calendar />
                </Layout>
              }
            />
            <Route
              path="/analytics"
              element={
                <Layout>
                  <Analytics />
                </Layout>
              }
            />
            <Route
              path="/activity"
              element={
                <Layout>
                  <Activity />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout>
                  <Projects />
                </Layout>
              }
            />
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
