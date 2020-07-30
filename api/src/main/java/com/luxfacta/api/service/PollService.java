package com.luxfacta.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.luxfacta.api.model.Option;
import com.luxfacta.api.model.Poll;
import com.luxfacta.api.model.PollCache;
import com.luxfacta.api.model.Stats;
import com.luxfacta.api.model.VoteStats;
import com.luxfacta.api.model.Voto;
import com.luxfacta.api.repository.OptionRepository;
import com.luxfacta.api.repository.PollRepository;

@Service
public class PollService {
	
	private final PollRepository pollRepository;
	private final OptionRepository optionRepository;
	
	public PollService( PollRepository pollRepository,
			            OptionRepository optionRepository ) {
		
		this.pollRepository = pollRepository;
		this.optionRepository = optionRepository;
		
	}
	
	private Poll getPoll( long id ) throws Exception {
		
		Poll poll = PollCache.getPoll(id);
		
		if ( poll == null ) {
			
			poll = pollRepository.findById(id);
			
			if ( poll != null )
				PollCache.addPoll(poll);
			
		}
		
		return poll;
		
	}
	
	public List<Poll> findAll() {
		
		List<Poll> polls = PollCache.getPolls();
		
		if ( polls == null || polls.size() == 0 ) {
			polls = pollRepository.findAll();
			PollCache.setPolls(polls);
		}
		
		return polls;
		
	}
	
	public Poll findById( long id ) throws Exception {
		
		Poll poll = getPoll(id);
		
		updateViews(poll);
		
		return poll;
		
	}
	
	public Poll create( Poll poll ) throws Exception {
		
		Poll p = null;
		
		try {
			
			p = pollRepository.save( poll );
			
			/*
			List<Option> options = poll.getOptions();
			
			if ( options != null ) {
				
				options.forEach( option -> {
					option.setPoll(poll);
				});
				
			}*/
		
			PollCache.addPoll(p);
		
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		return p; 
		
	}
	
	public Poll update( Poll poll ) throws Exception {
		
		Poll p = null;
		
		try {
			
			p = pollRepository.save( poll );
			
			PollCache.addPoll(p);
			
		} catch ( Exception e ) {
			
			throw e;
			
		}
	
		return p;
		
	}
	
	public Boolean PollExists( long id ) {
		
		Boolean exists = PollCache.exists(id);
		
		if ( !exists ) {
			exists = pollRepository.existsById( id );
		}
		
		return exists;
		
	}
	
	public void voto( Long id, Voto voto ) throws Exception {
		
		try {
			
			Poll poll = getPoll(id);
		
			int qty = 0;
			
			if ( poll != null ) {
				
				List<Option> options = poll.getOptions();
				
				if ( options != null ) {
					
					for ( int i = 0; i <= options.size() -1; i++ ) {
						
						Option option = options.get( i );
						
						if ( Long.compare( option.getOption_id(), voto.getOption_id() ) == 0 ) {
							
							if ( option.getQty() != null )
								qty = option.getQty() +1;
							else
								qty = 1;
							
						    option.setQty( qty );
						    
						    optionRepository.save( option );
							
						}
						
					}
					
				}
				
			}
			
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		
	}
	
	private void updateViews( Poll poll ) throws Exception {
		
		if ( poll != null ) {
		
			Long views = poll.getViews();
			
			if ( views == null )
				views = (long) 1;
			else
				views = views + 1;
		
			poll.setViews(views);
			
			update( poll );
			
		}
		
	}
	
	public Stats findStats( long id ) throws Exception {
		
		Stats stats = null;
		
		try {
			
			Poll poll = getPoll(id);
		
			List<Option> options = null;
			
			if ( poll != null ) {
				
				stats = new Stats();
				stats.setPoll_id( poll.getPoll_id() );
				stats.setViews( poll.getViews() );
				stats.setVotes( new ArrayList<VoteStats>() );
					
				options = poll.getOptions();
				
				for ( int i = 0; i <= options.size() -1; i++ ) {
					
					Option option = options.get( i );
					
				    VoteStats voteStats = new VoteStats();
				    voteStats.setOption_id( option.getOption_id() );
				    voteStats.setQty( option.getQty() );
				    
				    stats.getVotes().add( voteStats );
					
				}
				
				
			}
			
		} catch ( Exception e ) {
			
			throw e;
			
		}
		
		return stats;
		
	}


}
