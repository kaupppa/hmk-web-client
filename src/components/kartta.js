import * as React from 'react';
import { CardContent, CardMedia, Card, Typography, Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import getInfo from '../service/Info-service';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapSharpIcon from '@mui/icons-material/MapSharp';

export default function Kartta() {
  const info = getInfo()
  const title = info.katuosoite + ', ' + info.postiosoite + ' ' + info.kaupunki
  let marker;
  if (typeof window !== 'undefined') {
    marker = L.icon({
      iconUrl: markerIcon,
      iconRetinaUrl: markerIcon2x,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
  }

  return (
    <Card sx={{
      alignSelf: 'stretch',
      width: "1",
      height: "1"
    }} >
      <CardContent>
      <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                alignContent: 'flex-start',
                marginBottom: '16px'
            }}>
            <MapSharpIcon color="success" fontSize="large" />
            <Typography variant="h2" sx={{
              marginLeft: '4px'
                }}>
            Kartta {title}
            </Typography>
        </Box>
        <CardMedia sx={{
          margin: { xs: '4px', sm: '8px', md: '16px', lg: '32px' }
        }}>
          {typeof window !== 'undefined' &&
            // Only in client side
            <MapContainer
              center={info.coord}
              zoom={17}
              scrollWheelZoom={false}
              touchZoom={true}
              style={{
                minHeight: "600px",
                minWidth: "250px",
                width: "1",
                height: "1"
              }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              <Marker position={info.coord} icon={marker}>
                <Popup>
                  <Typography>
                    Parkkipaikka
                  </Typography>
                </Popup>
              </Marker>
            </MapContainer>
          }
        </CardMedia>
      </CardContent>
    </Card>
  );
};
