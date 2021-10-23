import random
from datetime import date, datetime

class Raffle():
    def __init__(self, *args) -> None:
        self.raffle_id :        int = args[0]
        self.name :             str = args[1]
        self.photo                  = args[2]
        self.description:       str =args[3]

        self.total_tickets :    int =args[4]
        self.remaining_tickets: int =args[5]
        self.ticket_value:      int =args[6]

        self.is_active:         bool =args[7]
        self.raffle_state:      str =args[8]

        self.start_date:        datetime =args[9]
        self.end_date:          date = args[10]
        