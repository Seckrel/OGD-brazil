import CustomizedFooter from "./components/FooterComponent";
import CutomizedHeader from "./components/HeaderComponent";
import Home from "./pages/Home";
import Covid from "./pages/Covid";
import Cities from "./pages/Cities";
import { Route, Switch } from "wouter";

export default function Layout() {
  return (
    <>
      <CutomizedHeader />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/covid-info" component={Covid} />
          <Route path="/cities-info" component={Cities} />
        </Switch>
      </main>
      <CustomizedFooter />
    </>
  );
}
