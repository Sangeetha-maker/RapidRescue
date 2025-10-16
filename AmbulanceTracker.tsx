import { Card } from "@/components/ui/card";
import { Truck, Clock, Navigation } from "lucide-react";

interface AmbulanceTrackerProps {
  eta: string;
  distance: string;
  ambulanceId: string;
  progress: number;
}

export const AmbulanceTracker = ({ eta, distance, ambulanceId, progress }: AmbulanceTrackerProps) => {
  const ambulancePosition = Math.min(progress, 100);
  return (
    <Card className="p-6 shadow-card animate-slide-in">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">Ambulance Tracking</h3>
          <div className="flex items-center gap-2 text-secondary">
            <Truck className="h-5 w-5 animate-pulse-emergency" />
            <span className="text-sm font-semibold">ID: {ambulanceId}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">ETA</p>
              <p className="text-2xl font-bold text-foreground">{eta}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
            <Navigation className="h-8 w-8 text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="text-2xl font-bold text-foreground">{distance}</p>
            </div>
          </div>
        </div>

        {/* Simple map placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-muted to-background rounded-lg overflow-hidden border-2 border-border">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Destination marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 bg-primary rounded-full animate-ping-slow" />
                <div className="h-4 w-4 bg-primary rounded-full" />
              </div>
              
              {/* Ambulance marker - moves based on progress */}
              <div 
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                style={{
                  top: `${33 - (ambulancePosition * 0.17)}%`,
                  left: `${33 + (ambulancePosition * 0.17)}%`
                }}
              >
                <Truck className="h-8 w-8 text-secondary animate-pulse-emergency" />
              </div>

              {/* Route line */}
              <svg className="absolute top-0 left-0 w-32 h-32 -translate-x-1/4 -translate-y-1/4" viewBox="0 0 100 100">
                <path
                  d="M 30 30 Q 50 20, 70 50"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
            Live Tracking
          </div>
        </div>
      </div>
    </Card>
  );
};
