'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = () => {
  useEffect(() => {
    // 确保只在浏览器环境中加载地图
    if (typeof window !== 'undefined' && window.L) {
      const map = L.map('map', { attributionControl: false })

      const DestinationIcon = L.icon({
        iconUrl: '/images/map_marker.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      })

      map.setView([35.688233, 139.785881], 16)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      L.marker([35.688233, 139.785881], { icon: DestinationIcon })
        .addTo(map)
        .bindPopup('〒103-0007 東京都中央区日本橋浜町３-２３-１ACN日本橋リバーサイドビル８Ｆ')
        .openPopup()

      // 清理地图实例
      return () => {
        if (map) {
          map.off()
          map.remove()
        }
      }
    }
  }, []) // 空依赖数组，确保 useEffect 只执行一次

  return <div id="map" style={{ width: '900px', height: '300px' }} />
}

export default MapComponent