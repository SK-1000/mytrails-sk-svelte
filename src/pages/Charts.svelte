<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import TrailsByTraillist from "../components/TrailsByTraillist.svelte";
    import TrailsByMethod from "../components/TrailsByMethod.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"myTrails Analytics"} title={"myTrails"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column has-text-centered">
      <TrailsByMethod/>
    </div>
    <div class="column has-text-centered">
      <TrailsByTraillist/>
    </div>
  </div>