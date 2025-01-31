import { motion } from "framer-motion";

const partners = [
  {
    logo: "/images/amazon.png",
    name: "Amazon"
  },
  {
    logo: "/images/microsoft.png",
    name: "Microsoft"
  },
  {
    logo: "/images/oracle.png",
    name: "Oracle"
  },
  {
    logo: "/images/salesforce.png",
    name: "Salesforce"
  },
  {
    logo: "/images/twitch.png",
    name: "Twitch"
  },
  {
    logo: "/images/zillow.png",
    name: "Zillow"
  }
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/partners.png"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-secondary mb-12"
            >
              Our Partners
            </motion.h2>

            <div className="grid grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-full p-4 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;