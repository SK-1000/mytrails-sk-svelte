<script>
  import AddtrailForm from "../components/AddtrailForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import TrailMap from "../components/TrailMap.svelte";
  import TrailMapTopoZoom from "../components/TrailMapTopoZoom.svelte";
  import UploadImage from "../components/UploadImage.svelte";
  import TrailsByTraillist from "../components/TrailsByTraillist.svelte";
  

  let trailMap = null;
  let trailMapTopoZoom = null;


  function trailMade(event) {
    trailMap.addTrailMarker(event.detail.trail);
     trailMapTopoZoom.addTrailMarker(event.detail.trail);
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
    <TrailMapTopoZoom bind:this={trailMapTopoZoom}/> 
    <!-- <TrailsByTraillist bind:this={trailChart}/> -->
  </div>

  
  <div class="column box has-text-centered">
    <h1 class="title is-4">Be a trailblazer!</h1>
    <AddtrailForm on:message={trailMade}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Upload a image of you on your trail!</h1>
    <UploadImage/>
  </div>
</div>



