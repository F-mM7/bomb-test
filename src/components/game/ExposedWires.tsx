import React, { useEffect, useRef } from "react";
import { exposedWiresContainerStyle, getWireStyleWithState } from "../../styles/components/exposedWires.styles";
import { WireBorders } from "./WireBorders";
import { WireContainer } from "./WireContainer";
import type { WirePosition } from "../../types/game/game.types";

interface ExposedWiresProps {
  onWireClick: (wire: WirePosition) => void;
  isLeftCut?: boolean;
  isRightCut?: boolean;
  disabled?: boolean;
}

const ExposedWires: React.FC<ExposedWiresProps> = ({ 
  onWireClick, 
  isLeftCut = false, 
  isRightCut = false, 
  disabled = false 
}) => {
  const wireStyleWithState = getWireStyleWithState(disabled);
  const wiresRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!wiresRef.current || !containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const wiresWidth = 640; // LAYOUT.CONTAINER_WIDTH
      const scale = Math.min(1, (containerWidth - 40) / wiresWidth); // 40px margin
      
      wiresRef.current.style.setProperty('--wires-scale', scale.toString());
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div ref={wiresRef} style={exposedWiresContainerStyle}>
        <WireBorders />
        <WireContainer
          onWireClick={onWireClick}
          isLeftCut={isLeftCut}
          isRightCut={isRightCut}
          wireStyle={wireStyleWithState}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ExposedWires;