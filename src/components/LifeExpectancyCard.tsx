"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function LifeExpectancyCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      {/* Desktop view - side by side */}
      <div className="hidden md:flex h-[350px]">
        <div className="relative w-2/5 h-full">
          <Image
            src="/life-expectancy.png"
            alt="Life expectancy"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="w-3/5 h-full flex flex-col justify-center items-center space-y-2 px-6">
          <div className="space-y-1 text-center">
            <h2 className="text-2xl font-bold text-foreground">Lebenserwartung</h2>
            <p className="text-sm text-muted-foreground">basierend auf Ihrer Diagnose:</p>
            <p className="text-6xl font-bold text-destructive">1 Tag</p>
          </div>
          <div className="pt-1 w-full">
            <Link href="/info" className="block w-full">
              <Button variant="outline" className="w-full">
                Mehr erfahren
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile view - side by side */}
      <div className="md:hidden flex h-[250px]">
        <div className="relative w-1/2 h-full">
          <Image
            src="/life-expectancy.png"
            alt="Life expectancy"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center space-y-1 px-3">
          <div className="space-y-1 text-center">
            <h2 className="text-base font-bold text-foreground">Lebenserwartung</h2>
            <p className="text-xs text-muted-foreground">basierend auf Ihrer Diagnose:</p>
            <p className="text-2xl font-bold text-destructive">1 Tag</p>
          </div>
          <div className="pt-1 w-full">
            <Link href="/info" className="block w-full">
              <Button variant="outline" className="w-full bg-red-500 text-white text-xs">
                Mehr erfahren
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
