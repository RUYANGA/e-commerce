import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
//import Image from 'next/image'
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ShoppingCart } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-3 lg:pb-1 lg:pt-20">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Faster Agri-Shop Solutions
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Modern agri-business apps the easy way. Whether you&apos;re
                  connecting farmers to buyers or managing crop data, it gives
                  you simple, ready-to-use components that save time, reduce
                  effort, and help your platform grow — all without sacrificing
                  quality.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href="#"
                      className="bg-red-500 text-white hover:bg-indigo-700 hover:text-white"
                    >
                      <ShoppingCart />
                      <span>Order</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  ></Button>
                </div>
              </div>
              {/* <Image
                                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="/easy.png"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            /> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
