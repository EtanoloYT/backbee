<script>
  import { Router, Link, Route } from "svelte-routing";
  import Landing from "./routes/Landing.svelte";
  import Login from "./routes/Login.svelte";
  import Dashboard from "./routes/Dashboard.svelte";

  let url;
</script>

<Router {url}>
  <Route path="/" component={Landing} />
  <Route path="/login" component={Login} />
  <Route path="/dashboard" component={Dashboard} />
</Router>

<style>
</style>
