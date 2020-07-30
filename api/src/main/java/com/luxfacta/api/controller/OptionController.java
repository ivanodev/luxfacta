package com.luxfacta.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luxfacta.api.model.Option;
import com.luxfacta.api.service.OptionService;

@RestController
@RequestMapping(value="/")
public class OptionController {
	
	private final OptionService optionService;
	private final String uri = "/option";
	
	public OptionController( OptionService optionService ) {
		this.optionService = optionService;
	}
		
	@GetMapping( uri )
	public List<Option> findAll() {
		return optionService.findAll();
	}
	
	@GetMapping( uri + "/{id}" )
	public Option findById( @PathVariable(value="id") long id ) {
		return optionService.findById(id);
	}
	
	@PostMapping( uri )
	public Option create( @RequestBody Option option ) {
		
		return optionService.create( option );
		
	}

}
