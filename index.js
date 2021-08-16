import 'ol/ol.css';
import {Collection, Feature, Map, View} from 'ol';
import GeoJSON from 'ol/format/GeoJSON';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { fromLonLat, toLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style';
import sVector from 'ol/source/Vector';
import lVector from 'ol/layer/Vector';

var file =  `src/Alois Webergasse/DSC_1272.JPG
src/Alois Webergasse/DSC_1273.JPG
src/Am Hainer Berg/DSC01552.JPG
src/Am Hainer Berg/DSC01553.JPG
src/Am Hainer Berg/DSC02951.JPG
src/Am Hainer Berg/DSC02952.JPG
src/Am Hainer Berg/DSC02953.JPG
src/Am Hainer Berg/DSC02954.JPG
src/Am Hainer Berg/DSC02955.JPG
src/Am Hainer Berg/DSC02956.JPG
src/Am Hainer Berg/DSC02957.JPG
src/Am Hainer Berg/DSC_3539.JPG
src/Am Hainer Berg/DSC_3540.JPG
src/Am Hainer Berg/DSC_3541.JPG
src/Am Hainer Berg/DSC_3542.JPG
src/Am Hainer Berg/DSC_3543.JPG
src/Am Hainer Berg/DSC_3544.JPG
src/Am Hainer Berg/DSC_3547.JPG
src/Am Hainer Berg/IMG_1158.JPG
src/Am Hainer Berg/IMG_1159.JPG
src/Am Hainer Berg/IMG_1160.JPG
src/Am Hainer Berg/IMG_1325.JPG
src/Am Hainer Berg/IMG_1327.JPG
src/Am Hainer Berg/IMG_2709.JPG
src/Ansichten Herzogenburg/DSC00857.JPG
src/Ansichten Herzogenburg/DSC00858.JPG
src/Ansichten Herzogenburg/DSC00859.JPG
src/Ansichten Herzogenburg/DSC00860.JPG
src/Ansichten Herzogenburg/DSC00861.JPG
src/Ansichten Herzogenburg/DSC00862.JPG
src/Ansichten Herzogenburg/DSC00863.JPG
src/Ansichten Herzogenburg/DSC00864.JPG
src/Ansichten Herzogenburg/DSC00865.JPG
src/Ansichten Herzogenburg/DSC00866.JPG
src/Ansichten Herzogenburg/DSC00867.JPG
src/Ansichten Herzogenburg/DSC00868.JPG
src/Ansichten Herzogenburg/DSC00869.JPG
src/Ansichten Herzogenburg/DSC00870.JPG
src/Ansichten Herzogenburg/DSC00871.JPG
src/Ansichten Herzogenburg/DSC00872.JPG
src/Ansichten Herzogenburg/DSC00873.JPG
src/Ansichten Herzogenburg/DSC00874.JPG
src/Ansichten Herzogenburg/DSC00875.JPG
src/Ansichten Herzogenburg/DSC00876.JPG
src/Ansichten Herzogenburg/DSC00877.JPG
src/Ansichten Herzogenburg/DSC_1573.JPG
src/Ansichten Herzogenburg/DSC_1574.JPG
src/Ansichten Herzogenburg/DSC_1575.JPG
src/Ansichten Herzogenburg/DSC_1615.JPG
src/Ansichten Herzogenburg/DSC_1616.JPG
src/Ansichten Herzogenburg/DSC_1617.JPG
src/Ansichten Herzogenburg/DSC_1619.JPG
src/Ansichten Herzogenburg/DSC_1620.JPG
src/Ansichten Herzogenburg/DSC_1621.JPG
src/Ansichten Herzogenburg/DSC_1622.JPG
src/Ansichten Herzogenburg/DSC_1623.JPG
src/Ansichten Herzogenburg/DSC_1624.JPG
src/Ansichten Herzogenburg/DSC_1625.JPG
src/Ansichten Herzogenburg/DSC_1626.JPG
src/Ansichten Herzogenburg/DSC_1627.JPG
src/Ansichten Herzogenburg/DSC_1628.JPG
src/Ansichten Herzogenburg/DSC_1629.JPG
src/Ansichten Herzogenburg/DSC_1630.JPG
src/Ansichten Herzogenburg/DSC_1631.JPG
src/Ansichten Herzogenburg/DSC_1632.JPG
src/Ansichten Herzogenburg/DSC_1633.JPG
src/Ansichten Herzogenburg/DSC_1634.JPG
src/Ansichten Herzogenburg/DSC_1635.JPG
src/Ansichten Herzogenburg/DSC_1636.JPG
src/Ansichten Herzogenburg/DSC_1637.JPG
src/Ansichten Herzogenburg/DSC_1638.JPG
src/Ansichten Herzogenburg/DSC_1639.JPG
src/Ansichten Herzogenburg/DSC_1640.JPG
src/Ansichten Herzogenburg/DSC_1641.JPG
src/Ansichten Herzogenburg/DSC_1642.JPG
src/Ansichten Herzogenburg/DSC_1643.JPG
src/Ansichten Herzogenburg/DSC_1646.JPG
src/Ansichten Herzogenburg/DSC_1647.JPG
src/Ansichten Herzogenburg/DSC_1648.JPG
src/Ansichten Herzogenburg/DSC_1649.JPG
src/Ansichten Herzogenburg/DSC_1650.JPG
src/Ansichten Herzogenburg/DSC_1651.JPG
src/Ansichten Herzogenburg/DSC_1652.JPG
src/Ansichten Herzogenburg/DSC_1653.JPG
src/Ansichten Herzogenburg/DSC_1654.JPG
src/Ansichten Herzogenburg/DSC_1655.JPG
src/Ansichten Herzogenburg/DSC_1656.JPG
src/Ansichten Herzogenburg/DSC_1657.JPG
src/Ansichten Herzogenburg/DSC_1658.JPG
src/Ansichten Herzogenburg/DSC_1659.JPG
src/Ansichten Herzogenburg/DSC_1660.JPG
src/Ansichten Herzogenburg/DSC_1661.JPG
src/Ansichten Herzogenburg/DSC_1662.JPG
src/Ansichten Herzogenburg/DSC_1663.JPG
src/Ansichten Herzogenburg/DSC_1664.JPG
src/Ansichten Herzogenburg/DSC_1665.JPG
src/Ansichten Herzogenburg/DSC_1666.JPG
src/Ansichten Herzogenburg/DSC_1667.JPG
src/Ansichten Herzogenburg/DSC_1668.JPG
src/Ansichten Herzogenburg/DSC_1669.JPG
src/Ansichten Herzogenburg/DSC_1670.JPG
src/Ansichten Herzogenburg/DSC_1671.JPG
src/Ansichten Herzogenburg/DSC_1672.JPG
src/Ansichten Herzogenburg/DSC_1673.JPG
src/Ansichten Herzogenburg/DSC_1674.JPG
src/Ansichten Herzogenburg/DSC_1675.JPG
src/Ansichten Herzogenburg/DSC_1676.JPG
src/Ansichten Herzogenburg/DSC_1677.JPG
src/Ansichten Herzogenburg/DSC_1678.JPG
src/Ansichten Herzogenburg/DSC_1679.JPG
src/Ansichten Herzogenburg/DSC_1680.JPG
src/Ansichten Herzogenburg/DSC_1681.JPG
src/Ansichten Herzogenburg/DSC_1682.JPG
src/Ansichten Herzogenburg/DSC_1683.JPG
src/Ansichten Herzogenburg/DSC_1684.JPG
src/Ansichten Herzogenburg/DSC_1685.JPG
src/Ansichten Herzogenburg/DSC_1686.JPG
src/Ansichten Herzogenburg/DSC_1687.JPG
src/Ansichten Herzogenburg/DSC_1688.JPG
src/Ansichten Herzogenburg/DSC_1689.JPG
src/Ansichten Herzogenburg/DSC_1690.JPG
src/Ansichten Herzogenburg/DSC_1691.JPG
src/Ansichten Herzogenburg/DSC_1692.JPG
src/Ansichten Herzogenburg/DSC_1693.JPG
src/Ansichten Herzogenburg/DSC_1694.JPG
src/Ansichten Herzogenburg/DSC_1695.JPG
src/Ansichten Herzogenburg/DSC_1696.JPG
src/Ansichten Herzogenburg/DSC_1697.JPG
src/Ansichten Herzogenburg/DSC_1698.JPG
src/Ansichten Herzogenburg/DSC_1699.JPG
src/Ansichten Herzogenburg/DSC_1700.JPG
src/Ansichten Herzogenburg/DSC_1701.JPG
src/Ansichten Herzogenburg/DSC_1715.JPG
src/Ansichten Herzogenburg/DSC_1716.JPG
src/Ansichten Herzogenburg/DSC_1717.JPG
src/Ansichten Herzogenburg/DSC_1718.JPG
src/Ansichten Herzogenburg/DSC_1719.JPG
src/Ansichten Herzogenburg/DSC_1911.JPG
src/Ansichten Herzogenburg/DSC_1912.JPG
src/Ansichten Herzogenburg/DSC_3550.JPG
src/Ansichten Herzogenburg/DSC_3551.JPG
src/Ansichten Herzogenburg/DSC_3552.JPG
src/Ansichten Herzogenburg/DSC_3553.JPG
src/Ansichten Herzogenburg/DSC_3554.JPG
src/Ansichten Herzogenburg/DSC_3555.JPG
src/Ansichten Herzogenburg/DSC_3556.JPG
src/Ansichten Herzogenburg/DSC_3557.JPG
src/Ansichten Herzogenburg/DSC_3558.JPG
src/Ansichten Herzogenburg/DSC_3559.JPG
src/Ansichten Herzogenburg/DSC_3560.JPG
src/Ansichten Herzogenburg/DSC_3561.JPG
src/Ansichten Herzogenburg/DSC_3562.JPG
src/Ansichten Herzogenburg/DSC_4917.JPG
src/Ansichten Herzogenburg/DSC_4918.JPG
src/Ansichten Herzogenburg/DSC_4919.JPG
src/Ansichten Herzogenburg/DSC_4920.JPG
src/Ansichten Herzogenburg/DSC_4921.JPG
src/Ansichten Herzogenburg/DSC_4922.JPG
src/Ansichten Herzogenburg/DSC_4923.JPG
src/Ansichten Herzogenburg/DSC_4924.JPG
src/Ansichten Herzogenburg/DSC_4925.JPG
src/Ansichten Herzogenburg/DSC_4926.JPG
src/Ansichten Herzogenburg/DSC_4927.JPG
src/Ansichten Herzogenburg/DSC_4928.JPG
src/Ansichten Herzogenburg/DSC_4929.JPG
src/Ansichten Herzogenburg/DSC_4930.JPG
src/Ansichten Herzogenburg/DSC_4931.JPG
src/Ansichten Herzogenburg/DSC_4932.JPG
src/Ansichten Herzogenburg/DSC_4933.JPG
src/Ansichten Herzogenburg/DSC_5011.JPG
src/Ansichten Herzogenburg/DSC_5012.JPG
src/Ansichten Herzogenburg/DSC_5023.JPG
src/Ansichten Herzogenburg/DSC_5024.JPG
src/Ansichten Herzogenburg/DSC_5028.JPG
src/Ansichten Herzogenburg/DSC_5029.JPG
src/Ansichten Herzogenburg/DSC_5035.JPG
src/Ansichten Herzogenburg/DSC_5036.JPG
src/Ansichten Herzogenburg/DSC_5037.JPG
src/Ansichten Herzogenburg/DSC_5038.JPG
src/Ansichten Herzogenburg/IMG_0249.JPG
src/Ansichten Herzogenburg/IMG_0250.JPG
src/Ansichten Herzogenburg/IMG_0251.JPG
src/Ansichten Herzogenburg/IMG_0255.JPG
src/Ansichten Herzogenburg/IMG_0256.JPG
src/Ansichten Herzogenburg/IMG_0257.JPG
src/Ansichten Herzogenburg/IMG_0258.JPG
src/Ansichten Herzogenburg/IMG_0259.JPG
src/Ansichten Herzogenburg/IMG_0260.JPG
src/Ansichten Herzogenburg/STA_0244.JPG
src/Ansichten Herzogenburg/STA_0252.JPG
src/Ansichten Herzogenburg/STB_0245.JPG
src/Ansichten Herzogenburg/STB_0253.JPG
src/Ansichten Herzogenburg/STC_0246.JPG
src/Ansichten Herzogenburg/STC_0254.JPG
src/Ansichten Herzogenburg/STD_0247.JPG
src/Ansichten Herzogenburg/STE_0248.JPG
src/Abbruch Rathaus/20160506_141041.jpg
src/Abbruch Rathaus/20160506_141048.jpg
src/Abbruch Rathaus/20160506_141050.jpg
src/Abbruch Rathaus/20160506_141053.jpg
src/Abbruch Rathaus/20160506_141054.jpg
src/Abbruch Rathaus/20160506_142042.jpg
src/Abbruch Rathaus/20160506_142045.jpg
src/Abbruch Rathaus/20160506_142049.jpg
src/Am Hainer Berg/20191109_095446.jpg
src/Am Hainer Berg/20191109_095448.jpg
src/Am Hainer Berg/20191109_095539.jpg
src/Am Hainer Berg/20191109_095552.jpg
src/Am Hainer Berg/20191109_095600.jpg
src/Am Hainer Berg/20191109_095608.jpg
src/Am Hainer Berg/20191109_095629.jpg
src/Am Hainer Berg/20191109_095635.jpg
src/Am Hainer Berg/20191109_095707.jpg
src/Am Hainer Berg/20191109_095734.jpg
src/Am Hainer Berg/20191109_095809.jpg
src/Am Hainer Berg/20191109_095830.jpg
src/Am Hainer Berg/20191122_093246.jpg
src/Am Hainer Berg/20191122_093319.jpg
src/Am Hainer Berg/20191122_093326.jpg
src/Am Hainer Berg/20200314_111505.jpg
src/Am Hainer Berg/20200314_111507.jpg
src/Am Hainer Berg/20200314_111509.jpg
src/Am Hainer Berg/20200314_111537.jpg
src/Am Hainer Berg/20200314_111630.jpg
src/Am Hainer Berg/20200314_111633.jpg
src/Am Hainer Berg/20200314_111635.jpg
src/Andräersteg/20200124_134653.jpg
src/Andräersteg/20200124_134720.jpg
src/Andräersteg/20200124_134732.jpg
src/Andräersteg/20200124_134739.jpg
src/Andräersteg/20200124_134807.jpg
src/Andräersteg/20200124_134828.jpg
src/Andräersteg/20200124_134914.jpg
src/Andräersteg/20200124_134920.jpg
src/Andräersteg/20200124_134922.jpg
src/Andräersteg/20200124_134928.jpg
src/Andräersteg/20200124_135004.jpg
src/Ansichten Herzogenburg/20191215_084823.jpg
src/Ansichten Herzogenburg/20191215_084833.jpg
src/Ansichten Herzogenburg/20200320_135940.jpg
src/Ansichten Herzogenburg/20200320_135945.jpg
src/Ansichten Herzogenburg/20200320_135955.jpg
src/Ansichten Herzogenburg/20200331_140157.jpg
src/Ansichten Herzogenburg/20200331_140204.jpg
src/Ansichten Herzogenburg/20200331_140506.jpg
src/Ansichten Herzogenburg/HZGB-ges1.jpg`;

api = "qaX2KO6jP_YPXxg9Sva2pZLBWfdrjNbFC9YEI71z1Gs"

var index = 0
var files = file.split("\n")

document.getElementById("frame").src = files[index].replace("src", "https://paul42812.github.io/hzbg-assets/low/");
document.getElementById("name").innerHTML = files[index].replace("src/", "");

var view = new View({
    center: fromLonLat([15.696389, 48.286111]),
    zoom: 14,
})

function download(fileUrl, fileName) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", fileName);
  a.click();
}

const apiKey = 'qaX2KO6jP_YPXxg9Sva2pZLBWfdrjNbFC9YEI71z1Gs';

const urlTpl =
  'https://{1-4}.aerial.maps.ls.hereapi.com' +
  '/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png' +
  '?apiKey=qaX2KO6jP_YPXxg9Sva2pZLBWfdrjNbFC9YEI71z1Gs'

const urlTpl2 =
  'https://{1-4}.aerial.maps.ls.hereapi.com' +
  '/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png' +
  '?apiKey=qaX2KO6jP_YPXxg9Sva2pZLBWfdrjNbFC9YEI71z1Gs'

const urlTpl3 =
  'https://{1-4}.aerial.maps.ls.hereapi.com' +
  '/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png' +
  '?apiKey=qaX2KO6jP_YPXxg9Sva2pZLBWfdrjNbFC9YEI71z1Gs'

var a = new TileLayer({
      visible: true,
      preload: Infinity,
      source: new XYZ({
        url: urlTpl,
      }),
    })

var c = new TileLayer({
      visible: true,
      preload: Infinity,
      source: new XYZ({
        url: urlTpl2,
      }),
    })

var d = new TileLayer({
      visible: true,
      preload: Infinity,
      source: new XYZ({
        url: urlTpl3,
      }),
    })

var b = new TileLayer({
      source: new OSM(),
    })



const map = new Map({
  target: 'map',
  layers: [
    
  ],
  view: view,
  interrections: new Collection()
});

map.addLayer(b) //badc

var c = 1;
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        map.removeLayer(a);
        map.removeLayer(b);
        map.removeLayer(c);
        map.removeLayer(d);
        c+=1
        if (c==4){
          c=1;
        }
        if (c == 1) {
          map.addLayer(b);
        }
        if (c == 2) {
          map.addLayer(a);
        }
        if (c == 3) {
          map.addLayer(d);
        }
    }
}

var q = 0;
g = []
document.getElementById("proq").innerHTML = `${q}/${files.length}`
map.on('click', function(evt){
    var b = ((toLonLat(evt.coordinate)).toString() + ":" + files[index]);
    g.push(b);
    if (index < files.length - 1){
      index+=1;
    } else {
      
        var blob = new Blob([g], { type: "text/txt;charset=utf-8" });
        saveAs(blob, "data1.txt")
    }
    q+=1;
    document.getElementById("proq").innerHTML = `${q}/${files.length}`
    document.getElementById("frame").src = files[index].replace("src/", "https://paul42812.github.io/hzbg-assets/low/");
    document.getElementById("name").innerHTML = files[index].replace("src/", "");

    
});