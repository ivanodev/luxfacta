package com.luxfacta.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.luxfacta.api.model.Option;
import com.luxfacta.api.model.Poll;
import com.luxfacta.api.model.PollCache;
import com.luxfacta.api.model.PollOutline;
import com.luxfacta.api.model.PollRef;
import com.luxfacta.api.model.Stats;
import com.luxfacta.api.model.Voto;
import com.luxfacta.api.service.PollService;

@RestController
@RequestMapping(value="/")
public class PollController {
	
	private final PollService pollService;
	private final String uri = "/poll";
	
	
	public PollController( PollService pollService ) {
		this.pollService = pollService;
	}
		
	@GetMapping( uri )
	public List<Poll> findAll() {
		
		List<Poll> polls = pollService.findAll();
		
		PollCache.setPolls( polls );
		
		return polls;
	}
	
	@GetMapping( uri + "/{id}" )
	public ResponseEntity<Poll> findById( @PathVariable("id") long id ) throws Exception {
		
		try {
		
			Poll poll = pollService.findById(id);
			
			if ( poll == null ) {
				
				return new ResponseEntity<Poll>(HttpStatus.NOT_FOUND);
				
			} else {
		
				return new ResponseEntity<Poll>(poll, HttpStatus.OK);
				
			}	
			
		} catch ( Exception e ) {
			
			throw new ResponseStatusException( 
					HttpStatus.INTERNAL_SERVER_ERROR , 
					e.getMessage(), 
					e.getCause() 
				);
			
		}
		
	}
		
	@PostMapping( uri )
	public PollRef create( @RequestBody PollOutline pollOutline ) throws Exception {
		
		try {
			
			Poll poll = new Poll();
			
			poll.setPoll_description( pollOutline.getPoll_description() );
			
			List<Option> options = new ArrayList<Option>();
			
			String[] optDescs = pollOutline.getOptions();
			
			for ( int i = 0; i <= optDescs.length -1; i++ ) {
				
				Option option = new Option();
				option.setOption_description( optDescs[ i ]);
				option.setOption_id( null );
				option.setPoll(poll);
				options.add( option );
				
			}
			
			poll.setOptions(options);
			
			poll = pollService.create( poll ); 
			
			PollRef pollRef = new PollRef();
			pollRef.setPoll_id(poll.getPoll_id());
			
			return pollRef;
		
		} catch ( Exception e ) {
			
			throw new ResponseStatusException( 
					HttpStatus.INTERNAL_SERVER_ERROR , 
					e.getMessage(), 
					e.getCause() 
				);
			
		}
		
	}
	
	@PutMapping( uri )
	public Poll update( @RequestBody Poll poll ) throws Exception {
		
		try {
			
			return pollService.update( poll );
			
		} catch ( Exception e ) {
			
			throw new ResponseStatusException( 
					HttpStatus.INTERNAL_SERVER_ERROR , 
					e.getMessage(), 
					e.getCause() 
				);
			
		}
	}
	
	@PostMapping( uri + "/{id}/vote" )
	public ResponseEntity<Voto> voto( @PathVariable(value="id") long id, @RequestBody Voto voto ) throws Exception {
		
		try {
		
			if ( pollService.PollExists(id) ) {
				
				pollService.voto(id, voto);
				return null;
				
			} else {
				
				return new ResponseEntity<Voto>(HttpStatus.NOT_FOUND);
				
			}
			
		} catch ( Exception e ) {
			
			throw new ResponseStatusException( 
					HttpStatus.INTERNAL_SERVER_ERROR , 
					e.getMessage(), 
					e.getCause() 
				);
			
		}
		
	}
	
	@GetMapping( uri + "/{id}/stats" )
	public ResponseEntity<Stats> findStats( @PathVariable(value="id") long id ) throws Exception {
		
		Stats stats = null;
		
		try {
			
			stats = pollService.findStats(id);
			
			if ( stats == null ) {
				
				return new ResponseEntity<Stats>(stats, HttpStatus.NOT_FOUND);
				
			} else {
				
				return new ResponseEntity<Stats>(stats, HttpStatus.OK);
				
			}
			
		} catch ( Exception e ) {
			
			throw new ResponseStatusException( 
					HttpStatus.INTERNAL_SERVER_ERROR , 
					e.getMessage(), 
					e.getCause() 
				);
			
		}
		
		
	}
	
	
}
