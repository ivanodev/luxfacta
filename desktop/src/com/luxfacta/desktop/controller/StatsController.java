package com.luxfacta.desktop.controller;

import com.luxfacta.desktop.model.Stats;
import com.luxfacta.desktop.service.API;

public class StatsController {
	
	private API api = new API();
	private String uriBase = "/poll";
	
	public Stats getStats( Integer poll_id ) throws Exception {
		
		String uri = uriBase + "/:id/stats";		
		uri = uri.replace( ":id", poll_id.toString() );
		
		Stats stats = (Stats)api.get( uri, Stats.class );
		
		return stats;
		
	}

}
