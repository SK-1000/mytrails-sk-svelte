<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
  
    const trailService = getContext("TrailService");
  
    let totalByTerrainDescription = {
      labels: ["steep", "flat", "hills", "forest", "rural", "steps", "shoreline"],
      datasets: [
        {
          values: [0, 0, 0, 0, 0, 0, 0]
        }
      ]
    };
  
    function populateByTerrainDescripion(trailList) {
        trailList.forEach(trail => {
        if (trail.terraindescription == "steep") {
          totalByTerrainDescription.datasets[0].values[0] += trail.distancekm
        } else if (trail.terraindescription == "flat") {
          totalByTerrainDescription.datasets[0].values[1] += trail.distancekm
        } else if (trail.terraindescription == "hills") {
          totalByTerrainDescription.datasets[0].values[2] += trail.distancekm
        } else if (trail.terraindescription == "forest") {
          totalByTerrainDescription.datasets[0].values[3] += trail.distancekm
        } else if (trail.terraindescription == "rural") {
          totalByTerrainDescription.datasets[0].values[4] += trail.distancekm
        } else if (trail.terraindescription == "steps") {
          totalByTerrainDescription.datasets[0].values[5] += trail.distancekm
        } else if (trail.terraindescription == "shoreline") {
          totalByTerrainDescription.datasets[0].values[6] += trail.distancekm
        }
      });
    }
  
    onMount(async () => {
      let trailList = await trailService.getTrails();
      populateByTerrainDescripion(trailList);
    });
  
  </script>
  
  <h1 class="title is-4">By Terrain Description</h1>
  <Chart data={totalByTerrainDescription} type="pie"/>