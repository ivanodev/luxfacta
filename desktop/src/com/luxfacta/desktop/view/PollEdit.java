package com.luxfacta.desktop.view;


import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.ListSelectionModel;
import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
import javax.swing.event.TableModelEvent;
import javax.swing.event.TableModelListener;
import javax.swing.table.DefaultTableModel;

import com.luxfacta.desktop.component.BasicInternalView;
import com.luxfacta.desktop.controller.PollController;
import com.luxfacta.desktop.icon.Image16;
import com.luxfacta.desktop.model.Option;
import com.luxfacta.desktop.model.Poll;
import com.luxfacta.desktop.model.PollRef;

public class PollEdit extends BasicInternalView {
	
	private Poll poll = null;
	private PollController pollController = new PollController();
	private JTable tblOption;
	private Integer selectedRow = -1;
	private JTextField fieldPollDesc = new JTextField();
	
	public PollEdit( String title, Integer id ) {
		
		super( title );
		
		initComponents();
		loadData( id );
		
	}
	
	private void initComponents() {
		
		setupToolBar();
		
		JLabel lblSurvey = new JLabel("Enquete");
		lblSurvey.setBounds(10, 40, 70, 25);
		contentPane.add(lblSurvey);
		
		createFieldPollDesc();

		
		createTable();
		createButtons();
		
	}
	
	private void setupToolBar() {
		
		addAction("Salvar", Image16.save(), new ActionListener() {
			
			@Override
			public void actionPerformed( ActionEvent event ) {
			
				if ( poll != null ) {
					
					try {
						
						PollRef pollRef = pollController.save( poll );
						
						if ( pollRef != null ) {
							
							if ( pollRef.getPoll_id() > 0 ) {
								
								JOptionPane.showMessageDialog(null, "Nova enquete gravada com sucesso.");
								
								DefaultTableModel model = (DefaultTableModel)tblOption.getModel();
								fieldPollDesc.setText("");
								model.getDataVector().clear();
								
							}
							
						}
						
					} catch ( Exception e ) {
						
						JOptionPane.showMessageDialog( 
								null, 
								"Ocorreu em erro ao gravar nova enquete - " + e.getMessage() 
							);
						
					}
					
				}
				
			}

		});
		
	}
	
	private void createTable() {
		
		tblOption = new JTable();
		JScrollPane scrollTable = new JScrollPane( tblOption );
		scrollTable.setBounds(10, 110, 514, 360);
		contentPane.add(scrollTable );
		
		setupTable();

	}
	
	private void createButtons() {
		
		
		JButton btnNewOption = new JButton( Image16.add() );
	    btnNewOption.addActionListener( new ActionListener() {
			
			@Override
			public void actionPerformed( ActionEvent e ) {
				
				selectedRow = -1;
			
				if ( poll != null ) {
					
					Option[] options = poll.getOptions();
					
					if ( options == null ) {
				
						options = new Option[0];
					
					}
					
					Option[] newOptions = new Option[ options.length + 1 ];
					System.arraycopy( options, 0, newOptions, 0, options.length );

					Option newOption = new Option();
					newOption.setOption_description( "Nova Opção - digite e pressione enter" );
					
					newOptions[ newOptions.length -1 ] = newOption;
					
					poll.setOptions(newOptions);
					
					fillTableOptions();
					
					
				}
				
			}
			
		});    
	    
	    JButton btnDeleteOption = new JButton( Image16.delete() );
	    btnDeleteOption.addActionListener( new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				
				int newIndex = 0;
				
				if ( selectedRow >= 0 ) {
				
					if ( poll != null ) {
						
						Option[] options = poll.getOptions();
						
						if ( options != null && options.length > 0 ) {
							
							Option[] newOptions = new Option[ options.length -1 ];
							
							for ( int i = 0; i <= options.length -1; i++ ) {
								
								Option option = options[ i ];
								
								if ( Integer.compare( i, selectedRow ) == 0 ) {
									
									continue;
									
								} else {
		
									newOptions[ newIndex ] = option;
									newIndex = newIndex + 1;
									
								} 
								
							}
	
							poll.setOptions( newOptions );
							
							fillTableOptions();
						}
						
					}
				
				} else {
					
					JOptionPane.showMessageDialog(null, "Selecione um registro para excluir.");
					
				}
				
			}
			
		});
	    
	    btnNewOption.setBounds(10, 80, 26, 24);
	    contentPane.add(btnNewOption);
	    
	    btnDeleteOption.setBounds(40, 80, 26, 24);
	    contentPane.add(btnDeleteOption);
		
	}
	
	private void setupTable() {
		
		DefaultTableModel model = (DefaultTableModel)tblOption.getModel();
		model.addColumn( "Opção" );
		
		ListSelectionModel rowSM = tblOption.getSelectionModel();
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
		
		
		
		model.addTableModelListener( new TableModelListener() {
			
			@Override
			public void tableChanged(TableModelEvent e) {
				
				if ( poll != null && selectedRow >= 0 ) {
					
					DefaultTableModel model = (DefaultTableModel)e.getSource();
					
					Option[] options = poll.getOptions();
					
					if ( options != null && options.length > selectedRow ) {
						
						Option option = options[ selectedRow ];
						
						String value = "";
						
						if ( e.getType() == e.UPDATE ) {
											
							value = (String)model.getValueAt( selectedRow , 0);
							
							option.setOption_description( value  );
						
						}
						
					}
					
				}                

			}
			
		});
			    
	}
	
	private void loadData( Integer id ) {
		
		try {
			
			if ( id > 0 ) {
				
				poll = pollController.get( id );
				
			} else {
				
				poll = new Poll();
				
			}
			
			fieldPollDesc.setText( poll.getPoll_description() );
			
			fillTableOptions();
		
		} catch ( Exception e ) {
			
			JOptionPane.showMessageDialog( 
					null, 
					"Erro ao carregar Enquete - " + 
					e.getMessage() 
				);
		}
		
	}
	
	private void fillTableOptions() {

		if ( poll != null ) {
						
			DefaultTableModel model = (DefaultTableModel)tblOption.getModel();
			model.getDataVector().clear();
			
			Option[] options = poll.getOptions();
			
			if ( options != null ) {
								
				for ( int i = 0; i <= options.length -1; i++ ) {
					
					Option option = options[ i ];
					
					String description = "";
					
					if ( option.getOption_description() != null )
						description = option.getOption_description(); 
					
					Object[] value = new Object[]{ description };
					model.addRow( value );
					
				}
				
			}

			
		}
		
	}
	
	
	
	private void createFieldPollDesc() {
		
		fieldPollDesc = new JTextField();
		fieldPollDesc.setBounds(100, 40, 400, 25);
		contentPane.add( fieldPollDesc );
	    
		fieldPollDesc.getDocument().addDocumentListener( new DocumentListener() {
			
			@Override
			public void removeUpdate(DocumentEvent e) {
				
				if ( poll != null ) {
					
					poll.setPoll_description( fieldPollDesc.getText() );
					
				}
				
			}
			
			@Override
			public void insertUpdate(DocumentEvent e) {
				
				if ( poll != null ) {
					
					poll.setPoll_description( fieldPollDesc.getText() );
					
				}
				
			}
			
			@Override
			public void changedUpdate(DocumentEvent e) {
				
				if ( poll != null ) {
					
					poll.setPoll_description( fieldPollDesc.getText() );
					
				}
				
			}
		});
		
	}
	
}
