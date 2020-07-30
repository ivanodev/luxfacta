package com.luxfacta.desktop.model;

import com.luxfacta.desktop.infra.Entity;

public class Voto extends Entity {
	
	private Integer option_id;
	
	public Voto( Integer option_id ) {
		this.option_id = option_id;
	}

	public Integer getOption_id() {
		return option_id;
	}

	public void setOption_id(Integer option_id) {
		this.option_id = option_id;
	}

}
