class BattleController {
    constructor() {
        this.tanks = [];
    }

    addTank(name) {
        this.tanks.push(name);
        console.log(`${name} deployed to battlefield.`);
    }

    startBattle() {
        console.log("Battle started!");
        this.tanks.forEach(t => console.log(`${t} is engaging.`));
    }
}

const battle = new BattleController();
battle.addTank("TX-90");
battle.startBattle();
