package com.luxfacta.desktop.component;

import javax.swing.JRadioButton;

public class CustomRadioButton extends JRadioButton {
	
	protected Object object = null;
	
	public CustomRadioButton( String text, Object object ) {
		
		super( text );
		this.object = object;
		
	}
	
	public Object getObject() {
		return object;
	}
	

}
