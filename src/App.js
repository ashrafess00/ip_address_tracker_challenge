// import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
// import Header from "./Components/Header";

import { MapContainer, TileLayer, Marker, Popup, Map } from "react-leaflet";
import L from "leaflet";
import { Container, Header } from "./styles/Header";
import { Arrow, Input, InputCon } from "./styles/Input";
import useSWR, { useSWRConfig } from "swr";
import { useState } from "react";
import { useRef } from "react";
import GlobalCss from "./styles/Global.css";
import IpInfo from "./Components/IpInfo";
import Invalid from "./Components/Invalid";
import { fetcher } from "./Components/fetcher";

const theme = {
  main: "black",
};

var myIcon = L.icon({
  iconUrl: "icon-location.svg",
});

function App() {
  const input = useRef(null);
  const mapBoxStyleId = process.env.REACT_APP_MAPBOX_STYLEID;
  const mapBoxUsername = process.env.REACT_APP_MAPBOX_USERNAME;
  const mapBoxAccessKey = process.env.REACT_APP_MAPBOX_ACCESSKEY;

  const [url, setUrl] = useState(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_5afOeLbeIL0JLFdcniqX6pkbSzCH1&ipAddress=8.8.8.8`
  );

  const { data, error } = useSWR(url, fetcher);

  const search = () => {
    const ip = input.current.value;
    setUrl(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_5afOeLbeIL0JLFdcniqX6pkbSzCH1&ipAddress=${ip}&domain=${ip}`
    );
  };

  useEffect(() => {
    // input.current.add
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <>
        <Header>
          <Container>
            <h1>Ip Address Tracker</h1>
            <InputCon>
              <Input
                ref={input}
                onKeyDown={(e) => (e.key === "Enter" ? search() : null)}
              />
              <Arrow onClick={() => search()}>
                <img src="icon-arrow.svg" alt="" />
              </Arrow>
            </InputCon>

            {data && (
              <IpInfo
                ip={data.ip}
                city={data.location.city}
                region={data.location.region}
                isp={data.isp}
                timezone={data.location.timezone}
              />
            )}
          </Container>
        </Header>
        {data && (
          <MapContainer
            center={[data.location.lat, data.location.lng]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              // url="mapbox://styles/ashrafess010/cl0wf377l00r014qy15jm4gb0?access_token=pk.eyJ1IjoiYXNocmFmZXNzMDEwIiwiYSI6ImNsMHAyOXhwMjFlODgzY3BlZTZicXZ1NjQifQ.-Ig1ka5jNzFj2yULCcVOUg"
              url={`https://api.mapbox.com/styles/v1/${mapBoxUsername}/${mapBoxStyleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${mapBoxAccessKey}`}
            />
            {/* mapbox://styles/ashrafess010/cl0wfoz5n00bi14nktm96b8th */}
            <Marker
              position={[data.location.lat, data.location.lng]}
              icon={myIcon}
            >
              <Popup>{data.location.lat + " , " + data.location.lng}</Popup>
            </Marker>
          </MapContainer>
        )}
        {error && <Invalid />}
      </>
    </ThemeProvider>
  );
}

export default App;
