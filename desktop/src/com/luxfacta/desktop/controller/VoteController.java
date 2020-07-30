package com.luxfacta.desktop.controller;

import com.luxfacta.desktop.model.Voto;
import com.luxfacta.desktop.service.API;

public class VoteController {
	
	private API api = new API();
	private String uri = "/poll/:id/vote";
	
	public void vote( Integer idPoll, Voto voto ) throws Exception {
		
		try {

			if ( idPoll == null || idPoll <= 0 ) {
				
				throw new Exception( "Survey cannot be found." );
				
			}		
			
			uri = uri.replace( ":id", idPoll.toString() );
			
			api.post( uri, voto, null );
		
		} catch( Exception e ) {
			
			throw e;
			
		}
		
	}

}
