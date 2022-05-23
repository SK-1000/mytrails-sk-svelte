<script>
  import AddtrailForm from "../components/AddtrailForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import TrailMap from "../components/TrailMap.svelte";

  let trailMap = null;

  function trailMade(event) {
    trailMap.addTrailMarker(event.detail.trail);
  }
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Please add a trail"} title={"myTrails"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns is-vcentered">
  <div class="column has-text-centered">
    <TrailMap bind:this={trailMap}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Be a trailblazer!</h1>
    <AddtrailForm on:message={trailMade}/>
  </div>
</div>
