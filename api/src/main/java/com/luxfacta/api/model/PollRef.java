package com.luxfacta.api.model;

import java.io.Serializable;

public class PollRef implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long poll_id;

	public Long getPoll_id() {
		return poll_id;
	}

	public void setPoll_id(Long poll_id) {
		this.poll_id = poll_id;
	}
	
}
