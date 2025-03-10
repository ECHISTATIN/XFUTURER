'use client'
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      // 设置地图中心点和缩放级别
      const center = fromLonLat([139.785881, 35.688233]); // 经度, 纬度

      // 创建标记图标样式
      const markerStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: '/images/map_marker.png',
          scale: 0.1, // 缩放比例
        }),
      });

      // 创建标记
      const marker = new Feature({
        geometry: new Point(center),
      });
      marker.setStyle(markerStyle);

      // 创建地图
      const map = new Map({
        target: mapContainer.current,
        layers: [
          new TileLayer({
            source: new OSM(), // 加载 OpenStreetMap 瓦片
          }),
          new VectorLayer({
            source: new VectorSource({
              features: [marker],
            }),
          }),
        ],
        view: new View({
          center: center,
          zoom: 16,
        }),
      });

      return () => {
        // 清理地图实例
        map.setTarget("");
      };
    }
  }, []);

  return <div ref={mapContainer} style={{ width: '700px', height: '300px' }}></div>;
};

export default MapComponent;
