<script>
import 'leaflet/dist/leaflet.css';
import {LeafletMap} from '../services/leaflet-map';
import {getContext, onMount} from "svelte";

const trailService = getContext("TrailService");

const mapConfig = {
  location: {lat: 52.160858, lng: -7.152420},
  zoom: 8,
  minZoom: 1,
};


let map = null;

onMount(async () => {
  map = new LeafletMap("trail-map", mapConfig);
  map.showZoomControl();
  map.addLayerGroup('Trails');
  map.showLayerControl();

  const trails = await trailService.getTrails();
    trails.forEach(trail => {
      addTrailMarker(trail);
    });
  });

export function addTrailMarker(trail) {
    const trailStr = `${trail.traillist.firstName} ${trail.traillist.lastName} €${trail.amount.toString()}`;
    map.addMarker({lat: trail.lat, lng: trail.lng}, trailStr, "Trails");
    map.moveTo(11, {lat: trail.lat, lng: trail.lng});
  }
</script>

<div class="box" id="trail-map" style="height:800px"></div>