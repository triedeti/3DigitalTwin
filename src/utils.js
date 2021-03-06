import { reproject } from "reproject";
import proj4 from "proj4";

export function convertGeoJsonToWorldUnits(geojson) {
    return reproject(geojson, proj4.WGS84, proj4('EPSG:3785'));
}

export function convertCoordinatesToUnits(lng, lat) {
    return proj4('EPSG:3857', [lng, lat]);
}
