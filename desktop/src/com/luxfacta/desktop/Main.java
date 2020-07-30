package com.luxfacta.desktop;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.SystemColor;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.WindowConstants;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;
import javax.swing.border.TitledBorder;

import com.luxfacta.desktop.component.BasicInternalView;
import com.luxfacta.desktop.view.StatsView;
import com.luxfacta.desktop.view.PollBrowser;
import com.luxfacta.desktop.view.VoteView;



public class Main extends JFrame {

	private static JDesktopPane desktopPane = new JDesktopPane();

	public static void main(String[] args) {
		
		EventQueue.invokeLater(new Runnable() {
			
			@Override
			public void run() {
				
				try {
					
					Main frame = new Main( "Luxfacta - Enquete" );
				    frame.setDefaultCloseOperation( WindowConstants.EXIT_ON_CLOSE );
				    frame.pack();
				    frame.setLocationRelativeTo( null );
				    frame.setSize(800,600);
				    frame.setLocationRelativeTo( null );
				    frame.setVisible( true );
					
					
				} catch (Exception e) {
					
					e.printStackTrace();
					
				}
				
			}
			
		});
	}
	
	public static void addView( BasicInternalView view ) {
		
		if ( desktopPane == null ) {
			
			desktopPane = new JDesktopPane();
	
		}
		
		desktopPane.add( view );
		view.setCenterPosition();
		view.toFront();
	
	}


	public Main( String title ) {
		
		
		super( title );
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 800, 600);
		
		desktopPane.setBackground( SystemColor.menu );
		desktopPane.setBorder(null);
		desktopPane.setVisible(true);
		
		add(desktopPane);
		
		createMenu();
		
		setSize(800, 600);
		
		
	}
	

	private void createMenu() {
		
		JMenuBar menuBar = new JMenuBar();
		desktopPane.add( menuBar );
		
		JMenu menu = new JMenu("Parametrização");
		menuBar.add( menu );
		add( menuBar, BorderLayout.NORTH );
		
		JMenuItem menuItemSurvey = new JMenuItem( "Enquete" );
		menuItemSurvey.setSize(400, 300);
		menu.add( menuItemSurvey );
		menuItemSurvey.addActionListener( new ActionListener() {
			
			@Override
			public void actionPerformed( ActionEvent e ) {
				
				PollBrowser surveyBrowser = new PollBrowser( "Enquete" );
				desktopPane.add( surveyBrowser );
				surveyBrowser.setCenterPosition();
				
			}
			
		} );
		
		
		JMenu menuVote = new JMenu("Votação");
		menuBar.add( menuVote );
		add( menuBar, BorderLayout.NORTH );
		
		JMenuItem menuItemVote = new JMenuItem( "Votar" );
		menuVote.add( menuItemVote );
		menuItemVote.addActionListener( new ActionListener() {
			
			@Override
			public void actionPerformed( ActionEvent e ) {
				
				VoteView voteView = new VoteView( "Votar" );
				desktopPane.add( voteView );
				voteView.setCenterPosition();
				
			}
			
		} );
		
		JMenu menuStats = new JMenu("Estatística");
		menuBar.add( menuStats );
		add( menuBar, BorderLayout.NORTH );
		
		JMenuItem menuItemStats = new JMenuItem( "Consultar" );
		menuStats.add( menuItemStats );
		menuItemStats.addActionListener( new ActionListener() {
			
			@Override
			public void actionPerformed( ActionEvent e ) {
				
				StatsView statsView = new StatsView( "Estatística" );
				desktopPane.add( statsView );
				statsView.setCenterPosition();
				
			}
			
		} );

	}

}
