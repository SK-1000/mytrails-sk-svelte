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
    <th>Amount</th>
    <th>Method</th>
    <th>Traillist</th>
    <th>Trailfinder</th>
  </thead>
  <tbody>
    {#each trailList as trail}
      <tr>
        <td>
          {trail.amount}
        </td>
        <td>
          {trail.method}
        </td>
        <td>
          {trail.traillist.lastName}, {trail.traillist.firstName}
        </td>
        <td>
          {trail.trailfinder.lastName},  {trail.trailfinder.firstName}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
