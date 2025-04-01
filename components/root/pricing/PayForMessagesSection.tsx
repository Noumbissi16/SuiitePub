import React from "react";
import PayAYGCard from "./PayAYGCard";
import { motion } from "framer-motion";
const PayForMessagesSection = () => {
  return (
    <section className="bg-blue-100 py-28 text-center mb-16 mt-36">
      <div className="max-w-6xl mx-auto text-center flex flex-col">
        <span className="capitalize tracking-widest mb-4 block text-blue-500">
          PAY FOR MESSAGES
        </span>
        <motion.h1
          initial={{
            opacity: 0,
            y: 8,
          }}
          viewport={{ once: true, amount: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            startOffset: 0.2,
            transition: {
              duration: 0.5,
            },
          }}
          className="text-6xl self-center font-bold lg:max-w-3xl mb-8 text-center max-md:text-5xl max-sm:text-3xl "
        >
          Pay Only for What You Use
        </motion.h1>

        <div className="flex max-lg:flex-col  items-center justify-center gap-12 mt-10 max-sm:mt-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            viewport={{ once: true, amount: 0.6 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeOut",
                delay: 0.25,
                duration: 0.5,
              },
            }}
          >
            <PayAYGCard
              btnText="Free Credits"
              description="Pay only for what you use and get free credits to send messages"
              title="Pay-as-You-Go Pricing"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            viewport={{ once: true, amount: 0.6 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeOut",
                delay: 0.5,
                duration: 0.5,
              },
            }}
          >
            <PayAYGCard
              btnText="Contact Us"
              description="You only pay for the messages you send and receive. There are no monthly commitments or contracts required. "
              title="Volume Discounts for Committed Use"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PayForMessagesSection;
