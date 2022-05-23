<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
  
    const trailService = getContext("TrailService");
  
    let totalByMethod = {
      labels: ["paypal", "direct"],
      datasets: [
        {
          values: [0, 0]
        }
      ]
    };
  
    function populateByMethod(trailList) {
        trailList.forEach(trail => {
        if (trail.method == "paypal") {
          totalByMethod.datasets[0].values[0] += trail.amount
        } else if (trail.method == "direct") {
          totalByMethod.datasets[0].values[1] += trail.amount
        }
      });
    }
  
    onMount(async () => {
      let trailList = await trailService.getTrails();
      populateByMethod(trailList);
    });
  
  </script>
  
  <h1 class="title is-4">By Method</h1>
  <Chart data={totalByMethod} type="pie"/>