"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../UI/3d-card";

export default function CardProject() {
  return (
    <div className=" flex flex-col flex-wrap justify-center gap-8">
      <CardContainer className="inter-var py-0">
        <CardBody className=" relative group/card w-[18rem] sm:w-[25rem] min-h-[20rem] p-6 rounded-md purpleBg bg-opacity-20">
          <CardItem
            translateZ="50"
            className="text-xl text-center font-aldrich text-white dark:text-white"
          >
            FLASH RECORDS
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-white font-aldrich text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Site vitrine : HTML, CSS & JAVASCRIPT
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src="/image/siteflsh.png"
              height="1000"
              width="1000"
              className="h-70 w-full rounded-md object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mt-10">
            <CardItem
              translateZ={50}
              as="a"
              href="https://flash-records.fr"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-xs font-bold"
            >
              Voir le site
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className=" relative group/card w-[18rem] sm:w-[25rem] min-h-[20rem] p-6 rounded-md purpleBg bg-opacity-20">
          <CardItem
            translateZ="50"
            className="text-xl text-center font-aldrich text-white dark:text-white"
          >
            PROSPECTOR
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-white font-aldrich text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Application web (3 personnes) : NodeJs, ReactJs/Redux
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src="/image/Propesctor_AccueilCo.png"
              height="1000"
              width="1000"
              className="h-70 w-full rounded-md object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mt-10">
            <CardItem
              translateZ={50}
              as="a"
              href="https://projet-assistant-prospection-commerciale-dlnl.onrender.com/"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-xs font-bold"
            >
              Voir le site
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className=" relative group/card w-[18rem] sm:w-[25rem] min-h-[20rem] p-6 rounded-md purpleBg bg-opacity-20">
          <CardItem
            translateZ="50"
            className="text-xl text-center font-aldrich text-white dark:text-white"
          >
            BELLE NIPPES
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-white font-aldrich text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Site e-commerce (2 personnes) : ReactJs/Redux, Symfony
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src="/image/Bellenippe.png"
              height="1000"
              width="1000"
              className="h-70 w-full rounded-md object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mt-10">
            <CardItem
              translateZ={50}
              as="a"
              href="https://github.com/jessygomes/Belle-Nippe"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black font-aldrich text-xs font-bold"
            >
              Coming Soon
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
