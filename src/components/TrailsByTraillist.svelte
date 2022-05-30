<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    const trailService = getContext("TrailService");
  
    let totalByTraillist = {
      labels: [],
      datasets: [
        {
          values: []
        }
      ]
    }


  
    function populateByTraillist(trailList, traillists) {
      totalByTraillist.labels = [];
      traillists.forEach(traillist => {
        totalByTraillist.labels.push(`${traillist.title}`)
        totalByTraillist.datasets[0].values.push(0);
      })
      traillists.forEach((traillist, i) => {
        trailList.forEach(trail => {
          if (trail.traillist._id == traillist._id) {
            totalByTraillist.datasets[0].values[i] += trail.distancekm;
          }
        });
      });
    }
  
    onMount(async () => {
      let trailList = await trailService.getTrails();
      let traillists = await trailService.getTraillists()
      populateByTraillist(trailList, traillists);
    });

    export async function refreshChart() {
    let trailList = await trailService.getTrails();
    let traillists = await trailService.getTraillists()
    populateByTraillist(trailList, traillists);
  }
  
  </script>
  
  <h1 class="title is-4">By Traillist</h1>
  <Chart data={totalByTraillist} type="bar"/>