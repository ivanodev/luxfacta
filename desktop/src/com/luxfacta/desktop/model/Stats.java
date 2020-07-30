package com.luxfacta.desktop.model;

import com.luxfacta.desktop.infra.Entity;

public class Stats extends Entity {
	
	private Integer poll_id;
	private Integer views;
	private VoteStats[] votes;

	public Integer getPoll_id() {
		return poll_id;
	}

	public void setPoll_id(Integer poll_id) {
		this.poll_id = poll_id;
	}

	public Integer getViews() {
		return views;
	}

	public void setViews(Integer views) {
		this.views = views;
	}

	public VoteStats[] getVotes() {
		return votes;
	}

	public void setVotes(VoteStats[] votes) {
		this.votes = votes;
	}
	

}
