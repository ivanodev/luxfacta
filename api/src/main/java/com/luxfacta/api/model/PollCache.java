package com.luxfacta.api.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.ListIterator;


public class PollCache {

	private static List<Poll> listPolls = new ArrayList<Poll>();
	private static HashMap<Long, Poll> hashPolls = new HashMap<Long, Poll>();
	
	public static List<Poll> getPolls() {
		
		return listPolls;
		
	}
	
	public static void setPolls( List<Poll> polls  ) {

		if ( polls != null ) {
			
			listPolls = polls;
			
			ListIterator<Poll> pollsIterator = polls.listIterator();
			
			while ( pollsIterator.hasNext() ) {
				
				Poll poll = pollsIterator.next();
				
				hashPolls.put( poll.getPoll_id(), poll );
				
			}
			
		}
		
	}
	
	public static void addPoll( Poll poll ) throws Exception {
		
		if ( poll != null && poll.getPoll_id() > 0  ) {
			
			Poll p = hashPolls.get( poll.getPoll_id() );
			
			if ( p != null  ) {
			
				p = poll;
			
			} else {
				
				if ( listPolls.size() > 0 ) {
				
					listPolls.add( poll );
					hashPolls.put(poll.getPoll_id(), poll );
					
				}
			
			}
			
		} else {
			
			throw new Exception( "Poll invalid." );
	
		}
		
	}
	
	public static Poll getPoll( long id ) {	
		
		return hashPolls.get( id );
		
	}
	
	public static void clear() {
		
		listPolls.clear();
		hashPolls.clear();
		
	}
	
	public static Boolean exists(long id) {
		
		return hashPolls.containsKey(id);
		
	}

}
