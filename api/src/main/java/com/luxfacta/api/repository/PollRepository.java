package com.luxfacta.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luxfacta.api.model.Poll;

public interface PollRepository extends JpaRepository<Poll, Long> {
		
	//@Query( "Select p from Poll p where p.poll_id = ?1" )
	Poll findById( long id );

}
