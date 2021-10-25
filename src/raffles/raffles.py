from datetime import date, datetime

class Raffle:

    def __init__(self, *args) -> None:        
        self.raffle_id :        int = args[0]
        self.name :             str = args[1]
        self.photo                  = args[2]
        self.description:       str =args[3]
        self.ticket_value:      float =args[4]
        self.is_active:         bool =args[5]
        self.raffle_state:      str =args[6]
        self.start_date:        datetime =args[7]
        self.end_date:          date = args[8]
        self.total_tickets :    int =args[9]
        self.remaining_tickets: int =args[10]
        

        
        

        
        