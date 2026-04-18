class Tank:
    def __init__(self, model, fuel=100):
        self.model = model
        self.fuel = fuel
        self.position = 0

    def move(self, distance):
        fuel_needed = distance * 0.5
        if self.fuel >= fuel_needed:
            self.position += distance
            self.fuel -= fuel_needed
            print(f"{self.model} moved {distance} km.")
        else:
            print("Not enough fuel.")

    def status(self):
        print(f"Position: {self.position} km")
        print(f"Fuel: {self.fuel} liters")

if __name__ == "__main__":
    tank = Tank("TX-90")
    tank.move(10)
    tank.status()
