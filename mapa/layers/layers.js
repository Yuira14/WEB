var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_llocs_1 = new ol.format.GeoJSON();
var features_llocs_1 = format_llocs_1.readFeatures(json_llocs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_llocs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_llocs_1.addFeatures(features_llocs_1);
var lyr_llocs_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_llocs_1, 
                style: style_llocs_1,
                interactive: true,
    title: 'llocs<br />\
    <img src="styles/legend/llocs_1_0.png" /> 1<br />\
    <img src="styles/legend/llocs_1_1.png" /> 2<br />\
    <img src="styles/legend/llocs_1_2.png" /> 3<br />\
    <img src="styles/legend/llocs_1_3.png" /> 4<br />\
    <img src="styles/legend/llocs_1_4.png" /> 5<br />\
    <img src="styles/legend/llocs_1_5.png" /> 6<br />\
    <img src="styles/legend/llocs_1_6.png" /> 8<br />\
    <img src="styles/legend/llocs_1_7.png" /> 9<br />\
    <img src="styles/legend/llocs_1_8.png" /> 10<br />\
    <img src="styles/legend/llocs_1_9.png" /> 11<br />\
    <img src="styles/legend/llocs_1_10.png" /> 12<br />\
    <img src="styles/legend/llocs_1_11.png" /> 13<br />\
    <img src="styles/legend/llocs_1_12.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_llocs_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_llocs_1];
lyr_llocs_1.set('fieldAliases', {'id': 'id', 'N_Taules': 'N_Taules', 'N_Llocs': 'N_Llocs', 'Facultat': 'Facultat', 'Ocupació': 'Ocupació', 'N_Zones': 'N_Zones', });
lyr_llocs_1.set('fieldImages', {'id': 'TextEdit', 'N_Taules': 'TextEdit', 'N_Llocs': 'TextEdit', 'Facultat': 'TextEdit', 'Ocupació': 'Range', 'N_Zones': 'Range', });
lyr_llocs_1.set('fieldLabels', {'id': 'inline label', 'N_Taules': 'inline label', 'N_Llocs': 'inline label', 'Facultat': 'inline label', 'Ocupació': 'inline label', 'N_Zones': 'inline label', });
lyr_llocs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});