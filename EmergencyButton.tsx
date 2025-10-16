import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

interface EmergencyButtonProps {
  onClick: () => void;
  isActive?: boolean;
}

export const EmergencyButton = ({ onClick, isActive = false }: EmergencyButtonProps) => {
  return (
    <div className="relative">
      {/* Pulsing rings for emergency effect */}
      {isActive && (
        <>
          <div className="absolute inset-0 rounded-full bg-primary animate-ping-slow opacity-75" />
          <div className="absolute inset-0 rounded-full bg-primary animate-ping-slow opacity-50" style={{ animationDelay: '1s' }} />
        </>
      )}
      
      <Button
        onClick={onClick}
        size="lg"
        className="relative h-72 w-72 rounded-full bg-gradient-emergency text-white shadow-emergency hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 text-6xl font-black tracking-tight"
      >
        <div className="flex flex-col items-center gap-4">
          <Activity className="h-20 w-20" strokeWidth={3} />
          <span>RESCUE</span>
        </div>
      </Button>
    </div>
  );
};
