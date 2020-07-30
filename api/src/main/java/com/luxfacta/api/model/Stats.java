package com.luxfacta.api.model;

import java.util.List;

public class Stats {
	
	private Long poll_id;
	private Long views;
	private List<VoteStats> votes;

	public Long getPoll_id() {
		return poll_id;
	}

	public void setPoll_id(Long poll_id) {
		this.poll_id = poll_id;
	}

	public Long getViews() {
		return views;
	}

	public void setViews(Long views) {
		this.views = views;
	}

	public List<VoteStats> getVotes() {
		return votes;
	}

	public void setVotes(List<VoteStats> votes) {
		this.votes = votes;
	}

}
