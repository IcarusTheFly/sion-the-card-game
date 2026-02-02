"use client";

import Image from "next/image";
import { ReactNode, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function CardTooltip({
  collectionNumber,
  cardName,
  children,
  placement = "right-start",
}: {
  collectionNumber: string;
  cardName: string;
  children: ReactNode;
  placement?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const calculatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    
    let top = rect.top;
    let left = rect.right + 10; // Default right

    if (placement.includes("top")) {
        // Position above centered
        top = rect.top - 346; // 336 height + 10 padding
        left = rect.left + (rect.width / 2) - 120; // Center (120 is half of 240 width)
    } else if (placement.includes("right")) {
        // Position to the right, aligned top
        top = rect.top;
        left = rect.right + 10;
    }

    // Basic boundary checks could go here, but keeping it simple for speed

    setCoords({ top, left });
  };

  const handleMouseEnter = () => {
    calculatePosition();
    setIsVisible(true);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVisible(false)}
        className="w-full cursor-help relative"
      >
        {children}
      </div>
      {mounted && isVisible && createPortal(
        <div 
            style={{ 
                position: 'fixed', 
                top: coords.top, 
                left: coords.left, 
                zIndex: 9999,
                pointerEvents: 'none'
            }}
            className="animate-in fade-in zoom-in-95 duration-100"
        >
            <div className="overflow-hidden rounded-lg bg-gray-900 border border-gray-700 shadow-2xl relative w-[240px] h-[336px]">
                <Image
                    src={`/images/${collectionNumber}.jpg`}
                    fill
                    sizes="240px"
                    alt={cardName}
                    priority={true}
                    className="block object-cover"
                />
            </div>
        </div>,
        document.body
      )}
    </>
  );
}
