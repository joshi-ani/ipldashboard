package com.dshboard.ipl.ipldashboard.repository;

import com.dshboard.ipl.ipldashboard.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {
    
    Team findByTeamName(String teamName);
}
