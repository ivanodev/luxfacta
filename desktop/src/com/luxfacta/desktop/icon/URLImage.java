package com.luxfacta.desktop.icon;

import java.net.URL;

public class URLImage {
	
	public URL getLocation( String imgName ) {
		
		return getClass().getResource( imgName );
		
	}

}
