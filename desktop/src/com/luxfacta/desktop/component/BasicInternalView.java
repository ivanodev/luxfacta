package com.luxfacta.desktop.component;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.Icon;
import javax.swing.JButton;
import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JInternalFrame;
import javax.swing.JPanel;
import javax.swing.JToolBar;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;
import javax.swing.border.TitledBorder;

import com.luxfacta.desktop.icon.Image16;

public class BasicInternalView extends JInternalFrame {
	
	protected JPanel contentPane;
	protected JToolBar toolBar;
	
	public BasicInternalView( String title ) {
		
		super( title, true, true, true, true );

		try {
			
			this.setFrameIcon(null);
			this.setForeground(Color.BLACK);
			
			contentPane = new JPanel();
			contentPane.setLayout(null);
			
			setContentPane(contentPane);
			setVisible( true );
			setResizable( true );
			
			setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
			setBounds(100, 100, 786, 536);
			setSize(545,515);
			
			initComponents();
			
		} catch (Exception e) {
			
			e.printStackTrace();
			
		}

		
	}
	
	private void initComponents() {
		createToolbar();
	}
	
	public void setCenterPosition() {
		
		JDesktopPane desktopPane = this.getDesktopPane();
		
		Dimension d = this.getDesktopPane().getSize();
	    this.setLocation( ( d.width - this.getSize().width) / 2, ( d.height - this.getSize().height) / 2 ); 
	    
	}
	
	private void createToolbar() {
		
		toolBar = new JToolBar();
		toolBar.setFloatable(false);
		toolBar.setBounds(0, 0, 545, 31);
	    contentPane.add(toolBar);
	    
	    JButton btnClose = new JButton( Image16.exit() );
	    btnClose.setToolTipText("Sair");
	    toolBar.add(btnClose);
	    
	    btnClose.addActionListener( new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				
				setVisible(false); 
				
			}
		});
	    
	    toolBar.addSeparator();
	    
	}
	
	public void addAction( String tollTipText, Icon icon, ActionListener action  ) {
	
	    JButton btn = new JButton(icon);
	    toolBar.add(btn);
	    
	    btn.setToolTipText( tollTipText );
	    btn.addActionListener( action );
		
	}
	
}
