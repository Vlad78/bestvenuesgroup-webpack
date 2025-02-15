"use client";

import { motion } from "framer-motion";
import { Input } from "../shared/components/Input";
import { Button } from "../shared/components/Button";

export const Subscribe = () => {
  return (
    <div className="flex items-center gap-4 h-[144px] bg-gray-8 px-12">
      <motion.h4
        className="text-h4 text-white uppercase w-[60%] mr-auto select-none"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "tween", delay: 0.5 }}
        viewport={{ once: true }}
      >
        Subscribe to our newsletter
      </motion.h4>
      <div className="flex items-center justify-end w-[40%] gap-4 ">
        <Input
          type="text"
          placeholder="Your email address"
          className="font-onest text-body placeholder:text-body transition-all duration-500 focus:outline-none"
        />
        <Button
          variant="medium-outlined"
          title="subscribe"
          icon="bell"
          className=""
        />
      </div>
    </div>
  );
};
