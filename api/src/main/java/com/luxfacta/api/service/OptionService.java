package com.luxfacta.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.luxfacta.api.model.Option;
import com.luxfacta.api.repository.OptionRepository;

@Service
public class OptionService {
	

	private final OptionRepository optionRepository;
	
	public OptionService( OptionRepository optionRepository ) {
		this.optionRepository = optionRepository;
	}
	
	
	public List<Option> findAll() {
		
		return optionRepository.findAll();
		
	}
	
	public Option findById( long id ) {
		
		return optionRepository.findById( id );
		
	}
	
	public Option create( Option option ) {
		
		return optionRepository.save( option );
		
	}
	
	public Option update( Option option ) {
		
		return optionRepository.save( option );
		
	}


}
