package com.luxfacta.desktop.model;

import com.luxfacta.desktop.infra.Entity;

public class VoteStats extends Entity {
	
	private Integer option_id;
	
	private Integer qty = 0;

	public Integer getOption_id() {
		return option_id;
	}

	public void setOption_id(Integer option_id) {
		this.option_id = option_id;
	}

	public Integer getQty() {
		return qty;
	}

	public void setQty(Integer qty) {
		this.qty = qty;
	}
	
}
