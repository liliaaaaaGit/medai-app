"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function LifeExpectancyCard() {
  return (
    <Card>
      <CardContent className="p-0">
        {/* Desktop view - side by side */}
        <div className="hidden md:flex">
          <div className="relative w-2/5 h-auto min-h-[600px]">
            <Image
              src="/life-expectancy.png"
              alt="Life expectancy"
              fill
              className="object-contain object-top rounded-l-lg"
            />
          </div>
          <div className="w-3/5 p-10 flex flex-col justify-center items-center space-y-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold text-foreground">Lebenserwartung</h2>
              <p className="text-base text-muted-foreground">basierend auf Ihrer Diagnose:</p>
              <p className="text-7xl font-bold text-destructive">1 Tag</p>
            </div>
            <div className="pt-6 w-full">
              <Link href="/info" className="block w-full">
                <Button variant="outline" className="w-full">
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile view - side by side */}
        <div className="md:hidden flex">
          <div className="relative w-1/2 h-auto min-h-[400px]">
            <Image
              src="/life-expectancy.png"
              alt="Life expectancy"
              fill
              className="object-contain object-top rounded-l-lg"
            />
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-center items-center space-y-3">
            <div className="space-y-2 text-center">
              <h2 className="text-lg font-bold text-foreground">Lebenserwartung</h2>
              <p className="text-xs text-muted-foreground">basierend auf Ihrer Diagnose:</p>
              <p className="text-3xl font-bold text-destructive">1 Tag</p>
            </div>
            <div className="pt-3 w-full">
              <Link href="/info" className="block w-full">
                <Button variant="outline" className="w-full bg-red-500 text-white hover:bg-red-600 border-red-500 text-sm">
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
