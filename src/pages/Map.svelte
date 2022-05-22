<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import TrailMap from "../components/TrailMap.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Map of Trail Locations"} title={"Trail Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <TrailMap/>