package com.luxfacta.desktop.view;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.GroupLayout;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.ListSelectionModel;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableModel;

import com.luxfacta.desktop.Main;
import com.luxfacta.desktop.component.BasicInternalView;
import com.luxfacta.desktop.controller.PollController;
import com.luxfacta.desktop.icon.Image16;
import com.luxfacta.desktop.model.Poll;

public class PollBrowser extends BasicInternalView {


	protected GroupLayout gl_contentPane;
	protected JTable tblSurvey;
	protected TableModel tableModel;
	protected Integer selectedRow = -1;


	public PollBrowser(String title) {

		super(title);
		
		initComponents();
		
	}
	
	private void initComponents() {
		
		setupToolBar();
		
		JLabel lblSurvey = new JLabel("Enquetes");
		lblSurvey.setBounds(10, 40, 70, 25);
		contentPane.add(lblSurvey);
		
		createTable();
		
	}	
	
	private void setupToolBar() {
		
		addAction("Incluir", Image16.add(), new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				
				PollEdit pollEdit = new PollEdit( "Nova enquete", 0 );
				Main.addView( pollEdit );
				
			}
			
			
		});
		
		
		addAction("Atualizar", Image16.refresh(), new ActionListener() {
			
			@Override
			public void actionPerformed( ActionEvent e ) {
				
				loadData();
				
			}
			
		} );
		
	}
	
	private void createTable() {
	
		tblSurvey = new JTable();
		JScrollPane scrollTable = new JScrollPane( tblSurvey );
		scrollTable.setBounds(10, 60, 514, 410);
		contentPane.add(scrollTable );
		
		setupTable();

	}
	
	private void loadData() {
		
		try {
		
			PollController pollController = new PollController();
			Poll[] polls = pollController.getAll();
			
			DefaultTableModel model = (DefaultTableModel)tblSurvey.getModel();
			
			model.getDataVector().clear();
	
			for ( int i = 0; i <= polls.length -1; i++ ) {
				
				Integer id = polls[ i ].getPoll_id();
				String description = polls[ i ].getPoll_description();
				
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
		
		tblSurvey.setModel(model);
		
		ListSelectionModel rowSM = tblSurvey.getSelectionModel();
		rowSM.addListSelectionListener( new ListSelectionListener() {
			
			@Override
			public void valueChanged(ListSelectionEvent e) {
				
				if (e.getValueIsAdjusting()) return;
				
				ListSelectionModel lsm = (ListSelectionModel)e.getSource();
                if (!lsm.isSelectionEmpty()) {
                	
                    selectedRow = lsm.getMinSelectionIndex();
                    
                }
                				
			}
			
		}); 
		
	}

}
