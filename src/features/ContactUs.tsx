"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/Button";

export const ContactUs = () => {
  return (
    <div className="flex items-center h-[196px] bg-primary-tan-0 px-12 py-[54px]">
      <motion.h3
        className="w-[55%] text-h3 uppercase select-none text-white "
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "tween" }}
        viewport={{ once: true }}
      >
        Ready to learn how we can make your event exceptional?
      </motion.h3>
      <Button
        variant="large-outlined"
        title="contact us"
        icon="contact"
        className="ml-auto"
      />
    </div>
  );
};
