// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.viewPager =	{
	indicatorColor 	: "#6A9E68",
    backgroundColor : "#A1CC9F",    	
	color 			: "#000000",
    upperCase 		: true
};

Alloy.Globals.Tabs =require('com.navid.tabs');
Alloy.Globals.Map = require('ti.map'); 