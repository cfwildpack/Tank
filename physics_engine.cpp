#include <iostream>
using namespace std;

class PhysicsEngine {
public:
    double calculateForce(double mass, double acceleration) {
        return mass * acceleration;
    }
};

int main() {
    PhysicsEngine engine;
    double force = engine.calculateForce(50000, 3);
    cout << "Calculated Force: " << force << " N" << endl;
    return 0;
}
