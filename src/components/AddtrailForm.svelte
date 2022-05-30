<script>
  import Coordinates from "./Coordinates.svelte";
  import {createEventDispatcher, getContext, onMount} from "svelte";



  const dispatch = createEventDispatcher();



  const trailService = getContext("TrailService");

  let lat = 52.160858;
  let lng = -7.152420;

  let trailname = "";

  let distancekm = 0;

  let traillistList = [];
  let selectedTraillist = "";

  let terraindescriptions = ["steep", "flat", "hills", "forest", "rural", "steps", "shoreline"];
  let selectedTerrainDescription = "";

  let message = "Please add a new trail";

  onMount(async () => {
    traillistList = await trailService.getTraillists()
  });


  async function addtrail() {
    if (selectedTraillist && distancekm && selectedTerrainDescription) {
      // const traillistNames = selectedTraillist.split(',');
      // const traillist = traillistList.find(traillist => traillist.lastName == traillistNames[0] && traillist.firstName == traillistNames[1]);
      const traillist = traillistList.find(traillist => traillist.title);
      const trail = {
        trailname: trailname,
        distancekm: distancekm,
        terraindescription: selectedTerrainDescription,
        traillist: traillist._id,
        lat: lat,
        lng: lng
      };
      const success = await trailService.addtrail(trail);
      if (!success) {
        message = "This Trail has not been added - some error occurred";
        return;
      }
      message = `Thanks! You have added a trail called ${trailname} to the ${traillist.title} trail list`;
      dispatch("message", {
        trail: trail,
      });
    } else {
      message = "Please select trail details";
    }
  }
</script>

<form on:submit|preventDefault={addtrail}>
  <div class="field">
    <label class="label" for="trailname">Enter Trail Name</label> <input bind:value={trailname} class="input" id="trailname"
                                                                  name="trailname" type="string">
    <label class="label" for="distancekm">Enter Trail Distance</label> <input bind:value={distancekm} class="input" id="distancekm"
                                                                  name="distancekm" type="number">
  </div>
  <div class="field">
    <div class="control">
      {#each terraindescriptions as terraindescription}
        <input bind:group={selectedTerrainDescription} class="radio" type="radio" value="{terraindescription}"> {terraindescription}
      {/each}
    </div>
  </div>
  <div class="field">
    <div class="select">
      <select bind:value={selectedTraillist}>
        {#each traillistList as traillist}
          <option>{traillist.title}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="field">
    <Coordinates bind:lat={lat} bind:lng={lng}/>
    <div class="control">
      <button class="button is-link is-light">Add Trail</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
  <div class="section">

  </div>
</form>

