package com.luxfacta.api.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Poll implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private Long poll_id;
	
	private String poll_description;
	
	//@OneToMany(mappedBy = "poll", targetEntity = Option.class, fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "poll", cascade = CascadeType.PERSIST)
	private List<Option> options = null;
	
	@JsonIgnore
	private Long views; 

	public Long getPoll_id() {
		return poll_id;
	}

	public void setPoll_id(Long poll_id) {
		this.poll_id = poll_id;
	}

	public String getPoll_description() {
		return poll_description;
	}

	public void setPoll_description(String poll_description) {
		this.poll_description = poll_description;
	}

	public List<Option> getOptions() {
		return options;
	}

	public void setOptions(List<Option> options) {
		this.options = options;
	}

	public Long getViews() {
		return views;
	}

	public void setViews(Long views) {
		this.views = views;
	}
	
	

}
