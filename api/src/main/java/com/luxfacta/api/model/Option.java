package com.luxfacta.api.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Option implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private Long option_id;
	
	private String option_description;
	
	@JsonIgnore
	private Integer qty;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="poll", insertable=true, updatable=true, referencedColumnName = "poll_id")
	
    //@JoinColumn(name="poll_id", nullable=false)
    //@ManyToOne(fetch = FetchType.LAZY)
	//@JoinColumn(name="poll", referencedColumnName = "poll_id")
	@JsonIgnore
	private Poll poll;
	
	public Long getOption_id() {
		return option_id;
	}
	
	public void setOption_id(Long option_id) {
		this.option_id = option_id;
	}
	
	public String getOption_description() {
		return option_description;
	}
	
	public void setOption_description(String option_description) {
		this.option_description = option_description;
	}
	
	public Integer getQty() {
		return qty;
	}

	public void setQty(Integer qty) {
		this.qty = qty;
	}

	public Poll getPoll() {
		return poll;
	}

	public void setPoll(Poll poll) {
		this.poll = poll;
	}
	
	
	
}
