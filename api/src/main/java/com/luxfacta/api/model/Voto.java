package com.luxfacta.api.model;

import java.io.Serializable;

public class Voto implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long option_id;
	
	public Voto() {
	}

	public Long getOption_id() {
		return option_id;
	}

	public void setOption_id(Long option_id) {
		this.option_id = option_id;
	}

}
