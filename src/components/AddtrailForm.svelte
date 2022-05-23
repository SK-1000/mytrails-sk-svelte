<script>
  import Coordinates from "./Coordinates.svelte";
  import {createEventDispatcher, getContext, onMount} from "svelte";

  const dispatch = createEventDispatcher();

  const trailService = getContext("TrailService");

  let lat = 52.160858;
  let lng = -7.152420;

  let amount = 0;

  let traillistList = [];
  let selectedTraillist = "";

  let paymentMethods = ["paypal", "direct"];
  let selectedMethod = "";

  let message = "Please add a new trail";

  onMount(async () => {
    traillistList = await trailService.getTraillists()
  });


  async function addtrail() {
    if (selectedTraillist && amount && selectedMethod) {
      const traillistNames = selectedTraillist.split(',');
      const traillist = traillistList.find(traillist => traillist.lastName == traillistNames[0] && traillist.firstName == traillistNames[1]);
      const trail = {
        amount: amount,
        method: selectedMethod,
        traillist: traillist._id,
        lat: lat,
        lng: lng
      };
      const success = await trailService.addtrail(trail);
      if (!success) {
        message = "This Trail has not been added - some error occurred";
        return;
      }
      message = `Thanks! You have added a trail called ${amount} to ${traillist.firstName} ${traillist.lastName}`;
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
    <label class="label" for="amount">Enter Amount</label> <input bind:value={amount} class="input" id="amount"
                                                                  name="amount" placeholder="Euros" type="number">
  </div>
  <div class="field">
    <div class="control">
      {#each paymentMethods as method}
        <input bind:group={selectedMethod} class="radio" type="radio" value="{method}"> {method}
      {/each}
    </div>
  </div>
  <div class="field">
    <div class="select">
      <select bind:value={selectedTraillist}>
        {#each traillistList as traillist}
          <option>{traillist.lastName},{traillist.firstName}</option>
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
</form>

