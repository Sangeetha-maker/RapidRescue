import { Card } from "@/components/ui/card";
import { Bluetooth, Car, Zap } from "lucide-react";

export const BluetoothSOSInfo = () => {
  return (
    <Card className="p-6 shadow-card bg-gradient-to-br from-card to-secondary/5 animate-slide-in">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
            <Bluetooth className="h-6 w-6 text-secondary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Bluetooth SOS</h3>
            <p className="text-sm text-muted-foreground">Traffic Clearance System</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
            <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">200m Range</p>
              <p className="text-xs text-muted-foreground">
                Bluetooth 5.x chips alert all vehicles within 200 meters
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
            <Car className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground">Auto-Alert</p>
              <p className="text-xs text-muted-foreground">
                Nearby drivers receive instant notification to clear the route
              </p>
            </div>
          </div>
        </div>

        {/* Visual representation */}
        <div className="relative h-32 bg-muted rounded-lg overflow-hidden mt-4">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ambulance in center */}
            <div className="relative z-10">
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center shadow-lg">
                <Bluetooth className="h-6 w-6 text-secondary-foreground animate-pulse" />
              </div>
            </div>

            {/* Bluetooth signal waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 border-4 border-secondary/40 rounded-full animate-ping-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 border-4 border-secondary/20 rounded-full animate-ping-slow" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Nearby cars */}
            <div className="absolute top-4 left-8">
              <Car className="h-6 w-6 text-muted-foreground opacity-60" />
            </div>
            <div className="absolute top-4 right-8">
              <Car className="h-6 w-6 text-muted-foreground opacity-60" />
            </div>
            <div className="absolute bottom-4 left-12">
              <Car className="h-6 w-6 text-muted-foreground opacity-60" />
            </div>
            <div className="absolute bottom-4 right-12">
              <Car className="h-6 w-6 text-muted-foreground opacity-60" />
            </div>
          </div>
          
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
            200m Proximity Alert
          </div>
        </div>
      </div>
    </Card>
  );
};
