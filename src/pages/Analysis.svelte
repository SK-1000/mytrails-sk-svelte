<!-- <script>

import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
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

    let totalByTraillist = {
    labels: [],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  }



    onMount(async () => {
      let trailList = await trailService.getTrails();
      trailList.forEach(trail => {
        if (trail.method == "paypal") {
          totalByMethod.datasets[0].values[0] += trail.amount
        } else if (trail.method == "direct") {
          totalByMethod.datasets[0].values[1] += trail.amount
        }
      })

      let traillists = await trailService.getTraillists()
    totalByTraillist.labels = [];
    traillists.forEach(traillist => {
      totalByTraillist.labels.push(`${traillist.lastName}, ${traillist.firstName}`)
      totalByTraillist.datasets[0].values.push(0);
    })
    });


  </script>
  ...
        <Chart data={paymentData} type="pie"/>
  ...
  
  ... -->