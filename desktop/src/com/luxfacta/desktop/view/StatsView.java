package com.luxfacta.desktop.view;

import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.HashMap;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JToolBar;
import javax.swing.ListSelectionModel;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.table.DefaultTableModel;

import com.luxfacta.desktop.component.BasicInternalView;
import com.luxfacta.desktop.controller.PollController;
import com.luxfacta.desktop.controller.StatsController;
import com.luxfacta.desktop.controller.VoteController;
import com.luxfacta.desktop.icon.Image16;
import com.luxfacta.desktop.model.Option;
import com.luxfacta.desktop.model.Poll;
import com.luxfacta.desktop.model.Stats;
import com.luxfacta.desktop.model.VoteStats;
import com.luxfacta.desktop.model.Voto;

import sun.rmi.runtime.NewThreadAction;

public class StatsView extends BasicInternalView {
	
	private VoteController voteController = new VoteController();
	private PollController pollController = new PollController();
	private StatsController statsController = new StatsController();

	private JTable tblSurvey;
	private JTable tblVotes;
	private JLabel lblSurveyDescription;
	private JLabel lblViews;
	private Integer selectedRow = -1;
	private JPanel panelOptions;
	private HashMap<Integer, Poll> listPolls = new HashMap<Integer, Poll>();
	private Integer idPoollSelected = 0;
	private Integer idOptionSelected = 0;
	
	public StatsView( String title ) {

		super(title);
		initComponents();

	}
	
	
	public void initComponents() {
		
		setupToolBar();
		createTableSurvey();
		createTableVotes();
		
	}
	
	private void setupToolBar() {
		
		addAction("Carregar enquetes", Image16.refresh(), new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				
				loadSurvey();
				
			}
		});
		
	}
	
	private void createTableSurvey() {
		
		JLabel lblSurvey = new JLabel("Enquetes");
		lblSurvey.setFont(new Font("Tahoma", Font.BOLD, 11));
		lblSurvey.setBounds(10, 40, 70, 25);
		contentPane.add(lblSurvey);
		
		tblSurvey = new JTable();
		JScrollPane scrollTable = new JScrollPane( tblSurvey );
		scrollTable.setBounds(10, 60, 514, 238);
		contentPane.add(scrollTable);
		
		lblSurveyDescription = new JLabel("Descrição");
		lblSurveyDescription.setFont(new Font("Tahoma", Font.BOLD, 11));
		lblSurveyDescription.setBounds(10, 290, 452, 38);
		contentPane.add(lblSurveyDescription);
		
		lblViews = new JLabel("Visualizações:");
		lblViews.setFont(new Font("Tahoma", Font.BOLD, 11));
		lblViews.setBounds(10, 310, 452, 38);
		contentPane.add(lblViews);
		
		setupTable();
		
	}
	
	public void createTableVotes() {
		
		
		JLabel lblOption = new JLabel("Votação");
		lblOption.setFont(new Font("Tahoma", Font.BOLD, 11));
		lblOption.setBounds(10, 355, 46, 14);
		contentPane.add(lblOption);
		
		tblVotes = new JTable();
		JScrollPane scrollTable = new JScrollPane( tblVotes );
		scrollTable.setBounds(10, 370, 514, 100);
		contentPane.add(scrollTable);
		
		DefaultTableModel model = new DefaultTableModel() {
			
			public boolean isCellEditable(int rowIndex, int mColIndex){ 
		         return false; 
		    } 
		};
		
		tblVotes.setModel( model );
		
		model.addColumn( "Opção");
		model.addColumn( "Votos");		
		
	}
	
	private void createPanelOptions() {
		
		panelOptions = new JPanel( new GridLayout(0, 1) );
		JScrollPane scrollRadioButton = new JScrollPane( panelOptions );
		scrollRadioButton.setBounds(10, 346, 514, 90);
		contentPane.add(scrollRadioButton);
	}
	
	public void fillVotes( Stats stats, Poll poll ) {
		
		Integer views = stats.getViews();
		VoteStats[] votesStats = stats.getVotes();
		Option[] options = poll.getOptions();

		DefaultTableModel model = (DefaultTableModel)tblVotes.getModel();
		model.setNumRows(0);
		
		for (int i = 0; i <= votesStats.length -1; i++) {
			
			VoteStats voteStats = votesStats[ i ];
			Option option = options[ i ];
			
			int qty = 0;
			
			if ( voteStats.getQty() != null )
					qty = voteStats.getQty();
			
			model.addRow( new Object[] {  option.getOption_description(), String.valueOf( qty ) } );
			
		}

		
	}
	
	private void voto() throws Exception {

		
		if ( idPoollSelected == 0 ) {
			
			throw new Exception("Selecione uma enquete.");
			
		}
		
		if ( idOptionSelected == 0 ) {
			
			throw new Exception("Selecione uma opção.");
			
		}
		
		Voto voto = new Voto( idOptionSelected );
		
		try {
			
			voteController.vote( idPoollSelected, voto );
		
		} catch ( Exception e ) {
			
			JOptionPane.showMessageDialog(null, "Ocorreu um erro ao realizar voto - " + e.getMessage() );
			
		}
		
	}
	
	
	private void loadSurvey()  {
		
		try {
			
			PollController pollController = new PollController();
			Poll[] polls = pollController.getAll();
			
			DefaultTableModel model = (DefaultTableModel)tblSurvey.getModel();
	
			for ( int i = 0; i <= polls.length -1; i++ ) {
				
				Integer id = polls[ i ].getPoll_id();
				String description = polls[ i ].getPoll_description();
				
				listPolls.put( id, polls[ i ] );
				
				model.addRow( new Object[] { id, description } );
				
			}
			
		} catch ( Exception e ) {
			
			JOptionPane.showMessageDialog( 
					null, 
					"Erro ao carregar Enquetes - " + 
					e.getMessage() 
				);
			
			
		}
		
	}
	
	private void setupTable() {
		
		DefaultTableModel model = new DefaultTableModel() {
			
			public boolean isCellEditable(int rowIndex, int mColIndex){ 
		         return false; 
		    } 
		};
		
		model.addColumn( "Id");
		model.addColumn( "Enquete");
		
		tblSurvey.setModel( model );
		
		ListSelectionModel rowSM = tblSurvey.getSelectionModel();
		rowSM.addListSelectionListener( new ListSelectionListener() {
			
			@Override
			public void valueChanged(ListSelectionEvent e) {
				
				if (e.getValueIsAdjusting()) return;
				
				try {
				
					ListSelectionModel lsm = (ListSelectionModel)e.getSource();
	                if (!lsm.isSelectionEmpty()) {
	                	
	                    selectedRow = lsm.getMinSelectionIndex();
	                    
	                    if ( selectedRow >= 0 ) {
	    					
	    					Integer id = (Integer)tblSurvey.getValueAt( selectedRow, 0 );
	    					String description = (String)tblSurvey.getValueAt( selectedRow, 1 );
	    					
	    					Stats stats = statsController.getStats( id );
	    					Poll poll = (Poll)listPolls.get( id );
	    					
	    					fillVotes( stats, poll );
	    					
	    					lblSurveyDescription.setText( "Enquete: " + description );
	    					
	    					int views = 0;
	    					
	    					if ( stats.getViews() != null )
	    						views = stats.getViews();
	    					
	    					lblViews.setText( "Visualizações: " + String.valueOf( views ) );
	    					idPoollSelected = id;
	    					
	    				} else {
	    					
	    					JOptionPane.showMessageDialog(null, "Selecione um registro para editar.");
	    					
	    				}
	    				
	                }
	                
				} catch ( Exception ex ) {
					
					JOptionPane.showMessageDialog( 
							null, 
							"Erro ao carregar Enquetes - " + 
							ex.getMessage() 
						);
					
				}
                				
			}
			
		}); 
		
	}
	
}
