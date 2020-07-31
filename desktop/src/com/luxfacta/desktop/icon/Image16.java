package com.luxfacta.desktop.icon;


import javax.swing.Icon;
import javax.swing.ImageIcon;

public class Image16 {
	
	private static Icon add16     = new ImageIcon( new URLImage().getLocation( "add16.png" ) );
	private static Icon delete16  = new ImageIcon( new URLImage().getLocation( "delete16.png") );
	private static Icon save16    = new ImageIcon( new URLImage().getLocation( "save16.png" ) ); 
	private static Icon exit16    = new ImageIcon( new URLImage().getLocation( "exit16.png" ) ); 
	private static Icon refresh16 = new ImageIcon( new URLImage().getLocation( "refresh16.png" ) );
	
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
