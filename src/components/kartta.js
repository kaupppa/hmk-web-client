import * as React from 'react';
import { CardContent, CardMedia, Card, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import getInfo from '../service/Info-service';

export default function Kartta() {
  const info = getInfo()
  const title = info.katuosoite + ', ' + info.postiosoite + ' ' + info.kaupunki

  return (
    <Card sx={{
      alignSelf: 'stretch',
      width: "1",
      height: "1"
    }} >
      <CardContent>
        <Typography variant="h2" >
          {title}
        </Typography>
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
              <Marker position={info.coord}>
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
