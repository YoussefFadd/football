export interface Match {
    
        country: {
          is_real: boolean;
          id: number;
          uefa_code: string;
          name: string;
          fifa_code: string;
          flag: string;
        };
        last_changed: string;
        home: {
          stadium: string;
          id: number;
          logo: string;
          name: string;
          country_id: string;
        };
        added: string;
        status: string;
        federation: null;
        location: string;
        scheduled: string;
        competition: {
          tier: number;
          is_cup: boolean;
          has_groups: boolean;
          id: number;
          active: boolean;
          name: string;
          is_league: boolean;
          national_teams_only: boolean;
        };
        id: number;
        time: string;
        fixture_id: number;
        odds: {
          live: {
            '1': number;
            '2': number;
            X: number;
          };
          pre: {
            '1': number;
            '2': number;
            X: number;
          };
        };
        away: {
          stadium: string;
          id: number;
          logo: string;
          name: string;
          country_id: string;
        };
        outcomes: {
          half_time: null;
          full_time: null;
          extra_time: null;
          penalty_shootout: null;
        };
        scores: {
          score: string;
          ht_score: string;
          ft_score: string;
          et_score: string;
          ps_score: string;
        };
        urls: {
          events: string;
          statistics: string;
          lineups: string;
          head2head: string;
        };
      }
      
      export interface ApiResponse {
        success: boolean;
        data: {
fixtures: any;
          match: Match[];
        };
      }

