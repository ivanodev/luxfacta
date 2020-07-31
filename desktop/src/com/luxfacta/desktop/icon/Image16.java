package com.luxfacta.desktop.icon;


import java.net.URL;

import javax.swing.Icon;
import javax.swing.ImageIcon;

public class Image16 {
	
	//private static String path = "C:\\tools.dev\\java\\luxfacta\\desktop\\src\\com\\luxfacta\\desktop\\icon";
	//private static Object url = getClass().getResource("/com/luxfacta/desktop/icon");
	private static URL location = new URLImage().getLocation(); 
	
	private static Icon add16 = new ImageIcon( location + "/add16.png" );
	private static Icon delete16 = new ImageIcon( location + "/delete16.png");
	private static Icon save16 = new ImageIcon( location + "/save16.png" ); 
	private static Icon exit16 = new ImageIcon( location + "/exit16.png" ); 
	private static Icon refresh16 = new ImageIcon( location + "/refresh16.png" );
	
	public static Icon add() {
		
		return new ImageIcon( new URLImage().getLocation() + "/add16.png" );
		
	}
	
	public static Icon delete() {

		return delete16;
		
	}
	
	public static Icon save() {
		
		return save16;
		
	}
	
	public static Icon exit() {
		
		return exit16;
	}
	
	public static Icon refresh() {
		
		return refresh16;
		
	}
	
}
