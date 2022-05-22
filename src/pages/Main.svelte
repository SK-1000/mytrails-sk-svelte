<script>
  import walking from "/src/assets/walkingimagemedium.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import {getContext} from "svelte";

  const trailService = getContext("TrailService");
  trailService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Sign up or Log in"} title={"MyTrails Services Inc."}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <img alt="homer" src="{walking}" width="600">
  </div>
  <div class="column">
    <h1 class="title">The Trails app with a difference</h1>
    <p>Add as many trails as you wish - The sky is the limit!</p>
  </div>
</div>

