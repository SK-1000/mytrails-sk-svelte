<script>
  import minimalisthiker from "/src/assets/minimalisthiker.png";
  import TrailList from "../components/TrailList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Latest Trails"} title={"myTrails Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img alt="Homer" src={minimalisthiker} width="300"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">All Trails to date</h1>
    <TrailList/>
  </div>
</div>
