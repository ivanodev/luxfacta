package com.luxfacta.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.luxfacta.api.model.Option;

public interface OptionRepository extends JpaRepository<Option, Long> {
	
	Option findById( long id );

}
