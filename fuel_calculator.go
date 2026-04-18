package main

import "fmt"

func calculateRange(fuel int, consumption float64) float64 {
	return float64(fuel) / consumption
}

func main() {
	rangeKm := calculateRange(1200, 4.5)
	fmt.Printf("Estimated operational range: %.2f km\n", rangeKm)
}
