


class RaffleStat:


    def __init__(self, stat_id, earnings, visitors, completedR_count,
                in_progressR_count, cancelR_count, total_raffles,
                avg_earnings, score) -> None:
        self.stat_id = stat_id
        self.earnings = earnings
        self.visitors = visitors
        self.completedR_count = completedR_count
        self.in_progressR_count = in_progressR_count
        self.cancelR_count = cancelR_count
        self.total_raffles = total_raffles
        self.avg_earnings = avg_earnings
        self.score = score
    
        