<script>
  import {setContext} from "svelte";
  import {TrailService} from "./services/TrailService";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Addtrail from "./pages/Addtrail.svelte";
  import Router from "svelte-spa-router";
  import Map from "./pages/Map.svelte";
  import Charts from "./pages/Charts.svelte";

  setContext("TrailService", new TrailService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/addtrail": Addtrail,
    "/report": Report,
    "/map": Map,
    "/charts": Charts,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>
