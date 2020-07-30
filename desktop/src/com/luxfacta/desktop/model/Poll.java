package com.luxfacta.desktop.model;

import com.luxfacta.desktop.infra.Entity;

public class Poll extends Entity {
	
	private Integer poll_id;
	private String poll_description;
	private Option[] options;

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

	public Option[] getOptions() {
		return options;
	}

	public void setOptions(Option[] options) {
		this.options = options;
	}

}
