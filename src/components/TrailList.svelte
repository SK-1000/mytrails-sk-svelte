<script>
  import {getContext, onMount} from 'svelte'

  const trailService = getContext("TrailService");
  let trailList = [];

  onMount(async () => {
    trailList = await trailService.getTrails();
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Trail Name</th>
    <th>Distance Km</th>
    <th>Terrain Description</th>
    <th>Traillist</th>
    <th>Trailfinder</th>
  </thead>
  <tbody>
    {#each trailList as trail}
      <tr>
        <td>
          {trail.trailname}
        </td>
        <td>
          {trail.distancekm}
        </td>
        <td>
          {trail.terraindescription}
        </td>
        <td>
          {trail.traillist.title}
        </td>
        <td>
          {trail.trailfinder.lastName},  {trail.trailfinder.firstName}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
