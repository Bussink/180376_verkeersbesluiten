var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Verkeersbesluiten_amsterdam_2018_0 = new ol.format.GeoJSON();
var features_Verkeersbesluiten_amsterdam_2018_0 = format_Verkeersbesluiten_amsterdam_2018_0.readFeatures(json_Verkeersbesluiten_amsterdam_2018_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verkeersbesluiten_amsterdam_2018_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Verkeersbesluiten_amsterdam_2018_0.addFeatures(features_Verkeersbesluiten_amsterdam_2018_0);var lyr_Verkeersbesluiten_amsterdam_2018_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Verkeersbesluiten_amsterdam_2018_0, 
                style: style_Verkeersbesluiten_amsterdam_2018_0,
    title: 'Verkeersbesluiten_amsterdam_2018<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_0.png" /> <br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_1.png" /> A1<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_2.png" /> A2<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_3.png" /> A4<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_4.png" /> A5<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_5.png" /> B1<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_6.png" /> B3<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_7.png" /> B6<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_8.png" /> B7<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_9.png" /> C1<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_10.png" /> C12<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_11.png" /> C13<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_12.png" /> C14<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_13.png" /> C15<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_14.png" /> C16<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_15.png" /> C18<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_16.png" /> C19<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_17.png" /> C2<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_18.png" /> C20<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_19.png" /> C21<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_20.png" /> C3<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_21.png" /> C4<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_22.png" /> C6<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_23.png" /> C7<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_24.png" /> C7a<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_25.png" /> C9<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_26.png" /> D2<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_27.png" /> D4<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_28.png" /> D5<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_29.png" /> E1<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_30.png" /> E10<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_31.png" /> E11<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_32.png" /> E2<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_33.png" /> E3<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_34.png" /> E4<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_35.png" /> E5<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_36.png" /> E6<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_37.png" /> E7<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_38.png" /> E8<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_39.png" /> E9<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_40.png" /> F13<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_41.png" /> F15<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_42.png" /> F17<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_43.png" /> F5<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_44.png" /> F6<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_45.png" /> F7<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_46.png" /> G11<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_47.png" /> G12<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_48.png" /> G12a<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_49.png" /> G12b<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_50.png" /> G5<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_51.png" /> G7<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_52.png" /> G8<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_53.png" /> J23<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_54.png" /> J24<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_55.png" /> L2<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_56.png" /> L3<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_57.png" /> L8<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_58.png" /> N.v.t.<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_59.png" /> WM12<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_60.png" /> WM5<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_61.png" /> WM6<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_62.png" /> WM7<br />\
    <img src="styles/legend/Verkeersbesluiten_amsterdam_2018_0_63.png" /> WM8<br />'
        });

lyr_Verkeersbesluiten_amsterdam_2018_0.setVisible(true);
var layersList = [baseLayer,lyr_Verkeersbesluiten_amsterdam_2018_0];
lyr_Verkeersbesluiten_amsterdam_2018_0.set('fieldAliases', {'record': 'record', 'stcrt': 'stcrt', 'x': 'x', 'y': 'y', 'code': 'code', 'url': 'url', });
lyr_Verkeersbesluiten_amsterdam_2018_0.set('fieldImages', {'record': 'TextEdit', 'stcrt': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'code': 'TextEdit', 'url': 'TextEdit', });
lyr_Verkeersbesluiten_amsterdam_2018_0.set('fieldLabels', {'record': 'inline label', 'stcrt': 'inline label', 'x': 'inline label', 'y': 'inline label', 'code': 'inline label', 'url': 'inline label', });
lyr_Verkeersbesluiten_amsterdam_2018_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});