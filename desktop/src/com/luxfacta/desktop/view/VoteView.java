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
import javax.swing.ListSelectionModel;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.table.DefaultTableModel;

import com.luxfacta.desktop.component.BasicInternalView;
import com.luxfacta.desktop.component.CustomRadioButton;
import com.luxfacta.desktop.controller.PollController;
import com.luxfacta.desktop.controller.VoteController;
import com.luxfacta.desktop.icon.Image16;
import com.luxfacta.desktop.model.Option;
import com.luxfacta.desktop.model.Poll;
import com.luxfacta.desktop.model.Voto;

public class VoteView extends BasicInternalView {
	
	private VoteController voteController = new VoteController();

	private JTable tblSurvey;
	private JLabel lblSurveyDescription;
	private Integer selectedRow = -1;
	private JPanel panelOptions;
	private HashMap<Integer, Poll> listPolls = new HashMap<Integer, Poll>();
	private Integer idPoollSelected = 0;
	private Integer idOptionSelected = 0;
	
	public VoteView( String title ) {

		super(title);	
		initComponents();

	}
	
	
	public void initComponents() {
			
		setupToolBar();
		createTableSurvey();
		createPanelOptions();
		createButtons();
		
	}
	
	private void setupToolBar() {
		
		addAction("Carregar enquetes", Image16.refresh(), new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				
				loadSurvey();
				
			}
		});
		
	}
	
	private void createButtons() {
		
		JButton btnVoto = new JButton( "Confirmar voto" );
		btnVoto.setBounds(10, 440, 140, 30);
		btnVoto.addActionListener( new ActionListener( ) {
			
			@Override
			public void actionPerformed(ActionEvent event ) {
				
				int option = JOptionPane.showConfirmDialog(null, "Confirmar seu voto?", "Confirmação de voto", JOptionPane.YES_NO_OPTION);
				
				if (option == JOptionPane.YES_OPTION) {
					
					try {
					
						voto();
						
					} catch( Exception e ) {
						
						JOptionPane.showMessageDialog(null, "Erro ao realizar votação - " + e.getMessage() );
						
					}
				 
				}
				
				
			}
			
		});
		
		contentPane.add( btnVoto );
	}
	
	public void createTableSurvey() {
		
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
		
		setupTable();
		
	}
	
	private void createPanelOptions() {
		
		JLabel lblOption = new JLabel("Opções");
		lblOption.setFont(new Font("Tahoma", Font.BOLD, 11));
		lblOption.setBounds(10, 330, 46, 14);
		contentPane.add(lblOption);
		
		panelOptions = new JPanel( new GridLayout(0, 1) );
		JScrollPane scrollRadioButton = new JScrollPane( panelOptions );
		scrollRadioButton.setBounds(10, 346, 514, 90);
		contentPane.add(scrollRadioButton);
	}
	
	public void fillOptions( Poll poll ) {
		
		panelOptions.removeAll();
		
		Option[] options = poll.getOptions();

		for (int i = 0; i <= options.length -1; i++) {
			
			Option option = options[ i ];

			CustomRadioButton rbtOption = new CustomRadioButton( option.getOption_description(), option );
			
			rbtOption.addActionListener( new ActionListener() {
				
				@Override
				public void actionPerformed( ActionEvent e ) {
					
					int cmpCount = panelOptions.getComponentCount();
					    
					for ( int i = 0; i <= cmpCount -1; i++  ) {
						
						( (CustomRadioButton)panelOptions.getComponent( i ) ).setSelected( false );
					    	
					}
					
					CustomRadioButton rbt = (CustomRadioButton)e.getSource();
					rbt.setSelected(true);
					idOptionSelected = ( (Option)rbt.getObject()).getOption_id();

				}
				
			});
			
			panelOptions.add( rbtOption, BorderLayout.LINE_START );
			
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
			
			JOptionPane.showMessageDialog(null, "Ocorreu um erro durante a votação - " + e.getMessage() );
			
		}
		
	}
	
	
	private void loadSurvey() {
		
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
			
		} catch( Exception e ) {
			
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
				
				ListSelectionModel lsm = (ListSelectionModel)e.getSource();
                if (!lsm.isSelectionEmpty()) {
                	
                    selectedRow = lsm.getMinSelectionIndex();
                    
                    if ( selectedRow >= 0 ) {
    					
    					Integer id = (Integer)tblSurvey.getValueAt( selectedRow, 0 );
    					String description = (String)tblSurvey.getValueAt( selectedRow, 1 );
    					
    					Poll poll = (Poll)listPolls.get( id );
    					
    					fillOptions( poll );
    					
    					lblSurveyDescription.setText( "Enquete: " + description );
    					idPoollSelected = id;
    					
    				} 
    				
                }
                				
			}
			
		}); 
		
	}
	
}
