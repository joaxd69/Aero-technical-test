import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
interface props {
  onMapclick: Function;
  center: { lat: number; lng: number };
}

export default function Map({ onMapclick, center }: props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBxRKT9oBJQNJ_ibqWi_Cwt97Z_WVLGkmg",
  }); /// configuramos cuando es cargado el mapa
  // eslint-disable-next-line
  const [map, setMap] = useState<google.maps.Map | null>(null);
  console.log("map", map);
  const containerStyle = {
    height: "100%",
  };
  const [mapPosition, setMapPosition] = useState({ lat: 0, lng: 0 });

  const [bol, setBol] = useState(false);
  useEffect(() => {
    const action = () => {
      setMapPosition({
        lat: center.lat,
        lng: center.lng,
      });
    };
    action();
  }, [center.lat, center.lng]);

  const handleMapClick = (event: any) => {
    onMapclick(`${event.latLng.lat()},${event.latLng.lng()}`);

    setMapPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  if (!isLoaded) {
    return <h1>cargando...</h1>;
  }

  setTimeout(() => {
    setBol(true);
  }, 3000);
  return (
    <div className={' h-full'}>
      <section className="h-full block items-center m-0 ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onClick={handleMapClick}
          options={options}
          onLoad={(map) => setMap(map)}>
          {bol && <Marker position={mapPosition} />}
        </GoogleMap>
      </section>
    </div>
  );
}
