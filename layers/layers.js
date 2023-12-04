var wms_layers = [];

var format_BahanSNAUPVIIWonokromo_0 = new ol.format.GeoJSON();
var features_BahanSNAUPVIIWonokromo_0 = format_BahanSNAUPVIIWonokromo_0.readFeatures(json_BahanSNAUPVIIWonokromo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BahanSNAUPVIIWonokromo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BahanSNAUPVIIWonokromo_0.addFeatures(features_BahanSNAUPVIIWonokromo_0);
var lyr_BahanSNAUPVIIWonokromo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BahanSNAUPVIIWonokromo_0, 
                style: style_BahanSNAUPVIIWonokromo_0,
                interactive: true,
                title: '<img src="styles/legend/BahanSNAUPVIIWonokromo_0.png" /> Bahan SNA — UP VII Wonokromo'
            });
var format_Reprojected_1 = new ol.format.GeoJSON();
var features_Reprojected_1 = format_Reprojected_1.readFeatures(json_Reprojected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_1.addFeatures(features_Reprojected_1);
var lyr_Reprojected_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojected_1, 
                style: style_Reprojected_1,
                interactive: true,
                title: '<img src="styles/legend/Reprojected_1.png" /> Reprojected'
            });
var format_Clippedmask_2 = new ol.format.GeoJSON();
var features_Clippedmask_2 = format_Clippedmask_2.readFeatures(json_Clippedmask_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clippedmask_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clippedmask_2.addFeatures(features_Clippedmask_2);
var lyr_Clippedmask_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clippedmask_2, 
                style: style_Clippedmask_2,
                interactive: true,
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_2_0.png" /> 500<br />\
    <img src="styles/legend/Clippedmask_2_1.png" /> 1000<br />\
    <img src="styles/legend/Clippedmask_2_2.png" /> 1500<br />\
    <img src="styles/legend/Clippedmask_2_3.png" /> 2000<br />\
    <img src="styles/legend/Clippedmask_2_4.png" /> 2500<br />\
    <img src="styles/legend/Clippedmask_2_5.png" /> 3000<br />'
        });
var format_Servicearealines_3 = new ol.format.GeoJSON();
var features_Servicearealines_3 = format_Servicearealines_3.readFeatures(json_Servicearealines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_3.addFeatures(features_Servicearealines_3);
var lyr_Servicearealines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearealines_3, 
                style: style_Servicearealines_3,
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_3.png" /> Service area (lines)'
            });
var format_kesehatannreprojected_4 = new ol.format.GeoJSON();
var features_kesehatannreprojected_4 = format_kesehatannreprojected_4.readFeatures(json_kesehatannreprojected_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatannreprojected_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatannreprojected_4.addFeatures(features_kesehatannreprojected_4);
var lyr_kesehatannreprojected_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kesehatannreprojected_4, 
                style: style_kesehatannreprojected_4,
                interactive: true,
                title: '<img src="styles/legend/kesehatannreprojected_4.png" /> kesehatann — reprojected'
            });

lyr_BahanSNAUPVIIWonokromo_0.setVisible(true);lyr_Reprojected_1.setVisible(true);lyr_Clippedmask_2.setVisible(true);lyr_Servicearealines_3.setVisible(true);lyr_kesehatannreprojected_4.setVisible(true);
var layersList = [lyr_BahanSNAUPVIIWonokromo_0,lyr_Reprojected_1,lyr_Clippedmask_2,lyr_Servicearealines_3,lyr_kesehatannreprojected_4];
lyr_BahanSNAUPVIIWonokromo_0.set('fieldAliases', {'Kode': 'Kode', 'Keterangan': 'Keterangan', 'Zona': 'Zona', 'Sub_Zona': 'Sub_Zona', 'Kawasan': 'Kawasan', 'Sub_UP': 'Sub_UP', 'UP': 'UP', 'Blok': 'Blok', 'Luas': 'Luas', });
lyr_Reprojected_1.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_Clippedmask_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cost_level': 'cost_level', });
lyr_Servicearealines_3.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', });
lyr_kesehatannreprojected_4.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_BahanSNAUPVIIWonokromo_0.set('fieldImages', {'Kode': 'TextEdit', 'Keterangan': 'TextEdit', 'Zona': 'TextEdit', 'Sub_Zona': 'TextEdit', 'Kawasan': 'TextEdit', 'Sub_UP': 'TextEdit', 'UP': 'TextEdit', 'Blok': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Reprojected_1.set('fieldImages', {'id': '', 'Status': '', 'Jangkauan': '', });
lyr_Clippedmask_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'cost_level': 'TextEdit', });
lyr_Servicearealines_3.set('fieldImages', {'id': '', 'Status': '', 'Jangkauan': '', 'type': '', 'start': '', });
lyr_kesehatannreprojected_4.set('fieldImages', {'id': '', 'Status': '', 'Jangkauan': '', });
lyr_BahanSNAUPVIIWonokromo_0.set('fieldLabels', {'Kode': 'no label', 'Keterangan': 'no label', 'Zona': 'no label', 'Sub_Zona': 'no label', 'Kawasan': 'no label', 'Sub_UP': 'no label', 'UP': 'no label', 'Blok': 'no label', 'Luas': 'no label', });
lyr_Reprojected_1.set('fieldLabels', {'id': 'no label', 'Status': 'no label', 'Jangkauan': 'no label', });
lyr_Clippedmask_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cost_level': 'no label', });
lyr_Servicearealines_3.set('fieldLabels', {'id': 'no label', 'Status': 'no label', 'Jangkauan': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_kesehatannreprojected_4.set('fieldLabels', {'id': 'no label', 'Status': 'no label', 'Jangkauan': 'no label', });
lyr_kesehatannreprojected_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});