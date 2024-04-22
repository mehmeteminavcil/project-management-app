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
import Home from "./pages/Home";
import { useAppContext } from "./contexts/AppContext";
import SignIn from "./pages/SignIn";
import AddNotesForm from "./forms/AddNotesForm";

const App = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        {isLoggedIn && (
          <>
            <Route
              path="/"
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
            <Route
              path="/addNewNote"
              element={
                <Layout>
                  <AddNotesForm />
                </Layout>
              }
            />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
