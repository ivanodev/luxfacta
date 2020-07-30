package com.luxfacta.api.model;

import java.io.Serializable;

public class PollOutline implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private Integer poll_id;
	
	private String poll_description;
	
	private String[] options;

	public Integer getPoll_id() {
		return poll_id;
	}

	public void setPoll_id(Integer poll_id) {
		this.poll_id = poll_id;
	}

	public String getPoll_description() {
		return poll_description;
	}

	public void setPoll_description(String poll_description) {
		this.poll_description = poll_description;
	}

	public String[] getOptions() {
		return options;
	}

	public void setOptions(String[] options) {
		this.options = options;
	}
}
