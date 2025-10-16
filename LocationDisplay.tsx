import { MapPin, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LocationDisplayProps {
  location: string;
  isLocked?: boolean;
}

export const LocationDisplay = ({ location, isLocked = false }: LocationDisplayProps) => {
  return (
    <Card className="p-4 shadow-card animate-slide-in">
      <div className="flex items-center gap-3">
        {isLocked ? (
          <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
        ) : (
          <MapPin className="h-6 w-6 text-primary flex-shrink-0 animate-pulse" />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-muted-foreground">
            {isLocked ? "Location Locked" : "Detecting Location..."}
          </p>
          <p className="text-base font-semibold text-foreground truncate">{location}</p>
        </div>
      </div>
    </Card>
  );
};
