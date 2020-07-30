package com.luxfacta.desktop.model;

import com.luxfacta.desktop.infra.Entity;

public class Option extends Entity {
	
	private Integer option_id;
	private String option_description;
	
	public Integer getOption_id() {
		return option_id;
	}
	
	public void setOption_id(Integer option_id) {
		this.option_id = option_id;
	}
	
	public String getOption_description() {
		return option_description;
	}
	
	public void setOption_description(String option_description) {
		this.option_description = option_description;
	}

}
