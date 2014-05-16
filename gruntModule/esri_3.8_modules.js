var esriAMD = [
	'_coremap.js',
	'arcgis/csv.js',
	'arcgis/Portal.js',
	'arcgis/utils.js',
	'config.js',
	'css/esri.css',
	'deferredUtils.js',
	'dijit/_EventedWidget.js',
	'dijit/_TouchBase.js',
	'dijit/analysis/images/AggregatePoints32.png',
	'dijit/analysis/images/Around32.png',
	'dijit/analysis/images/AttributeCalculator32.png',
	'dijit/analysis/images/BufferAttribute32.png',
	'dijit/analysis/images/BufferDistance32.png',
	'dijit/analysis/images/ClausesGroup16.png',
	'dijit/analysis/images/ClausesGroup16disabled.png',
	'dijit/analysis/images/ClausesUngroup16.png',
	'dijit/analysis/images/ClausesUngroup16disabled.png',
	'dijit/analysis/images/ClipAndShip32.png',
	'dijit/analysis/images/close.gif',
	'dijit/analysis/images/CorrelationFinder32.png',
	'dijit/analysis/images/CreateBuffers32.png',
	'dijit/analysis/images/CreateDensitySurface32.png',
	'dijit/analysis/images/CreateDriveTimeAreas32.png',
	'dijit/analysis/images/CreateInterpolatedSurface32.png',
	'dijit/analysis/images/Disks32.png',
	'dijit/analysis/images/Dissolve32.png',
	'dijit/analysis/images/DissolveBoundaries32.png',
	'dijit/analysis/images/DrivingDistance32.png',
	'dijit/analysis/images/DrivingTime32.png',
	'dijit/analysis/images/DrivingTimeDisabled32.png',
	'dijit/analysis/images/EditClause.png',
	'dijit/analysis/images/EditClauseDisabled16.png',
	'dijit/analysis/images/EditView.png',
	'dijit/analysis/images/Erase32.png',
	'dijit/analysis/images/EraseDisabled32.png',
	'dijit/analysis/images/Exclude32.png',
	'dijit/analysis/images/FindExistingLocations32.png',
	'dijit/analysis/images/FindHotSpots32.png',
	'dijit/analysis/images/FindNearest32.png',
	'dijit/analysis/images/FindNewLocations32.png',
	'dijit/analysis/images/FindSimilarLocations32.png',
	'dijit/analysis/images/Flat32.png',
	'dijit/analysis/images/GenericEraser16.png',
	'dijit/analysis/images/GenericEraserDisabled16.png',
	'dijit/analysis/images/GeoenrichFeatures32.png',
	'dijit/analysis/images/GridView.png',
	'dijit/analysis/images/Help16.png',
	'dijit/analysis/images/Help16.png',
	'dijit/analysis/images/Include32.png',
	'dijit/analysis/images/Intersect32.png',
	'dijit/analysis/images/IntersectDisabled32.png',
	'dijit/analysis/images/Left32.png',
	'dijit/analysis/images/MergeLayers32.png',
	'dijit/analysis/images/Overlap32.png',
	'dijit/analysis/images/OverlayLayers32.png',
	'dijit/analysis/images/Right32.png',
	'dijit/analysis/images/Rings32.png',
	'dijit/analysis/images/Round32.png',
	'dijit/analysis/images/Split32.png',
	'dijit/analysis/images/StraightLineDistance32.png',
	'dijit/analysis/images/StraightLineDistanceDisabled32.png',
	'dijit/analysis/images/SummarizeNearby32.png',
	'dijit/analysis/images/SummarizeWithin32.png',
	'dijit/analysis/images/treeExpandImages.png',
	'dijit/analysis/images/treeExpandImages.png',
	'dijit/analysis/images/treeExpandImages.png',
	'dijit/analysis/images/treeExpandImages.png',
	'dijit/analysis/images/Union32.png',
	'dijit/analysis/images/UnionDisabled32.png',
	'dijit/AttributeInspector.js',
	'dijit/Attribution.js',
	'dijit/Basemap.js',
	'dijit/BasemapGallery.js',
	'dijit/BasemapLayer.js',
	'dijit/BookmarkItem.js',
	'dijit/Bookmarks.js',
	'dijit/Directions.js',
	'dijit/editing/Add.js',
	'dijit/editing/AttachmentEditor.js',
	'dijit/editing/Cut.js',
	'dijit/editing/Delete.js',
	'dijit/editing/Editor.js',
	'dijit/editing/images/toolbar_icons.png',
	'dijit/editing/SelectionHelper.js',
	'dijit/editing/TemplatePicker.js',
	'dijit/editing/TemplatePickerItem.js',
	'dijit/editing/templates/AttachmentEditor.html',
	'dijit/editing/templates/Editor.html',
	'dijit/editing/templates/TemplatePicker.html',
	'dijit/editing/toolbars/Drawing.js',
	'dijit/editing/toolbars/ToolbarBase.js',
	'dijit/editing/tools/ButtonToolBase.js',
	'dijit/editing/tools/Cut.js',
	'dijit/editing/tools/DropDownToolBase.js',
	'dijit/editing/tools/DropDownToolBase.js',
	'dijit/editing/tools/Edit.js',
	'dijit/editing/tools/Edit.js',
	'dijit/editing/tools/Editing.js',
	'dijit/editing/tools/EditingTools.js',
	'dijit/editing/tools/MenuItemBase.js',
	'dijit/editing/tools/Reshape.js',
	'dijit/editing/tools/Selection.js',
	'dijit/editing/tools/SelectionTools.js',
	'dijit/editing/tools/ToggleToolBase.js',
	'dijit/editing/tools/ToggleToolBase.js',
	'dijit/editing/tools/ToolBase.js',
	'dijit/editing/tools/Union.js',
	'dijit/editing/Union.js',
	'dijit/editing/Update.js',
	'dijit/editing/Util.js',
	'dijit/Gallery.js',
	'dijit/Gauge.js',
	'dijit/Geocoder.js',
	'dijit/geoenrichment/themes/common/images/collapse.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Business.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Business.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Business_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Business_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/default.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/default.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/default_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/default_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/DefaultLandscapeNormal.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/DefaultLandscapeNormal.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/DefaultLandscapeOver.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/DefaultLandscapeOver.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Health.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Health.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Health_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Health_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/KeyUSData.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/KeyUSData.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/KeyUSData_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/KeyUSData_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Media.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Media.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Media_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Media_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Policy.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Policy.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Policy_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Policy_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Tapestry.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Tapestry.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Tapestry_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Tapestry_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Wealth.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Wealth.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Wealth_over.png',
	'dijit/geoenrichment/themes/common/images/dataCollections/Wealth_over.png',
	'dijit/geoenrichment/themes/common/images/DRA.png',
	'dijit/geoenrichment/themes/common/images/expand.png',
	'dijit/geoenrichment/themes/common/images/largeBusy.gif',
	'dijit/geoenrichment/themes/common/images/largeBusy.gif',
	'dijit/geoenrichment/themes/common/images/largeBusy.gif',
	'dijit/geoenrichment/themes/common/images/largeBusy.gif',
	'dijit/geoenrichment/themes/common/images/leftArrowTail.png',
	'dijit/geoenrichment/themes/common/images/leftArrowTail.png',
	'dijit/geoenrichment/themes/common/images/leftarrowwhite.png',
	'dijit/geoenrichment/themes/common/images/leftarrowwhite.png',
	'dijit/geoenrichment/themes/common/images/legendLayerContextLightGray.png',
	'dijit/geoenrichment/themes/common/images/legendLayerContextLightGray.png',
	'dijit/geoenrichment/themes/common/images/legendLayerContextLightGray_rtl.png',
	'dijit/geoenrichment/themes/common/images/legendLayerContextLightGray_rtl.png',
	'dijit/geoenrichment/themes/common/images/one.png',
	'dijit/geoenrichment/themes/common/images/pan.png',
	'dijit/geoenrichment/themes/common/images/PulldownTriangleIcon.png',
	'dijit/geoenrichment/themes/common/images/rightArrowTail.png',
	'dijit/geoenrichment/themes/common/images/rightArrowTail.png',
	'dijit/geoenrichment/themes/common/images/rightArrowwhite.png',
	'dijit/geoenrichment/themes/common/images/rightArrowwhite.png',
	'dijit/geoenrichment/themes/common/images/rightArrowwhite.png',
	'dijit/geoenrichment/themes/common/images/smallBusy.gif',
	'dijit/geoenrichment/themes/common/images/three.png',
	'dijit/geoenrichment/themes/common/images/two.png',
	'dijit/images/ajax-loader-blue.gif',
	'dijit/images/ajax-loader.gif',
	'dijit/images/arcgisGeocoder.png',
	'dijit/images/arcgisGeocoder.png',
	'dijit/images/arcgisGeocoder.png',
	'dijit/images/arcgisGeocoder.png',
	'dijit/images/arcgisGeocoder.png',
	'dijit/images/attribute_inspector_sprite.png',
	'dijit/images/button-active.png',
	'dijit/images/button-active.png',
	'dijit/images/button-hover.png',
	'dijit/images/claro.infowindow.png',
	'dijit/images/close.gif',
	'dijit/images/Directions/loading-32.gif',
	'dijit/images/Directions/maneuvers/esriDMTBearLeft.png',
	'dijit/images/Directions/maneuvers/esriDMTBearRight.png',
	'dijit/images/Directions/maneuvers/esriDMTDepart.png',
	'dijit/images/Directions/maneuvers/esriDMTDoorPassage.png',
	'dijit/images/Directions/maneuvers/esriDMTElevator.png',
	'dijit/images/Directions/maneuvers/esriDMTEndOfFerry.png',
	'dijit/images/Directions/maneuvers/esriDMTEscalator.png',
	'dijit/images/Directions/maneuvers/esriDMTFerry.png',
	'dijit/images/Directions/maneuvers/esriDMTForkCenter.png',
	'dijit/images/Directions/maneuvers/esriDMTForkLeft.png',
	'dijit/images/Directions/maneuvers/esriDMTForkRight.png',
	'dijit/images/Directions/maneuvers/esriDMTHighwayChange.png',
	'dijit/images/Directions/maneuvers/esriDMTHighwayExit.png',
	'dijit/images/Directions/maneuvers/esriDMTHighwayMerge.png',
	'dijit/images/Directions/maneuvers/esriDMTPedestrianRamp.png',
	'dijit/images/Directions/maneuvers/esriDMTRampLeft.png',
	'dijit/images/Directions/maneuvers/esriDMTRampRight.png',
	'dijit/images/Directions/maneuvers/esriDMTRoundabout.png',
	'dijit/images/Directions/maneuvers/esriDMTSharpLeft.png',
	'dijit/images/Directions/maneuvers/esriDMTSharpRight.png',
	'dijit/images/Directions/maneuvers/esriDMTStairs.png',
	'dijit/images/Directions/maneuvers/esriDMTStop.png',
	'dijit/images/Directions/maneuvers/esriDMTStop.png',
	'dijit/images/Directions/maneuvers/esriDMTStopDestination.png',
	'dijit/images/Directions/maneuvers/esriDMTStopDestination.png',
	'dijit/images/Directions/maneuvers/esriDMTStopOrigin.png',
	'dijit/images/Directions/maneuvers/esriDMTStopOrigin.png',
	'dijit/images/Directions/maneuvers/esriDMTStraight.png',
	'dijit/images/Directions/maneuvers/esriDMTTripItem.png',
	'dijit/images/Directions/maneuvers/esriDMTTurnLeft.png',
	'dijit/images/Directions/maneuvers/esriDMTTurnLeftLeft.png',
	'dijit/images/Directions/maneuvers/esriDMTTurnLeftRight.png',
	'dijit/images/Directions/maneuvers/esriDMTTurnRight.png',
	'dijit/images/Directions/maneuvers/esriDMTTurnRightLeft.png',
	'dijit/images/Directions/maneuvers/esriDMTTurnRightRight.png',
	'dijit/images/Directions/maneuvers/esriDMTUnknown.png',
	'dijit/images/Directions/maneuvers/esriDMTUTurn.png',
	'dijit/images/Directions/print.png',
	'dijit/images/Directions/remove-destination.png',
	'dijit/images/Directions/reverse.png',
	'dijit/images/edit.png',
	'dijit/images/hDrag.png',
	'dijit/images/HistogramTimeSlider/circle_slider.png',
	'dijit/images/home-spinner.gif',
	'dijit/images/home.png',
	'dijit/images/leftlongarrow.png',
	'dijit/images/loading.gif',
	'dijit/images/loading.gif',
	'dijit/images/locate-spinner.gif',
	'dijit/images/locate.png',
	'dijit/images/Measure_Area16.png',
	'dijit/images/Measure_Distance16.png',
	'dijit/images/Measure_Point16.png',
	'dijit/images/MosaicRule_Query.png',
	'dijit/images/MosaicRule_Threedots.png',
	'dijit/images/MosaicRule_Threedots.png',
	'dijit/images/nihilo.infowindow.png',
	'dijit/images/overview.png',
	'dijit/images/overview.png',
	'dijit/images/overview.png',
	'dijit/images/overview.png',
	'dijit/images/overview.png',
	'dijit/images/overview.png',
	'dijit/images/pointerbottom.png',
	'dijit/images/pointertop.png',
	'dijit/images/popup.png',
	'dijit/images/popup.png',
	'dijit/images/popup.png',
	'dijit/images/popup.png',
	'dijit/images/remove-24x24.png',
	'dijit/images/rightlongarrow.png',
	'dijit/images/scope.png',
	'dijit/images/simpleGeocoder.png',
	'dijit/images/simpleGeocoder.png',
	'dijit/images/simpleGeocoder.png',
	'dijit/images/simpleGeocoder.png',
	'dijit/images/simpleGeocoder.png',
	'dijit/images/soria.infowindow.png',
	'dijit/images/spinner.gif',
	'dijit/images/squarearrow.png',
	'dijit/images/stop.png',
	'dijit/images/time_slider_sprite.png',
	'dijit/images/tundra.infowindow.png',
	'dijit/images/vDrag.png',
	'dijit/images/whiter.png',
	'dijit/images/whitex.png',
	'dijit/InfoView.js',
	'dijit/InfoWindow.js',
	'dijit/InfoWindowLite.js',
	'dijit/Legend.js',
	'dijit/Measurement.js',
	'dijit/NavigationBar.js',
	'dijit/OverviewMap.js',
	'dijit/Popup.js',
	'dijit/PopupMobile.js',
	'dijit/PopupRenderer.js',
	'dijit/PopupTemplate.js',
	'dijit/Print.js',
	'dijit/Rainbow.js',
	'dijit/Scalebar.js',
	'dijit/templates/AttributeInspector.html',
	'dijit/templates/BasemapGallery.html',
	'dijit/templates/Directions.html',
	'dijit/templates/Gauge.html',
	'dijit/templates/Geocoder.html',
	'dijit/templates/InfoWindow.html',
	'dijit/templates/Measurement.html',
	'dijit/templates/OverviewMap.html',
	'dijit/templates/TimeSlider.html',
	'dijit/TimeSlider.js',
	'domUtils.js',
	'Evented.js',
	'fx.js',
	'geometry/Extent.js',
	'geometry/geodesicUtils.js',
	'geometry/Geometry.js',
	'geometry/jsonUtils.js',
	'geometry/mathUtils.js',
	'geometry/Multipoint.js',
	'geometry/normalizeUtils.js',
	'geometry/Point.js',
	'geometry/Polygon.js',
	'geometry/Polyline.js',
	'geometry/Rect.js',
	'geometry/scaleUtils.js',
	'geometry/ScreenPoint.js',
	'geometry/screenUtils.js',
	'geometry/webMercatorUtils.js',
	'graphic.js',
	'graphicsUtils.js',
	'IdentityManager.js',
	'IdentityManagerBase.js',
	'IdentityManagerDialog.js',
	'images/map/70-percent-white.png',
	'images/map/bing-logo-lg.png',
	'images/map/fixed-pan-sprite.png',
	'images/map/logo-med.png',
	'images/map/logo-sm.png',
	'InfoTemplate.js',
	'InfoWindowBase.js',
	'kernel.js',
	'lang.js',
	'layers/ArcGISDynamicMapServiceLayer.js',
	'layers/ArcGISImageServiceLayer.js',
	'layers/ArcGISMapServiceLayer.js',
	'layers/ArcGISTiledMapServiceLayer.js',
	'layers/CodedValueDomain.js',
	'layers/DataSource.js',
	'layers/Domain.js',
	'layers/DynamicLayerInfo.js',
	'layers/DynamicMapServiceLayer.js',
	'layers/FeatureEditResult.js',
	'layers/FeatureLayer.js',
	'layers/FeatureTemplate.js',
	'layers/FeatureType.js',
	'layers/Field.js',
	'layers/GeoRSSLayer.js',
	'layers/GraphicsLayer.js',
	'layers/GridLayout.js',
	'layers/ImageParameters.js',
	'layers/ImageServiceParameters.js',
	'layers/InheritedDomain.js',
	'layers/JoinDataSource.js',
	'layers/KMLFolder.js',
	'layers/KMLGroundOverlay.js',
	'layers/KMLLayer.js',
	'layers/LabelClass.js',
	'layers/layer.js',
	'layers/LayerDataSource.js',
	'layers/LayerDrawingOptions.js',
	'layers/LayerInfo.js',
	'layers/LayerMapSource.js',
	'layers/LayerSource.js',
	'layers/LayerTimeOptions.js',
	'layers/LOD.js',
	'layers/MapImage.js',
	'layers/MapImageLayer.js',
	'layers/MosaicRule.js',
	'layers/OnDemandMode.js',
	'layers/OpenStreetMapLayer.js',
	'layers/QueryDataSource.js',
	'layers/RangeDomain.js',
	'layers/RasterDataSource.js',
	'layers/RasterFunction.js',
	'layers/RenderMode.js',
	'layers/RenderMode.js',
	'layers/RenderMode.js',
	'layers/SelectionMode.js',
	'layers/ServiceGeneratedFeatureCollection.js',
	'layers/SnapshotMode.js',
	'layers/TableDataSource.js',
	'layers/TiledMapServiceLayer.js',
	'layers/TileInfo.js',
	'layers/TimeInfo.js',
	'layers/TimeReference.js',
	'layers/TrackManager.js',
	'layers/WebTiledLayer.js',
	'layers/WMSLayer.js',
	'layers/WMSLayerInfo.js',
	'layers/WMTSLayer.js',
	'layers/WMTSLayerInfo.js',
	'layerUtils.js',
	'main.js',
	'map.js',
	'MapNavigationManager.js',
	'MouseEvents.js',
	'nls/jsapi.js',
	'OperationBase.js',
	'PointerEvents.js',
	'PopupBase.js',
	'PopupInfo.js',
	'renderers/ClassBreaksRenderer.js',
	'renderers/DotDensityRenderer.js',
	'renderers/jsonUtils.js',
	'renderers/Renderer.js',
	'renderers/ScaleDependentRenderer.js',
	'renderers/SimpleRenderer.js',
	'renderers/SymbolAger.js',
	'renderers/TemporalRenderer.js',
	'renderers/TimeClassBreaksAger.js',
	'renderers/TimeRampAger.js',
	'renderers/UniqueValueRenderer.js',
	'request.js',
	'ServerInfo.js',
	'SnappingManager.js',
	'sniff.js',
	'SpatialReference.js',
	'symbols/CartographicLineSymbol.js',
	'symbols/FillSymbol.js',
	'symbols/Font.js',
	'symbols/jsonUtils.js',
	'symbols/LineSymbol.js',
	'symbols/MarkerSymbol.js',
	'symbols/PictureFillSymbol.js',
	'symbols/PictureMarkerSymbol.js',
	'symbols/SimpleFillSymbol.js',
	'symbols/SimpleLineSymbol.js',
	'symbols/SimpleMarkerSymbol.js',
	'symbols/Symbol.js',
	'symbols/TextSymbol.js',
	'tasks/AddressCandidate.js',
	'tasks/AlgorithmicColorRamp.js',
	'tasks/AreasAndLengthsParameters.js',
	'tasks/BufferParameters.js',
	'tasks/ClassBreaksDefinition.js',
	'tasks/ClassificationDefinition.js',
	'tasks/ClosestFacilityParameters.js',
	'tasks/ClosestFacilitySolveResult.js',
	'tasks/ClosestFacilityTask.js',
	'tasks/ColorRamp.js',
	'tasks/DataFile.js',
	'tasks/DataLayer.js',
	'tasks/Date.js',
	'tasks/DensifyParameters.js',
	'tasks/DirectionsFeatureSet.js',
	'tasks/DistanceParameters.js',
	'tasks/FeatureSet.js',
	'tasks/FindParameters.js',
	'tasks/FindResult.js',
	'tasks/FindTask.js',
	'tasks/GeneralizeParameters.js',
	'tasks/GenerateRendererParameters.js',
	'tasks/GenerateRendererTask.js',
	'tasks/GeometryService.js',
	'tasks/Geoprocessor.js',
	'tasks/GPMessage.js',
	'tasks/GPResultImageLayer.js',
	'tasks/IdentifyParameters.js',
	'tasks/IdentifyResult.js',
	'tasks/IdentifyTask.js',
	'tasks/ImageServiceIdentifyParameters.js',
	'tasks/ImageServiceIdentifyResult.js',
	'tasks/ImageServiceIdentifyTask.js',
	'tasks/JobInfo.js',
	'tasks/LegendLayer.js',
	'tasks/LengthsParameters.js',
	'tasks/LinearUnit.js',
	'tasks/locator.js',
	'tasks/MultipartColorRamp.js',
	'tasks/NAMessage.js',
	'tasks/NATypes.js',
	'tasks/OffsetParameters.js',
	'tasks/ParameterValue.js',
	'tasks/PrintParameters.js',
	'tasks/PrintTask.js',
	'tasks/PrintTemplate.js',
	'tasks/ProjectParameters.js',
	'tasks/query.js',
	'tasks/QueryTask.js',
	'tasks/RasterData.js',
	'tasks/RelationParameters.js',
	'tasks/RelationshipQuery.js',
	'tasks/RouteParameters.js',
	'tasks/RouteResult.js',
	'tasks/RouteTask.js',
	'tasks/ServiceAreaParameters.js',
	'tasks/ServiceAreaSolveResult.js',
	'tasks/ServiceAreaTask.js',
	'tasks/SpatialRelationship.js',
	'tasks/StatisticDefinition.js',
	'tasks/Task.js',
	'tasks/TrimExtendParameters.js',
	'tasks/UniqueValueDefinition.js',
	'tileUtils.js',
	'TimeExtent.js',
	'toolbars/_Box.js',
	'toolbars/_GraphicMover.js',
	'toolbars/_toolbar.js',
	'toolbars/_VertexEditor.js',
	'toolbars/_VertexMover.js',
	'toolbars/draw.js',
	'toolbars/edit.js',
	'toolbars/images/delete.png',
	'toolbars/navigation.js',
	'toolbars/TextEditor.js',
	'TouchEvents.js',
	'undoManager.js',
	'units.js',
	'urlUtils.js',
	'virtualearth/VEAddress.js',
	'virtualearth/VEGeocoder.js',
	'virtualearth/VEGeocodeResult.js',
	'virtualearth/VETiledLayer.js',
	'WKIDUnitConversion.js'
];

module.exports = esriAMD;