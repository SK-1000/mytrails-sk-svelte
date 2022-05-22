<script>
  import banner from "/src/assets/banner.png";
  import AddtrailForm from "../components/AddtrailForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"MyTrails."} title={"Add some trails!"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns is-vcentered">
  <div class="column has-text-centered">
    <img alt="Homer" src={banner} width="600"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Be a trailblazer</h1>
    <AddtrailForm/>
  </div>
</div>
