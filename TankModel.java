public class TankModel {
    private String model;
    private int armor;

    public TankModel(String model, int armor) {
        this.model = model;
        this.armor = armor;
    }

    public void display() {
        System.out.println("Model: " + model);
        System.out.println("Armor: " + armor + " mm");
    }

    public static void main(String[] args) {
        TankModel tank = new TankModel("TX-90", 850);
        tank.display();
    }
}
