package com.luxfacta.desktop.controller;

import com.luxfacta.desktop.model.Option;
import com.luxfacta.desktop.model.Poll;
import com.luxfacta.desktop.model.PollOutline;
import com.luxfacta.desktop.model.PollRef;
import com.luxfacta.desktop.service.API;

public class PollController {
	
	private API api = new API();
	private String uri = "/poll";
	
	public PollController() {}
	
	
	public Poll[] getAll() throws Exception {
		Poll[] polls = {};
		
		try {
			
			Object[] ents = api.getList( "poll", Poll.class );
			polls = new Poll[ ents.length ];
			
			System.arraycopy( ents, 0, polls, 0, ents.length);
			
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		return polls;
		
	}
	
	public Poll get( Integer id ) throws Exception {
		
		Poll poll = null;
		
		try {
		
			String param = Integer.toString( id );
	
			poll = (Poll)api.get( uri + "/" + param, Poll.class );
			
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		return poll;
		
	}
	
	public PollOutline getPollOutline( Integer id ) throws Exception {
		
		PollOutline pollOutline = null;
		
		try {
		
			Poll poll = get( id );
			
			if ( poll != null ) {
				
				pollOutline = new PollOutline();
				
				pollOutline.setPoll_id( poll.getPoll_id() );
				pollOutline.setPoll_description( poll.getPoll_description() );
				
				Option[] options = poll.getOptions();
				String[] optionsDesc = new String[ options.length ];
				
				for ( int i = 0; i <= options.length -1; i++ ) {
					
					Option option = options[ i ];
					
					optionsDesc[ i ] = option.getOption_description();
					
				}
				
				pollOutline.setOptions( optionsDesc );
				
			}
			
		} catch( Exception e ) {
			
			throw e;
			
		}
		
		return pollOutline;
		
		
	}
	
	public PollRef save( Poll poll ) throws Exception {
		
		try {
		
			if ( poll == null ) {
				
				throw new Exception( "Poll cannot be null." );
				
			}
			
			if ( poll.getPoll_description() == null || poll.getPoll_description().isEmpty() ) {
				
				throw new Exception( "Survey description cannot be empty" );
				
			}
			
			Option[] options = poll.getOptions();
			
			if ( options == null || options.length == 0 ) {
				
				throw new Exception( "Options cannot be empty." );
				
			}
			
			PollOutline pollOutline = new PollOutline();
			pollOutline.setPoll_id( poll.getPoll_id() );
			pollOutline.setPoll_description( poll.getPoll_description() );
			
			String[] optDesc = new String[ options.length ];
			
			for ( int i = 0; i <= options.length -1; i++ ) {
				
				optDesc[ i ] = options[ i ].getOption_description();
				
			}
			
			pollOutline.setOptions( optDesc );
			
			PollRef pollRef = (PollRef)api.post( uri, pollOutline, PollRef.class );
			
			return pollRef;
			
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		 
	}
	
	public Integer delete( Integer id ) {
	
		return id;
		
	}

}
