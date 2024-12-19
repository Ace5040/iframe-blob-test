import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';

fetch('/example.tif').then((response) => response.blob()).then((blob) => {
    const dataurl = URL.createObjectURL(blob);
    const source = new GeoTIFF({
        sources: [{
            url: dataurl,
        }]
    });
    const map = new Map({
    layers: [
        new TileLayer({
            source,
        }) 
    ],
    target: 'map',
    view: source.getView().then((viewConfig) => {
        viewConfig.showFullExtent = true;
        return viewConfig;
        }),
    });

}, false);
