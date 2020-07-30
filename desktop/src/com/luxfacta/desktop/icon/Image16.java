package com.luxfacta.desktop.icon;

import javax.swing.Icon;
import javax.swing.ImageIcon;

public class Image16 {
	
	private static String path = "C:\\tools.dev\\java\\luxfacta\\desktop\\src\\com\\luxfacta\\desktop\\icon";
	
	private static Icon add16 = new ImageIcon( path + "\\add16.png");
	private static Icon delete16 = new ImageIcon( path + "\\delete16.png");
	private static Icon save16 = new ImageIcon( path + "\\save16.png" ); 
	private static Icon exit16 = new ImageIcon( path + "\\exit16.png" ); 
	private static Icon refresh16 = new ImageIcon( path + "\\refresh16.png" );

	public static Icon add() {
		
		return add16;
		
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
