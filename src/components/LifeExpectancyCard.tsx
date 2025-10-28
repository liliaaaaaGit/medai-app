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

        {/* Mobile view - text overlay on image */}
        <div className="md:hidden">
          <div className="relative w-full">
            <Image
              src="/life-expectancy.png"
              alt="Life expectancy"
              width={600}
              height={900}
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="space-y-2 text-center text-white mb-4">
                <h2 className="text-2xl font-bold drop-shadow-lg">Lebenserwartung</h2>
                <p className="text-sm text-white drop-shadow-lg">basierend auf Ihrer Diagnose:</p>
                <p className="text-5xl font-bold text-destructive drop-shadow-lg">1 Tag</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <Link href="/info" className="block w-full">
              <Button variant="outline" className="w-full bg-red-500 text-white hover:bg-red-600 border-red-500">
                Mehr erfahren
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
