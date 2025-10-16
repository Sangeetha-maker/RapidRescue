import { Check, MapPin, Truck, UserPlus, Hospital } from "lucide-react";
import { cn } from "@/lib/utils";

export type Phase = 'idle' | 'requesting' | 'assigned' | 'enroute' | 'arrived' | 'hospital';

interface PhaseIndicatorProps {
  currentPhase: Phase;
}

const phases = [
  { id: 'requesting', label: 'Request Sent', icon: MapPin },
  { id: 'assigned', label: 'Ambulance Assigned', icon: UserPlus },
  { id: 'enroute', label: 'En Route', icon: Truck },
  { id: 'arrived', label: 'Arrived', icon: Check },
  { id: 'hospital', label: 'To Hospital', icon: Hospital },
] as const;

export const PhaseIndicator = ({ currentPhase }: PhaseIndicatorProps) => {
  const currentIndex = phases.findIndex(p => p.id === currentPhase);
  
  if (currentPhase === 'idle') return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 animate-slide-in">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-muted -z-10">
          <div 
            className="h-full bg-gradient-emergency transition-all duration-700"
            style={{ width: `${(currentIndex / (phases.length - 1)) * 100}%` }}
          />
        </div>

        {phases.map((phase, index) => {
          const isActive = index <= currentIndex;
          const Icon = phase.icon;
          
          return (
            <div key={phase.id} className="flex flex-col items-center gap-2 flex-1">
              <div
                className={cn(
                  "h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 border-4",
                  isActive
                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                    : "bg-background border-muted text-muted-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span
                className={cn(
                  "text-xs md:text-sm font-semibold text-center transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {phase.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
